import React from 'react'
import logo from '../assets/LS_Logo.png'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Home.css';
import TournamentInfo from '../components/TournamentInfo'
import ResponsivePlayer from '../components/ResponsivePlayer'
import BottomTriangle from '../components/BottomTriangle'

export default class Home extends React.Component {
  render() {
    return (

      <div>
        <div class="Home">
          {/* <Container> */}
            {/* <Row className="pt-5"> */}
              {/* <Col> */}
                {/* <Button size="lg" style={{backgroundColor: "#010", border: "none"}} href="#second">See Upcoming Tournaments!</Button> */}
              {/* </Col> */}
              {/* <Col>
                <div className="text-center">
                  <img className='img-fluid' src={logo} alt={'logo'} style={{width: '60%'}}/>
                </div>
              </Col> */}
            {/* </Row> */}
          {/* </Container> */}
          <a href="#second">
            <div class="arrow bounce arrow-bottom">
            </div>
          </a>
        </div>
        <div id="second">
            <Container style= {{marginBottom: "1em"}}>
              <Row>
                <Col>
                  {/* add logo later to the left of the longhorn smash title*/}
                  <h1 class="title text-center">Longhorn <span class="quirky-orange">Smash</span></h1>
                  <h2 class="subheading text-left">What is Longhorn Smash<span class="quirky-orange">?</span></h2>
                  <p class="home-text text-left">Longhorn Smash is a student-run club at UT Austin that focuses on playing competitve Smash Ultimate. As a club, we organize tournaments where
                    UT students can compete with their peers in a fun and relaxed environment. Besides tournaments, we hold impromptu smashfests on campus where
                    players can get together and play. At the end of the semester, we send some of our best players to compete on a national level against some of best colleges
                    in the nation!
                  </p>
                  <h2 class="subheading text-left">How can I sign up<span class="quirky-orange">?</span></h2>
                  <p class="home-text text-left">There's no "sign-up" form or application you need to submit! You can simply introduce yourself <a href="https://discord.gg/Ms6XvTga">in our discord</a> and start talking to other students there!
                    We promise we won't bite :-).
                  </p>
                  <h2 class="subheading text-left">Some more important information<span class="quirky-orange">.</span></h2>
                  <p class="home-text text-left">
                    We hold tournaments every week (online during COVID). You can find out more information about that <a href="/tournaments">here</a>. We keep a list of our top ranked players from our previous semesters. You can find that <a href="/pr">here</a>.
                  </p>
                  {/* <div id="videoplayer">
                    <ResponsivePlayer url={'https://www.youtube.com/watch?v=WC3WtXONu34'}/>
                  </div> */}
                </Col>
              </Row>
            </Container>
        </div>
        <div id="third">
          <BottomTriangle></BottomTriangle>
          <Container>
            <Row>
              <Col>
                <h3 class="title text-center">Check out some <span class="quirky-orange">highlights!</span></h3>
                <div id="videoplayer">
                  <ResponsivePlayer url={'https://www.youtube.com/watch?v=WC3WtXONu34'}/>
                </div>
              </Col>
            </Row>
                
          </Container>
        </div>

            {/* <Container fluid style={{backgroundColor: "gainsboro"}}>
              <Row>
                <Col>
                  <h2 class="tournament-headings text-center">Next Tournament</h2>
                  <TournamentInfo/>
                </Col>
                <Col>
                <div id="second">
                  <h2 class="video-heading text-center">See our highlights!</h2>
                  <h2 class="a-team-heading text-center">CSL A Team!</h2>
                <ResponsivePlayer url={"https://www.youtube.com/watch?v=R930gktTpcM"} />
                </div>
                </Col>
              </Row>
      
     
              
            </Container> */}
      </div>
    );
  }
}