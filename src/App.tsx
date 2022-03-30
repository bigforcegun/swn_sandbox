import React from 'react';
import logo from './logo.svg';
import './App.css';
import './antd.less';
import 'antd/dist/antd.css';
import {
    Row,
    Button,
    Col,
    Container,
    Card,
    InputGroup,
    FormControl,
    // Form,
    // FormControl,
    // Button
} from "react-bootstrap"
import Attribute from "./Attribute";
import HitpointsAndConditions from "./components/HitpointsAndConditions";
import SystemStrain from "./components/SystemStrain";
import Saves from "./components/Saves";
import Skills from "./components/Skills";


function attrsList(attrs: {}){

    // let attributes: { type: number, value: string }[]
    let attributes = []
    for (let type in attrs) {
        // @ts-ignore
        let value = attrs[type]
        attributes.push(
            {
                type: type,
                value: value
            }
        )
    }
    return attributes
}

function App() {

    let game = {
        players: [
            {
                name: "",

            }
        ],
        system: [],
        company: []
    }

    let attributes = {
        str:14,
        dex:14,
        con:10,
        int:14,
        wis:14,
        cha:14,
    }

    let attributes_flat = attrsList(attributes)

    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col xs={4}>

                        <Card>
                            <Card.Header as="h5">
                                Profile
                            </Card.Header>
                        </Card>

                    </Col>
                    <Col xs={4}>
                        <Skills type={"kek"} value={1}/>

                    </Col>
                    <Col xs={2}>
                        <HitpointsAndConditions type={"kek"} value={1}/>
                        <SystemStrain type={"kek"} value={1}/>
                        <Saves type={"kek"} value={1}/>


                    </Col>
                    <Col xs={2}>
                        <Card>
                            <Card.Header as="h5">Attributes</Card.Header>
                            <Card.Body>
                                {attributes_flat.map((attrs) =>
                                    <Attribute type={attrs.type} value={attrs.value}/>
                                )}
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
