import React, { Component } from 'react';
import { Navbar, Nav, Container, Jumbotron, Row, Col, Button } from 'react-bootstrap';

import { withRouter } from './withRouter.js';
import Syllabus from './Syllabus.js';
import People from './People.js';
import Policies from './Policies.js';
import { acknowledgement, course_full_name, course_location, course_number, course_objective, course_objective_long, course_short_name, course_sub_name, course_time } from './config.js';
import Howitworks from './Howitwork.js';
import TeaserGallery from './TeaserGallery.js';

import { format } from 'date-fns';
class Home extends Component {

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg" sticky="top" className="navbar-sticky">
                    <Container className="mt-1">
                        <Navbar.Brand href="#">{course_number}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#howitworks">HTW</Nav.Link>
                                <Nav.Link href="#syllabus">Syllabus</Nav.Link>
                                <Nav.Link href="#crew">Crew</Nav.Link>
                                <Nav.Link href="#policies">Policies</Nav.Link>
                                <Nav.Link href="#history">Before</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="mt-5">
                    <div className="text-left">
                        <h1 className="lead">{course_full_name}</h1>
                        <p className="display-4">{course_sub_name}</p>

                        <TeaserGallery />

                        <p>
                            <b>Time</b>: {course_time} &middot; <b>Location</b>: {course_location} &middot; <b>Updated</b>: {format(new Date(document.lastModified), 'MM/dd/yyyy')}
                        </p>
                
             
                        <p dangerouslySetInnerHTML={{ __html: course_objective_long }}></p>
                        {/* <p dangerouslySetInnerHTML={{__html:course_objective}}></p> */}
                        
                        <Howitworks />

                        <Syllabus /> 

                        <People />

                        <Policies />


                        <>
                            <h2 id='history'>Previous years</h2>
                           <a target='_blank' href='https://fumeng-yang.github.io/CMSC839E-2024/'>2024</a> | <a target='_blank' href='https://fumeng-yang.github.io/CMSC839E-2025/'>2025</a>
</>

                        <>
                            <h2 id='policies'>Acknowledgements</h2>
                            <p dangerouslySetInnerHTML={{ __html: acknowledgement }}></p>
                        </>

                    </div>


                </Container>

                <footer className="footer py-3 bg-light" style={{marginTop: '4rem', borderTop: '1px solid var(--very-light-gray)'}}>
                    <Container className="text-center">
                        <span className="text-muted">© 2026 University of Maryland, College Park.</span>
                    </Container>
                </footer>
            </>
        )
    }
}



export default withRouter(Home);