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

interface Props {
    type: string;
    value: number;
}

function bonusPrefix(bunus: number) {
    if (bunus > 0) {
        return "+"
    } else {
        return ""
    }
}

function calculateBonus(attribute: number) {
    if (attribute < 3) {
        return -2
    } else if (attribute < 7) {
        return -1
    } else if (attribute < 13) {
        return -0
    } else if (attribute < 17) {
        return 1
    } else {
        return 2
    }

}

function Saves(props: Props) {
    console.log(props)
    let bonus = calculateBonus(props.value)
    return (
        <Card>
            <Card.Header as="h6" className="test-align-left">
                Saves
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            Physical
                            <br/>
                            <Badge pill bg="success">
                                14
                            </Badge>
                        </Col>
                        <Col>Evasion
                            <br/>
                            <Badge pill bg="success">
                                15
                            </Badge>
                        </Col>
                        <Col>Mental
                            <br/>
                            <Badge pill bg="success">
                                14
                            </Badge>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Saves;
