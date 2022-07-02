import React, {CSSProperties} from 'react';
import {
    Row,
    Button,
    Col,
    Container,
    Card,
    InputGroup,
    FormControl, ListGroup, ListGroupItem, Badge, Stack,
    // Form,
    // FormControl,
    // Button
} from "react-bootstrap"
import Attribute from "./Attribute";

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

function Skills(props: Props) {
    console.log(props)
    let bonus = calculateBonus(props.value)
    let skills = [1,2,3,4,5,6,7,8,9,0]
    return (
        <Card>
            <Container>
                <Row>
                    <Col>
                        <Stack gap={3}>
                            {skills.map((name) =>
                                <div className="border">
                                    <span>
                                        Slill {name}
                                    </span>

                                    <Badge className="float-right" bg="success">
                                        14
                                    </Badge>
                                </div>
                            )}
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={3}>
                            {skills.map((attrs) =>
                                <div className="bg-light border">First item</div>
                            )}
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={3}>
                            {skills.map((attrs) =>
                                <div className="bg-light border">First item</div>
                            )}
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default Skills;
