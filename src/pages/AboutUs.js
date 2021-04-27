import React from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap';
import YouTube from 'react-youtube';
import ImageGallery from 'react-image-gallery';
import discord from '../assets/DiscordLogo.png'
import minus from '../assets/community/img1.jpg'
import favorit from '../assets/community/img2.jpg'
import waltz from '../assets/community/img3.jpg'
import studz from '../assets/community/img4.jpg'
import kaiser from '../assets/community/img5.jpg'
import BottomTriangle from '../components/BottomTriangle';

import '../css/AboutUs.css'
import '../css/App.css'

const pr_images = [
    {original: waltz},
    {original: favorit},
    {original: minus},
    {original: studz},
    {original: kaiser}
];

export const AboutUs = () => (
    <div>
        <div class= "background-section-1">
            <Container>
                <Row>
                    <Col>
                        <h2 class="ls-title">About <span class="quirky-orange">Us</span></h2>
                        <p class="ls-text text-center">Longhorn Smash is an organization fostered by a unified passion for the Super Smash Bros series. Its members build friendship through playing video games together, organizing social events, and competing in weekly tournaments hosted by the organization’s administration team.</p> 
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h2 class="ls-subheading text-center">History<span class="quirky-orange">.</span></h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <YouTube videoId={'WGsMY2Xzjow'}/>
                    </Col>
                    <Col>
                        <p class="ls-text">
                            Longhorn Smash began as a grassroots club among a small group of UT students who wanted people to play Smash with. Throughout the years, it has evolved into something bigger than its parts,
                            growing in membership and activity. Our Discord server has over 500 members and alumni. We host weekly tournaments that are open to all skill levels of players, encouraging UT students to get a taste
                            of the competitive scene. 
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h2 class="ls-subheading text-center">Community<span class="quirky-orange">.</span></h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p class="ls-text">
                        Starting in 2020, Longhorn Smash introduced guilds to the community. Top players in the group led each guild, and each guild competed to earn points in the Discord.
                        While the guild system is constantly evolving, one thing has stayed true: the guild system encourages friendly competition and banter among our memebers. It offers new members a way to make friends in the communituy and welcome to the scene.
                        From practice sessions to hangouts ranging from Boba meetups to escape rooms to PCL study sessions, our community joins members together through smash and fun.
                        </p>
                        
                    </Col>
                    <Col>
                        <ImageGallery items={pr_images} autoPlay="true"/>
                    </Col>
                </Row>
            </Container>

            <div id="secondAboutUs">
                <BottomTriangle></BottomTriangle>
                <Container>
                    <Row>
                        <Col>
                            <h2 class="ls-subheading text-center">Competition<span class="quirky-orange">.</span></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{alignSelf: "center"}}>
                            <YouTube videoId={'R930gktTpcM'} />
                        </Col>
                        <Col>
                            <p class="ls-text">
                                Longhorn Smash became a branch of Longhorn Gaming this past school year, joining us with the other competitive collegiate esports teams on the UT campus. Our competitive scene
                                has been our main focus from the start; our organization hosts frequent tournaments and practice sessions for both competitive and casual players. As for collegiate smash,
                                Longhorn Smash competes in the Collegiate Starleague, sending our best players to compete in 5v5 crew battles against other colleges. We are currently ranked 4th in the nation among all smash teams!
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h2 class="ls-subheading text-center">Get Involved<span class="quirky-orange">!</span></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            
                            <p class="ls-text text-center">
                                The best way to join our community is to introduce yourself over on Discord. 
                                Click the icon on the right to join. We keep our discord updated with all of our important information, 
                                and it's our memebers regularly talk amongst themselves there as well.
                            </p>
                        </Col>
                        <Col>
                            <a href="https://discord.gg/Ms6XvTga">
                                <Image src={discord} fluid/>
                            </a>
                        </Col>
                    </Row>
                    <Row></Row>
                </Container>
                <br></br><br></br><br></br>
            </div>
        </div>
    </div>
)