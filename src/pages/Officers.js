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

let officers_description = "Longhorn Smash is managed by a group of administrators that help run tournaments, manage the discord, keep the guilds going, and create and sell club merchandise such as T-shirts and pins. We strive to create a friendly and welcoming environment for new members as well as fostering a competitive scene in Super Smash Bros. among UT students."
let placeholder = "Hi guys. Epic fortnite chungus 420 blaze it then glaze it krispy kreme faciliodge. Shhheeesshh??? Shhhessshh!!!"
let president = "Spooncats is currently our president. He oversees all LS activities and plans and organizes the different tournaments we run. He also creates sometimes creates graphics for the various tournaments that we have."
let webmaster = "Ryan Menghani AKA Peels is currently the webmaster for LS. He maintains the website and other techincal aspects of the club as they come up. He mains Wolf and thinks Terry and PacMan are the dumbest characters in the game."
let secretary = "Hi, the secretary description should go here. It's really cool and all, but I'm really not good with words. Especially concering the different club positions. Please help me."
let vice_president = "Hi, the vice-president description should go here. It's really cool and all, but I'm really not good with words. Especially concering the different club positions. Please help me.s"
let graphics = "Hi, the graphics-design description should go here. It's really cool and all, but I'm really not good with words. Especially concering the different club positions. Please help me."
let administrator = "Hi, the administrator description should go here. It's really cool and all, but I'm really not good with words. Especially concering the different club positions. Please help me."

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
                        <p class="description">{officers_description}</p>
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
                    <Officer name="Alana Hernandez" src={alana} role="President" desc={president}></Officer>
                    <Officer name="Ankur Kaushik" src={ankurkaushik} role="President" desc={administrator}></Officer>
                    <Officer name="Joji joji joji sherman" src={joji} role="Webmaster/Admin" desc={webmaster}></Officer>
                    <Officer name="Fawad Haq" src={fawad} role="Administrator" desc={administrator}></Officer>
                    <Officer name="Joseph Studer" src={josephstuder} role="Vice President" desc={vice_president}></Officer>
                    <Officer name="Avinash Damania" src={avinash} role="Administrator" desc={administrator}></Officer>
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