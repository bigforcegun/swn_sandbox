import React from 'react';
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

function Attribute(props: Props) {
    console.log(props)
    let bonus = calculateBonus(props.value)
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text>{props.type}</InputGroup.Text>
                <FormControl aria-label="kek" value={props.value} />
                <InputGroup.Text>{bonusPrefix(bonus)}{bonus}</InputGroup.Text>
            </InputGroup>
        </>
        );
}

export default Attribute;
