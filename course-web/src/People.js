import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import {Container, Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';
import { FiExternalLink } from "react-icons/fi";
import fumengh from './img/fumeng-1.png'
import turtle from './img/turtle.png'

class People extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            fumengHovered: false,
            huyHovered: false
        };
    }

    render(){
        return(
            <>
            <h2 id='crew'> Teaching crew</h2>
            <Row>
                <Card className='people-card'>
                   <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/fumeng-1.png'} />
                   <Card.Body>
                     <Card.Title><a href="https://www.fmyang.com" target='_blank' className='normal-a'>Fumeng Yang <FiExternalLink /></a></Card.Title>
                     <Card.Text>
                     Instructor<br/>
                     Pronouns: she/her <br/>
                     Hours: Tu 2:30-3:30p <br/>
                     Office: IRB 5138
                     </Card.Text>
                   </Card.Body>
                </Card>

                <Card className='people-card'>
                   <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/YuyangWang-2026.png'} />
                   <Card.Body>
                     <Card.Title><a href="https://ydotwang.github.io/" target='_blank' className='normal-a'>Yuyang Wang <FiExternalLink /></a></Card.Title>
                     <Card.Text>
                     Teaching Assistant<br/>
                     Pronouns: he/him <br/>
                     Hours: TBD <br/>
                     See Canvas for Zoom link
                     </Card.Text>
                   </Card.Body>
                </Card>
             </Row>
             </>
        )
    }
}

export default People;