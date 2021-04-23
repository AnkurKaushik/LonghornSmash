import React from 'react'
import tp1 from '../assets/tp1.jpg'
import tp2 from '../assets/tp2.jpg'
import tp3 from '../assets/tp3.jpg'
import tp4 from '../assets/tp4.jpg'
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { withTheme } from 'styled-components'
import josephstuder from '../assets/officers/joseph.jpg'
import ankurkaushik from '../assets/officers/ankur.jpg'
import avinash from '../assets/officers/avinash.jpg'
import joji from '../assets/officers/joji.jpg'
import alana from '../assets/officers/alana.jpg'
import fawad from '../assets/officers/fawad.jpg'
import Officer from '../components/Officer'
import BottomTriangle from '../components/BottomTriangle'
import '../css/Officers.css'

let placeholder = "Hi guys. Epic fortnite chungus 420 blaze it then glaze it krispy kreme faciliodge. Shhheeesshh??? Shhhessshh!!!"

export const Officers = () => (
    <div>
        <div class="background-color">
            <Container>
                <Row>
                    <Col>
                        <h1 class="officers-title">Longhorn Smash <span class="quirky-orange">Officers</span></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p class="officers-subheading">About The Officers<span class="quirky-orange">.</span></p>
                        <p class="description">The officers help manage the tournaments, distribute tournament winnings, and maintain the discord. We work very hard. Espically me. The guy who made this website. Yup. Ignore the fact that I basically went afk for the last two meetings! Hype in my hype.</p>
                        <br></br><br></br>
                        
                    </Col>
                </Row>
            </Container>
        </div>
        <div id="secondOfficersSection">
            <BottomTriangle></BottomTriangle>
            <Container>
                <Row><p class="officers-subheading">Meet our officers<span class="quirky-orange">!</span></p></Row>
                <Row>
                    <Officer name="Avinash Damania" src={avinash} role="Administrator" desc={placeholder}></Officer>
                    <Officer name="Avinash Damania" src={avinash} role="Administrator" desc={placeholder}></Officer>
                    <Officer name="Avinash Damania" src={avinash} role="Administrator" desc={placeholder}></Officer>
                    <Officer name="Avinash Damania" src={avinash} role="Administrator" desc={placeholder}></Officer>
                    <Officer name="Avinash Damania" src={avinash} role="Administrator" desc={placeholder}></Officer>
                    <Officer name="Avinash Damania" src={avinash} role="Administrator" desc={placeholder}></Officer>
                </Row>
            </Container>
        </div>
    </div>
    // <div style={{
    //     backgroundColor: '#000', width: '100%',
    //     height: '100%'}}>


    //     <h2 style={h2style}> Meet our officers!</h2>
    //     <p style={description}>The officers help manage the tournaments, distribute tournament winnings, and maintain the discord.</p>

    //     <div style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: '10px'
    //     }}>


    //         <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
    //         <Card.Img variant="top" src={ankurkaushik} />
    //         <Card.Body>
    //             <Card.Title style={{fontSize: "2vw"}}>Ankur Kaushik</Card.Title>
    //             <Card.Text style={{color: 'black', fontSize: "2vw"}}>President</Card.Text>
    //         </Card.Body>
    //         </Card>

    //         <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
    //         <Card.Img variant="top" src={josephstuder} />
    //         <Card.Body>
    //             <Card.Title style={{fontSize: "2vw"}}>Joseph Studer</Card.Title>
    //             <Card.Text style={{color: 'black', fontSize: "2vw"}}>Vice President</Card.Text>
    //         </Card.Body>
    //         </Card>

    //         <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
    //         <Card.Img variant="top" src={avinash} />
    //         <Card.Body>
    //             <Card.Title style={{fontSize: "2vw"}}>Avinash Damania</Card.Title>
    //             <Card.Text style={{color: 'black', fontSize: "2vw"}}>just a dude</Card.Text>
    //         </Card.Body>
    //         </Card>



    //     </div>



    //     <div style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: '10px'
    //     }}>

    //         <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
    //         <Card.Img variant="top" src={joji} />
    //         <Card.Body>
    //             <Card.Title style={{fontSize: "2vw"}}>Joji Sherman</Card.Title>
    //             <Card.Text style={{color: 'black', fontSize: "2vw"}}>Vice President</Card.Text>
    //         </Card.Body>
    //         </Card>

    //         <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
    //         <Card.Img variant="top" src={fawad} />
    //         <Card.Body>
    //             <Card.Title style={{fontSize: "2vw"}}>Fawad Haq</Card.Title>
    //             <Card.Text style={{color: 'black', fontSize: "2vw"}}>Treasurer</Card.Text>
    //         </Card.Body>
    //         </Card>

    //         <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
    //         <Card.Img variant="top" src={alana} />
    //         <Card.Body>
    //             <Card.Title style={{fontSize: "2vw"}}>Alana Hernandez</Card.Title>
    //             <Card.Text style={{color: 'black', fontSize: "2vw"}}>Vice President</Card.Text>
    //         </Card.Body>
    //         </Card>
    //     </div>
    // </div>
)