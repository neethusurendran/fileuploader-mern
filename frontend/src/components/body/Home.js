import React from 'react'
import { Row,Container,Button } from 'react-bootstrap';
import "./Home.css";

function Home() {
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">welcome to file downloader</h1>
                            <p className="subtitle"> easiest place for download files</p>
                            </div>
                            <div className="buttonContainer">
                                <a href="/login">
                                    <Button size='lg' className='signupbutton' variant="outline-primary">Login</Button>
                                    </a>
                                    <a href="/register">
                                    <Button size='lg' className='signupbutton' variant="outline-primary">Register</Button>
                                    </a>

                                </div>
                    </div>
                </Row>
            </Container>
            
        </div>
    )
}

export default Home
