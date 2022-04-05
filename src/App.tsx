import React from 'react';
import './App.css';
import './antd.less';
import 'antd/dist/antd.css';
import {Col, Container, Row,} from "react-bootstrap"
import HitpointsAndConditions from "./components/HitpointsAndConditions";
import SystemStrain from "./components/SystemStrain";
import Saves from "./components/Saves";
import Skills from "./components/Skills";
import StoreProvider from "./store/context";
import PlayerMainInfo from "./components/PlayerMainInfo";

import PlayerAttributes from "./components/PlayerAttributes";


function App() {


    return (
        <StoreProvider>
            <div className="App">
                <Container fluid>
                    <Row>
                        <Col xs={4}>

                            <PlayerMainInfo type={"kek"} value={1}/>
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
                            <PlayerAttributes/>
                        </Col>

                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </div>
        </StoreProvider>
    );
}

export default App;
