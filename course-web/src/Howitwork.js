import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import { assignments, howitworks } from './config.js'
import { Container, Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import { FiChevronDown, FiChevronRight, FiExternalLink } from "react-icons/fi";


class Howitworks extends Component {

    state = {

    }

    componentDidMount() {
        let number = 0

        assignments.map(a => {
            a.divs.map(c => {

                if (c.long_requirement)
                    this.setState({ ['hw-' + c.id]: 'none' })
            })
        })

    }

    componentDidUpdate() {
        Array.from(document.links)
            .filter(link => link.hostname != window.location.hostname)
            .forEach(link => link.target = '_blank');
    }


    format(dec) {

        return (Math.round(dec * 100) + '%')

    }

    render() {
        return (
            <>

<h2 id='howitworks'>How things work</h2>


                <p dangerouslySetInnerHTML={{ __html: howitworks }}></p>
               Useful links: <a href='https://umd.instructure.com/courses/1408687' className='chip-link'>Canvas <FiExternalLink style={{verticalAlign: '-2px'}} /></a> 
               <a href="https://docs.google.com/document/d/1m0SZIHOWsUHZ7jbo__P2NtWBwl5ZzTrbzY3WTfiWg6A/edit?usp=sharing" className='chip-link'>Presentation guide <FiExternalLink style={{verticalAlign: '-2px'}} /></a> — find the presentation signup and Slack invite on Canvas.
                {/* <span href='https://umd.instructure.com/courses/1375246' className='button-detail' >Pres. signup </span>  */}
                {assignments.map(a => {
                    return (<div className='div-howitworks'>
                        <h6>{a.name}    <span dangerouslySetInnerHTML={{ __html: a.summary }}></span></h6>

      
                        {a.divs.map(c => {
                            return (
                                <Container>
                                    <Row>
                                    <div className='col-auto' style={{minWidth: '58px', paddingRight: '10px'}}><span className='perc'>{this.format(c.perc)}</span></div>
                                    <div className='col' >
                                    <span dangerouslySetInnerHTML={{ __html: c.requirement }}></span>
                                    {c.long_requirement && <span className='htw-toggle' onClick={() => {
                                        let display = document.getElementById('hw-' + c.id).style.display

                                        if (display === 'none') this.setState({ ['hw-' + c.id]: 'block' })
                                        else this.setState({ ['hw-' + c.id]: 'none' })

                                    }}>
                                        {document.getElementById('hw-' + c.id) && this.state['hw-' + c.id] === 'none' && <span><FiChevronRight style={{verticalAlign: '-2px'}} /></span>}
                                        {document.getElementById('hw-' + c.id) && this.state['hw-' + c.id] != 'none' && <span><FiChevronDown style={{verticalAlign: '-2px'}} /></span>}
                                    </span>}
                                    {c.long_requirement && <span className='details' style={{ 'display': this.state['hw-' + c.id] }} id={'hw-' + c.id}
                                    
                                    dangerouslySetInnerHTML={{__html: c.long_requirement}}>
                                     
                                    </span>}</div>

                                    </Row>
                                   
                                </Container>
                            )
                        })}

                    </div>)
                })}

            </>
        )
    }
}



export default Howitworks;