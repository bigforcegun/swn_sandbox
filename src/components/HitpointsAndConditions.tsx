import React from 'react';
import {Badge, Card, ListGroup, ListGroupItem,} from "react-bootstrap"
import {useRootData} from "../store/UseRootData";

interface Props {
    type: string;
    value: number;
}

function HitpointsAndConditions(props: Props) {

    const maxHP = useRootData(store => store.getHP);
    const currentHP = useRootData(store => store.player.health.current);
    return (
        <Card>
            <Card.Header as="h6" className="test-align-left">Hitpoints/Conditons
                <Badge bg="success" className="float-right">
                    {currentHP}/{maxHP}
                </Badge>
            </Card.Header>
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
