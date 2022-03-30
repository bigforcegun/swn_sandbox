import React, {CSSProperties} from 'react';
import {
    Row,
    Button,
    Col,
    Container,
    Card,
    InputGroup,
    FormControl, ListGroup, ListGroupItem, Badge,
    // Form,
    // FormControl,
    // Button
} from "react-bootstrap"

interface Props{
    type: string;
    value: number;
}

function bonusPrefix(bunus : number) {
    if (bunus > 0) {return "+"} else {return ""}
}
function calculateBonus(attribute : number) {
    if (attribute < 3) { return -2 } else
    if (attribute < 7) { return -1 } else
    if (attribute < 13) { return -0 } else
    if (attribute < 17) { return 1 } else
    { return 2 }

}

function HitpointsAndConditions(props: Props) {
    console.log(props)
    let bonus = calculateBonus(props.value)
    return (
        <Card>
            <Card.Header as="h6" className="test-align-left">Hitpoints/Conditons <Badge bg="success" className="float-right">10/13</Badge></Card.Header>
            <ListGroup className="list-group-flush" style={{textAlign: 'left'}}>
                <ListGroupItem>
                    bad damage
                    <Badge bg="danger" className="float-right">-1</Badge>
                </ListGroupItem>
                <ListGroupItem>
                    bad damage
                    <Badge bg="danger" className="float-right">-1</Badge>
                </ListGroupItem>
                <ListGroupItem>
                    bad damage
                    <Badge bg="danger" className="float-right">-1</Badge>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>

            </Card.Body>
        </Card>
        );
}

export default HitpointsAndConditions;
