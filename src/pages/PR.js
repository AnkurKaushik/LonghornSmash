import React from 'react'
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import prbanner from '../assets/pr/prbanner.jpg';
import minus from '../assets/pr/1_Minus.png'
import favorit from '../assets/pr/2_favorit.png'
import waltz from '../assets/pr/3_Waltz.png'
import studz from '../assets/pr/4_StudZ.png'
import kaiser from '../assets/pr/5_Kaiser.png'
import junk from '../assets/pr/6_Junk.png'
import lasagna from '../assets/pr/7_lasagna.png'
import lsoe from '../assets/pr/8_LSOE.png'
import r from '../assets/pr/9_R.png'
import ruski from '../assets/pr/10_RuskiNurd.png'
import ImageGallery from 'react-image-gallery';
import BottomTriangle from '../components/BottomTriangle'
import '../css/PR.css';

const pr_images = [
    {original: minus},
    {original: favorit},
    {original: waltz},
    {original: studz},
    {original: kaiser},
    {original: junk},
    {original: lasagna},
    {original: lsoe},
    {original: r},
    {original: ruski},
];

export default class PR extends React.Component {
    render() {
        return (
            <div class="background-color">
                <Container>
                    <Row>
                        <Col>
                            <h2 className='pr-title'>UT <span class="quirky-orange">Power Rankings</span> Fall 2019</h2>
                            <Image src={prbanner} fluid></Image>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <h3 class="pr-subheading">What are the UT Power Rankings<span className="quirky-orange">?</span></h3>

                            <p class="pr-text">Every semester we rank the pr and it's fine and dandy and we should give a description here so that we can explain what it is.</p>

                            <h3 class="pr-subheading">Who are these players<span className="quirky-orange">?</span></h3>

                            <a class="pr-text" href="#secondPRSection">Get to know the players we've put on our PR!</a>
                            <p></p>

                            <h3 class="pr-subheading">How are people determined to be on the UT PR<span className="quirky-orange">?</span></h3>

                            <p class="pr-text">Attendance to tournaments, good results, and a panel system</p>

                            <h3 class="pr-subheading">How do I get good enough to be on the PR<span className="quirky-orange">?</span></h3>

                            <p class="pr-text">By attending tournaments, both here at UT and around Austin, and by practicing! Luckily, there are frequent meetups created to play other club members, which you can find out about through our **discord**</p>
                        </Col>
                    </Row>
                </Container>
                <div id="secondPRSection">
                    <BottomTriangle></BottomTriangle>
                    <Container>
                        <h2 className='pr-title mt-lg-5'>The <span class="quirky-orange">Players</span></h2>
                        <ImageGallery items={pr_images} style={{width: "81%"}}/>
                    </Container>
                </div>
            </div>
        );
    }
}