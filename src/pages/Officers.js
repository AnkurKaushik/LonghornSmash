import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import josephstuder from '../assets/officers/joseph.jpg'
import ankurkaushik from '../assets/officers/ankur.jpg'
import avinash from '../assets/officers/avinash.jpg'
import joji from '../assets/officers/joji.jpg'
import alana from '../assets/officers/alana.jpg'
import fawad from '../assets/officers/fawad.jpg'
import Officer from '../components/Officer'
import BottomTriangle from '../components/BottomTriangle'
import '../css/App.css'

let officers_description = "Longhorn Smash is managed by a group of administrators that help run tournaments, manage the discord, keep the guilds going, and create and sell club merchandise such as T-shirts and pins. We strive to create a friendly and welcoming environment for new members as well as fostering a competitive scene in Super Smash Bros. among UT students."
let president = "Spooncats is currently our president. He oversees all LS activities and plans and organizes the different tournaments we run. He also creates sometimes creates graphics for the various tournaments that we have."
let webmaster = "Ryan Menghani AKA Peels is currently the webmaster for LS. He maintains the website and other techincal aspects of the club as they come up. He mains Wolf and thinks Terry and PacMan are the dumbest characters in the game."
let secretary = "Hi, the secretary description should go here. It's really cool and all, but I'm really not good with words. Especially concering the different club positions. Please help me."
let vice_president = "Hi, the vice-president description should go here. It's really cool and all, but I'm really not good with words. Especially concering the different club positions. Please help me.s"
let graphics = "Hi, the graphics-design description should go here. It's really cool and all, but I'm really not good with words. Especially concering the different club positions. Please help me."
let administrator = "Hi, the administrator description should go here. It's really cool and all, but I'm really not good with words. Especially concering the different club positions. Please help me."

export const Officers = () => (
    <div>
        <div class="background-section-1">
            <Container>
                <Row>
                    <Col>
                        <h1 class="ls-title">Longhorn Smash <span class="quirky-orange">Officers</span></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p class="ls-subheading">About The Officers<span class="quirky-orange">.</span></p>
                        <p class="ls-text">{officers_description}</p>
                        <br></br><br></br>
                        
                    </Col>
                </Row>
            </Container>
        </div>
        <div class="background-section-2">
            <BottomTriangle></BottomTriangle>
            <Container>
                <Row><p class="ls-subheading">Meet our officers<span class="quirky-orange">!</span></p></Row>
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
)