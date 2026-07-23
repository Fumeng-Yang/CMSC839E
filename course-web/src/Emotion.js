import React, { useEffect, useRef, useMemo, useState } from 'react';
import * as d3 from 'd3';
import useGoogleSheets from 'use-google-sheets';

const ClassFeelingsVisualization = () => {
  const svgRef = useRef();
  const containerRef = useRef();
  const [focusDate, setFocusDate] = useState(new Date()); // Current focus date
  const [isDragging, setIsDragging] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1440, height: 200 });

  // Configuration - responsive
  const margin = { top:10, right: 40, bottom: 40, left: 60 };
  const width = dimensions.width - margin.left - margin.right;
  const height = dimensions.height - margin.bottom - margin.top;
  const dotRadius = 6;
  const dayWidth = width / 7; // 7 days visible

  // Handle responsive sizing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth - 60; // Account for padding
        const isMobile = containerWidth < 768;
        setDimensions({
          width: Math.max(300, containerWidth),
          height: isMobile ? 200 : 200
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch spreadsheet data using the hook
  const { data: sheetsData, loading, error: sheetsError } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID
  });

  // Generate sample data for demonstration
  const generateSampleData = () => {
    const startDate = new Date(2025, 8, 1); // Sep 1, 2025
    const endDate = new Date(2025, 11, 23); // Dec 23, 2025
    const sampleData = [];
    
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + Math.random() * 3 + 1)) {
      const numEntries = Math.floor(Math.random() * 8) + 1;
      for (let i = 0; i < numEntries; i++) {
        const baseFeeling = 5 + Math.sin((d - startDate) / (1000 * 60 * 60 * 24 * 14)) * 2;
        const eventStart = new Date(d.getTime() + Math.random() * 7 * 24 * 60 * 60 * 1000);
        const eventEnd = new Date(eventStart.getTime() + Math.random() * 5 * 24 * 60 * 60 * 1000);
        
        sampleData.push({
          timestamp: new Date(d),
          feeling: Math.max(1, Math.min(10, Math.round(baseFeeling + (Math.random() - 0.5) * 4))),
          conference: `Event ${Math.floor(Math.random() * 5) + 1}`,
          role: ['Student', 'TA', 'Researcher'][Math.floor(Math.random() * 3)],
          startDate: eventStart,
          endDate: eventEnd
        });
      }
    }
    return sampleData;
  };

  // Parse and process the data
  const rawData = useMemo(() => {
    if (!sheetsData || !sheetsData[1]?.data) {
      return generateSampleData();
    }
    
    const data = sheetsData[0].data;
    return data
      .filter(row => row.Timestamp && row['How do you feel'])
      .map(row => ({
        timestamp: new Date(row.Timestamp),
        conference: row['Conference/Venue/Event'] || '',
        feeling: parseInt(row['How do you feel']) || 5,
        role: row['What keeps you busy?'] || '',
        startDate: row['Start date'] ? new Date(row['Start date']) : null,
        endDate: row['To date'] ? new Date(row['To date']) : null
      }))
      .filter(d => !isNaN(d.timestamp) && !isNaN(d.feeling) && d.feeling >= 1 && d.feeling <= 10 && d.startDate && d.endDate);
  }, [sheetsData]);

  // Expand data points across multiple days if event spans multiple days
  const expandedData = useMemo(() => {
    const expanded = [];
    rawData.forEach(d => {
      const startDay = new Date(d.startDate);
      startDay.setHours(0, 0, 0, 0);
      const endDay = new Date(d.endDate);
      endDay.setHours(0, 0, 0, 0);
      
      // Create a data point for each day the event spans
      for (let day = new Date(startDay); day <= endDay; day.setDate(day.getDate() + 1)) {
        expanded.push({
          ...d,
          eventDay: new Date(day),
          id: `${d.timestamp.getTime()}-${day.getTime()}` // Unique ID for each day point
        });
      }
    });
    return expanded;
  }, [rawData]);

  // Get the 7-day window data based on focus date (using event days)
  const windowData = useMemo(() => {
    const startWindow = new Date(focusDate);
    startWindow.setDate(startWindow.getDate() - 1); // 1 day before
    startWindow.setHours(0, 0, 0, 0);
    
    const endWindow = new Date(focusDate);
    endWindow.setDate(endWindow.getDate() + 6); // 6 days after
    endWindow.setHours(23, 59, 59, 999);
    
    return expandedData.filter(d => {
      const eventDay = new Date(d.eventDay);
      eventDay.setHours(0, 0, 0, 0);
      return eventDay >= startWindow && eventDay <= endWindow;
    });
  }, [expandedData, focusDate]);

  // Group data by day and position dots
  const positionedData = useMemo(() => {
    const groupedByDay = d3.group(windowData, d => d.eventDay.toDateString());
    const positioned = [];
    
    groupedByDay.forEach((dayData, dayString) => {
      // Sort by feeling level, then by timestamp for consistent positioning
      const sortedDayData = dayData.sort((a, b) => {
        if (a.feeling !== b.feeling) return a.feeling - b.feeling;
        return a.timestamp - b.timestamp;
      });
      
      // Group by feeling level within each day for horizontal stacking
      const groupedByFeeling = d3.group(sortedDayData, d => d.feeling);
      
      groupedByFeeling.forEach((feelingData, feeling) => {
        feelingData.forEach((d, index) => {
          positioned.push({
            ...d,
            xPos: index * (dotRadius * 2.2), // Horizontal offset for multiple dots at same feeling
            yPos: feeling
          });
        });
      });
    });
    
    return positioned;
  }, [windowData]);

  // Create visualization
  useEffect(() => {
    if (!expandedData.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

  

    // Set explicit SVG dimensions
    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .style("display", "block");

    // Create main group
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add clipping path to prevent elements from showing outside the main area
    const clipId = `clip-${Math.random().toString(36).substr(2, 9)}`;
    svg.append("defs")
      .append("clipPath")
      .attr("id", clipId)
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height);

    // Set up scales
    const startWindow = new Date(focusDate);
    startWindow.setDate(startWindow.getDate() - 1);
    const endWindow = new Date(focusDate);
    endWindow.setDate(endWindow.getDate() + 6);

    const xScale = d3.scaleTime()
      .domain([startWindow, endWindow])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, 10.9])
      .range([height, 0]);

    // Add background grid
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%m/%d")).ticks(7);
    const yAxis = d3.axisLeft(yScale).tickValues([1, 10]).tickSize(0); // Only show ticks at 1 and 10, no tick lines

    // Create clipped group for chart content
    const chartGroup = g.append("g")
      .attr("clip-path", `url(#${clipId})`);

    // Vertical day lines (clipped)
    for (let i = 0; i <= 7; i++) {
      const dayDate = new Date(startWindow);
      dayDate.setDate(dayDate.getDate() + i);
      dayDate.setHours(0, 0, 0, 0);
      const x = xScale(dayDate);
      
      chartGroup.append("line")
        .attr("x1", x)
        .attr("x2", x)
        .attr("y1", 0)
        .attr("y2", height)
        .attr("stroke", "#e5e5e5")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "2,2");
    }

    // Color scale for feelings
   // Custom feeling color scale: 1 (blue) to 10 (red)
    const feelingColorScale = d3.scaleLinear()
      .domain([1, 5.5, 10])
      .range([ "#ff3939", "#bbbbbb", "#0083f5"]) // Blue to Red
      .interpolate(d3.interpolateRgb);
      
        // Create tooltip div
    const tooltip = d3.select(containerRef.current)
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
    //   .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.9)")
      .style("color", "white")
      .style("padding", "8px 12px")
      .style("border-radius", "6px")
      .style("font-size", "12px")
      .style("font-family", "Arial, sans-serif")
      .style("pointer-events", "none")
      .style("z-index", "100000")
      .style("box-shadow", "0 2px 8px rgba(0,0,0,0.3)");

    // Add dots - positioned by event day (clipped)
    chartGroup.selectAll(".dot")
      .data(positionedData)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", d => {
        const dayStart = xScale(d.eventDay);
        return dayStart + (d.xPos || 0) + dotRadius * 2; // Offset from day line
      })
      .attr("cy", d => yScale(d.yPos))
      .attr("r", dotRadius)
      .attr("fill", d => feelingColorScale(d.feeling))
      .attr("stroke", "#fff")
      .attr("stroke-width", 1)
      .attr("opacity", 0.8)
      .style("pointer-events", "all")
      .style("cursor", "pointer") // Change cursor for dots
      .on("mouseover", function(event, d) {
        // Only show tooltip if not dragging
        if (!isDragging) {
          // Stop event propagation to prevent drag
          event.stopPropagation();
          
          // Show and position tooltip
          tooltip
            .style("opacity", "1")
            .html(`
              <div style="font-weight: bold; margin-bottom: 4px;">${d.conference}</div>
              <div style="margin-bottom: 2px;">Role: ${d.role}</div>
              <div>Feeling: ${d.feeling}</div>
            `);
        }
      })
      .on("mousemove", function(event, d) {
        if (!isDragging) {
          // Get container position
          const containerRect = containerRef.current.getBoundingClientRect();
          
          // Position tooltip relative to mouse
          tooltip
            .style("left", (event.pageX - containerRect.left / 3) + "px")
            .style("top", (event.pageY + 15) + "px");
        }
      })
      .on("mouseout", function() {
        // Hide tooltip on mouseout
        tooltip.style("opacity", "0");
      });

    // Add axes (not clipped)
    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "middle")
      .attr("font-size", "12px");

    // Add Y-axis with custom styling - remove the domain line
    const yAxisGroup = g.append("g")
      .call(yAxis);
    
    // Remove the vertical domain line
    yAxisGroup.select(".domain").remove();
    
    // Style the tick labels
    yAxisGroup.selectAll("text")
      .attr("font-size", "12px");

    // Add emoji labels for feeling scale
    // Crying emoji at 10 (high excitement/meltdown)
    g.append("text")
      .attr("x", -35)
      .attr("y", yScale(10))
      .attr("dy", "0.35em")
      .style("text-anchor", "middle")
      .style("font-size", "20px")
      .text("😎");
   
    
    // Star eyes emoji at 1 (low/excited)
    g.append("text")
      .attr("x", -35)
      .attr("y", yScale(1))
      .attr("dy", "0.35em")
      .style("text-anchor", "middle")
      .style("font-size", "20px")
      .text("😭");
   

    // Add drag functionality directly to the chart background
    const drag = d3.drag()
      .on("start", (event) => {
        setIsDragging(true);
        // Hide tooltip when drag starts
        tooltip.style("opacity", "0");
      })
      .on("drag", (event) => {
        const newDate = xScale.invert(event.x);
        setFocusDate(newDate);
      })
      .on("end", () => {
        // Small delay before allowing tooltips again
        setTimeout(() => setIsDragging(false), 100);
      });

    // Add drag to the entire chart group, but with lower priority than dots
    g.call(drag)
      .style("cursor", "grab");

  }, [positionedData, focusDate, dimensions]);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
        <div style={{ fontSize: '18px' }}>Loading class feelings data...</div>
      </div>
    );
  }

  const containerStyle = {
    width: '100%',
    background: '#f4f4f4',
    padding: '10px 30px',
    marginBottom: '10px',
    borderRadius: '8px'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333'
  };

  const descriptionStyle = {
    color: '#666',
    marginBottom: '8px',
    fontSize: window.innerWidth < 768 ? '14px' : '16px',
    lineHeight: '1.4'
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px'
  };

  const buttonStyle = {
    padding: '6px 12px',
    backgroundColor: '#e5e5e5',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#d0d0d0'
  };

  return (
    <div style={containerStyle} ref={containerRef}>
      <div style={{ marginBottom: '16px' }}>
        <h2 style={titleStyle}>Class Feelings Dotplot Dashboard</h2>
        <p style={descriptionStyle}>
          Each dot represents one record for one day. If a record spans multiple days (start to end date), it creates separate dots for each day.
          Dots on the same day with the same feeling level are grouped horizontally. Drag to navigate through time. We can decide homework deadlines based on this chart.
        </p>
        
        {/* Navigation controls */}
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            onClick={() => {
              const newDate = new Date(focusDate);
              newDate.setDate(newDate.getDate() - 7);
              setFocusDate(newDate);
            }}
          >
            ← Week Back
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            onClick={() => setFocusDate(new Date())}
          >
            Today
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            onClick={() => {
              const newDate = new Date(focusDate);
              newDate.setDate(newDate.getDate() + 7);
              setFocusDate(newDate);
            }}
          >
            Week Forward →
          </button>
        </div>
      </div>
      
      <div style={{ overflowX: 'auto' }}>
        <svg ref={svgRef}></svg>
      </div>
      
    </div>
  );
};

export default ClassFeelingsVisualization;