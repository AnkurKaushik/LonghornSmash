import React from 'react'
import tp1 from './assets/tp1.jpg'
import tp2 from './assets/tp2.jpg'
import tp3 from './assets/tp3.jpg'
import tp4 from './assets/tp4.jpg'
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { withTheme } from 'styled-components'
import josephstuder from './assets/officers/joseph.jpg'
import ankurkaushik from './assets/officers/ankur.jpg'
import avinash from './assets/officers/avinash.jpg'
import joji from './assets/officers/joji.jpg'
import alana from './assets/officers/alana.jpg'
import fawad from './assets/officers/fawad.jpg'





const hstyle = {
    textAlign: "center",
    fontFamily: "SmashUltimate",
    fontSize: "65px",
    color: 'white'
};

const hstyle2 = {
    textAlign: "center",
    fontSize: "65px",
    color: 'white'
};

const h2style = {
    textAlign: "center",
    fontFamily: "GothamBlackRegular",
    fontSize: "25px",
    marginTop: "20px",
    color: 'white'
};

const pstyle = {
    textAlign: "center",
    fontFamily: "GothamBlackRegular",
    fontSize: "25px",
    color: 'white'
};
const pstyle2 = {
    textAlign: "center",
    fontFamily: "GothamBlackRegular",
    fontSize: "25px",
    marginTop:"20px",
    color: 'white'
};

export const AboutUs = () => (
    <div style={{
        backgroundColor: '#000', width: '100%',
        height: '100%'}}>
        <h2 style={hstyle}>ABOUT US</h2>


        <p style={pstyle}>Longhorn Smash is an organization fostered by a unified passion for the Super Smash Bros series. Its members build friendship through playing video games together, organizing social events, and competing in weekly tournaments hosted by the organization’s administration team.</p> 


        <h2 style={hstyle2}>History</h2>
        <p style={pstyle}>
            Longhorn Smash began as a grassroots club among a small group of UT students who wanted people to play Smash with. Throughout the years, it has evolved into something bigger than its parts,
            growing in membership and activity. Our Discord server boasts a member count of ___. We host weekly tournaments that are open to all skill levels of players, encouraging UT students to get a taste
            of the competitive scene. We also host bigger monthly tournaments that attract Smash players from out of city, even drawing in some ranked players to face off against UT and its finest.
            Our Discord provides a way for our members to maintain communication and organize hangouts, both in and out of smash. Our members frequently host smashfests and training sessions, as well as 
            boba runs and carpools to Austin tournaments.
        </p>

        <h2 style={hstyle2}>Community</h2>
        <p style={pstyle}>
            This past school year, Longhorn Smash introduced guilds to our community. Our top 3 players each lead one guild, and these guilds are fighting to obtain the most through various means.
            However, the guild system is more than just friendly competition for our members; the guilds offer new members a way to make new friends in the community and feel welcome to the scene.
            Each guild hosts practice sessions and other hangouts ranging from just getting dinner to escape rooms to PCL study sessions. Our community has long been a place to form new friendships and maintain old ones,
            and guilds are simply an extension of that guiding principle for us. Our community joins together through smash, but blossoms into so much more thanks to the people in it.
        </p>

        <h2 style={hstyle2}>Competition</h2>
        <p style={pstyle}>
            Longhorn Smash became a branch of Longhorn Gaming this past school year, joining us with the other competitive collegiate esports teams on the UT campus. Our competitive scene
            has been our main focus from the start; our organization hosts frequent tournaments and practice sessions for both competitive and casual players. As for collegiate smash,
            Longhorn Smash competes in the Collegiate Starleague, sending our best players to compete in 5v5 crew battles against other colleges. All of the funding for travel and entry has
            been raised by the students themselves. UT has competed with the best of the best, tying for 1st with UTD (#1 nationally last season) in the South Regional qualifiers and making top 16 in the nation this past
            CSL season. We hope that with the added support of Longhorn Gaming our crew battle team will continue to grow and put UT in the national spotlight in the coming years.
        </p>


        <p style={pstyle}>The primary way our group communicates is through Discord; you can join below!</p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'24px'
        }}><td textAlign= 'center'> <a textAlign='center' href={"https://discord.gg/UrNNR92"}> Join our discord!</a> </td></div>

        

        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
        }}>
            <YouTube videoId={'WGsMY2Xzjow'}/>
            <YouTube videoId={'WC3WtXONu34'} />
            {/* <ReactPlayer height={.5*intViewportHeight} width={.7*intViewportWidth} url='https://youtu.be/WGsMY2Xzjow' History /> */}
        </div>  

        <p style={pstyle2}>Find us on <a textAlign='center' href={"https://utexas.campuslabs.com/engage/organization/cgc"}>HornsLink</a></p>




        <h2 style={h2style}> Meet our officers!</h2>

        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
        }}>


            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={ankurkaushik} />
            <Card.Body>
                <Card.Title>Ankur Kaushik</Card.Title>
                <Card.Text style={{color: 'black'}}>President</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={josephstuder} />
            <Card.Body>
                <Card.Title>Joseph Studer</Card.Title>
                <Card.Text style={{color: 'black'}}>Vice President</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={avinash} />
            <Card.Body>
                <Card.Title>Avinash Damania</Card.Title>
                <Card.Text style={{color: 'black'}}>just a dude</Card.Text>
            </Card.Body>
            </Card>



        </div>



        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
        }}>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={joji} />
            <Card.Body>
                <Card.Title>Joji Sherman</Card.Title>
                <Card.Text style={{color: 'black'}}>Vice President</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={fawad} />
            <Card.Body>
                <Card.Title>Fawad Haq</Card.Title>
                <Card.Text style={{color: 'black'}}>Treasurer</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={alana} />
            <Card.Body>
                <Card.Title>Alana Hernandez</Card.Title>
                <Card.Text style={{color: 'black'}}>Vice President</Card.Text>
            </Card.Body>
            </Card>

            




        </div>






    </div>
)