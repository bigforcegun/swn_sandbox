import React from 'react';
import {Badge, Card, Col, Container, Row,} from "react-bootstrap"

function Saves() {
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
