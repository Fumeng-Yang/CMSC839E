import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import { syllabusData, syllabus_intro } from './config.js';
import { FiExternalLink, FiChevronDown, FiChevronRight, FiBook, FiBookmark, FiMessageCircle } from "react-icons/fi";

class Syllabus extends Component {
    state = {}

    componentDidUpdate() {
        Array.from(document.links)
            .filter(link => link.hostname != window.location.hostname)
            .forEach(link => link.target = '_blank');
    }

    hasAnyOptional() {
        return syllabusData.some(row => row.optional && row.optional.length > 0);
    }

    allOptionalOpen() {
        return syllabusData.every((row, i) =>
            !row.optional || row.optional.length === 0 || this.state[`opt-${i}`]
        );
    }

    toggleAll() {
        const allOpen = this.allOptionalOpen();
        const newState = {};
        syllabusData.forEach((row, i) => {
            if (row.optional && row.optional.length > 0) {
                newState[`opt-${i}`] = !allOpen;
            }
        });
        this.setState(newState);
    }

    renderPaperLink() {
        return (
            <svg stroke="#0083f5" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        );
    }

    renderReadings(required, optional, rowIndex, reqStart, optStart) {
        if ((!required || required.length === 0) && (!optional || optional.length === 0)) return null;
        const isOpen = this.state[`opt-${rowIndex}`];

        return (
            <>
                {required && required.map((paper, i) => (
                    <div className='row' key={i}>
                        <div className='col-1' style={{whiteSpace: 'nowrap'}}>
                            <font className='paper-index'><FiBook style={{verticalAlign: '-2px'}} /> R{reqStart + i}</font>
                        </div>
                        <div className='col-11'>
                            {paper.title} <a href={paper.url} target='_blank' rel='noreferrer'>
                                {this.renderPaperLink()}
                            </a>
                            {paper.note && <span className='paper-note-icon' onClick={(e) => {
                                const key = `note-${rowIndex}-${paper.title}`;
                                this.setState(prev => ({ [key]: !prev[key] }));
                            }}><FiMessageCircle style={{verticalAlign: '-2px'}} /></span>}
                            {paper.pre && <span className='paper-pre-badge'>{paper.pre}</span>}
                            {paper.note && this.state[`note-${rowIndex}-${paper.title}`] && (
                                <div className='paper-note-content'>{paper.note}</div>
                            )}
                        </div>
                    </div>
                ))}
                {optional && optional.length > 0 && (
                    <div
                        className='optional-toggle'
                        onClick={() => this.setState(prev => ({ [`opt-${rowIndex}`]: !prev[`opt-${rowIndex}`] }))}
                    >
                        {isOpen ? <FiChevronDown /> : <FiChevronRight />}
                        {' '}Optional ({optional.length})
                    </div>
                )}
                {isOpen && optional && optional.map((paper, i) => (
                    <div className='row optional-paper' key={'o' + i}>
                        <div className='col-1' style={{whiteSpace: 'nowrap'}}>
                            <font className='paper-index' style={{color: '#555'}}><FiBookmark style={{verticalAlign: '-2px'}} /> O{optStart + i}</font>
                        </div>
                        <div className='col-11'>
                            {paper.title} <a href={paper.url} target='_blank' rel='noreferrer'>
                                {this.renderPaperLink()}
                            </a>
                            {paper.note && <span className='paper-note-icon' onClick={(e) => {
                                const key = `note-${rowIndex}-${paper.title}`;
                                this.setState(prev => ({ [key]: !prev[key] }));
                            }}><FiMessageCircle style={{verticalAlign: '-2px'}} /></span>}
                            {paper.pre && <span className='paper-pre-badge'>{paper.pre}</span>}
                            {paper.note && this.state[`note-${rowIndex}-${paper.title}`] && (
                                <div className='paper-note-content'>{paper.note}</div>
                            )}
                        </div>
                    </div>
                ))}
            </>
        );
    }

    render() {
        return (
            <>
                <h2 id='syllabus'>Syllabus</h2>

                <p dangerouslySetInnerHTML={{ __html: syllabus_intro }}>
                </p>

                <p>
                    <FiBook style={{verticalAlign: '-2px'}} /> Required readings — read before class and submit discussion questions.
                    <br/>
                    <FiBookmark style={{verticalAlign: '-2px', color: '#aaaaaa'}} /> Optional readings — for further exploration if you are interested in the topic.
                    <br/>
                    <FiMessageCircle style={{verticalAlign: '-2px', color: 'var(--theme-color)'}} /> Click for notes about the paper.
                    <br/>
                    <span className='paper-pre-badge'>2-ok</span> Number of co-presenters allowed for this paper.
                </p>

                <div style={{ 'overflowX': 'auto' }}>
                    <table className='syllabus-table'>
                        <thead>
                            <tr>
                                <th>Week</th>
                                <th>Date</th>
                                <th>Topics</th>
                                <th>Reading (due 9AM on class day)</th>
                                <th>Assignments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(() => {
                                let reqCount = 1;
                                let optCount = 1;
                                return syllabusData.map((row, i) => {
                                    const reqStart = reqCount;
                                    const optStart = optCount;
                                    reqCount += (row.required ? row.required.length : 0);
                                    optCount += (row.optional ? row.optional.length : 0);
                                    return (
                                        <tr key={i} style={row.noClass ? { backgroundColor: 'var(--very-light-gray)' } : {}}>
                                            <td>{row.week}</td>
                                            <td>{row.date}</td>
                                            <td dangerouslySetInnerHTML={{ __html: row.topic }}></td>
                                            <td>
                                                {row.reading && <span dangerouslySetInnerHTML={{ __html: row.reading }}></span>}
                                                {this.renderReadings(row.required, row.optional, i, reqStart, optStart)}
                                            </td>
                                            <td dangerouslySetInnerHTML={{ __html: row.assignments }}></td>
                                        </tr>
                                    );
                                });
                            })()}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Syllabus;
