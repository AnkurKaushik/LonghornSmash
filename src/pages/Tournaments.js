import React from 'react'
import { Col, Row, Container, Image} from 'react-bootstrap';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import discord from '../assets/DiscordLogo.png'
import BottomTriangle from '../components/BottomTriangle';
import '../css/Tournaments.css'
import '../css/App.css'


const ourTournaments = "One of Longhorn Smash's most important activities are our weekly tournaments (aptly called 'weeklies'). These weeklies are low-stress tournaments where primarily UT students come together to socialize and compete in Smash. If you're looking to get involved in the community, attending our weeklies is the easiest and most effective way to meet other students in Longhorn Smash. Occasionally, we hold larger tournaments that have larger prize pools and tend to attract talent from all over the Austin area and even other regions of Texas."
const information = "By far the easiest way to learn about our tournaments is to join our Discord and ask! You can join our discord by clicking the discord icon to the right. We have also included a Google Calendar that may (or may not) be up to date with our tournaments."
export default class Tournaments extends React.Component {
    render() {
        return (
            <div class="background-section-1">
                <div class="tournament-info">
                    <Container>
                        <Row>
                            <Col>
                                <h1 class="ls-title"><span class="quirky-orange">Tournament</span> Info</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p class="ls-subheading">Our tournaments<span class="quirky-orange">.</span></p>
                                <p class="ls-text">{ourTournaments}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p class="ls-subheading">Information about our tournaments<span class="quirky-orange">.</span></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p class="ls-text">{information}</p>
                            </Col>
                            <Col>
                                <a href="https://discord.gg/Ms6XvTga">
                                    <Image src={discord} fluid/>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="background-section-2 calendar">
                    <BottomTriangle></BottomTriangle>
                    <Container style={{height: "100%"}}>
                        <Row style={{height: "100%"}}>
                            <Col>
                                <p class="ls-subheading">Google Calander<span class="quirky-orange">:</span></p>
                                <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?src=ht3jlfaac5lfd6263ulfh4tql8%40group.calendar.google.com&ctz=Europe%2FRome"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}