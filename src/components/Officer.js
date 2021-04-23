import React from 'react'
import '../css/Officer.css'
import {Col,Card, Image} from 'react-bootstrap'


export default class ResponsivePlayer extends React.Component {


    render() {
        return (
        <Card style={{width: "300px", margin: "1.5vw"}}>
            <Card.Body>
                <Col>
                    <div style={{height: "240px", width: "240px", overflow: "hidden", borderRadius: "120px", display: "flex", alignItems: "center", justifyContent: "middle", margin: "auto"}}>
                        <Image src={this.props.src} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                    </div>
                    <br/>
                    <div>
                    <h2>{this.props.name}</h2>
                    <p class="role"><b><span class="quirky-orange">Role: </span></b>{this.props.role} </p>
                    <p class="text"><b><span class="quirky-orange">Description: </span></b> {this.props.desc} </p>
                    </div>
                </Col>
            </Card.Body>
        </Card>
        )
    }
}