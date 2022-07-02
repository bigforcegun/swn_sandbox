import React from 'react';
import {Col, Row,} from "react-bootstrap"
import PlayerMainInfo from "./PlayerMainInfo";
import Skills from "./Skills";
import HitpointsAndConditions from "./HitpointsAndConditions";
import SystemStrain from "./SystemStrain";
import PlayerAttributes from "./PlayerAttributes";
import Saves from "./Saves";

interface Props {
    character: string;
}


function CharacterSheet(props: Props) {
    return (

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
                <Saves/>
            </Col>
            <Col xs={2}>
                <PlayerAttributes/>
            </Col>
        </Row>

    );
}

export default CharacterSheet;
