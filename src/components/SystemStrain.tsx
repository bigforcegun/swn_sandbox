import React, {FC} from 'react';
import {Badge, Card as BootstrapCard, ListGroup, ListGroupItem,} from "react-bootstrap"
import {Card, List, Tag} from "antd";

import {CheckCircleOutlined,} from '@ant-design/icons';
import {useRootData} from "../store/UseRootData";


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

const SystemStrain: FC<Props> = ({type = ""}) => {

    const cities = useRootData(store => store.filteredCities);
    const updateAttribute = useRootData(store => store.updateAttribute);
    let count = 1

    let data = ["1", 2, 3]
    return (
        <Card size="small"
              title="System Strain"
              extra={<Tag icon={<CheckCircleOutlined/>} color="success">
                  {count}/13
              </Tag>}
        >

            <Card.Grid hoverable={false} style={{width: "100%", padding: "0"}}>
                <button onClick={() => updateAttribute("str")}>
                    Click me
                </button>
                <List
                    size="small"
                    dataSource={cities}
                    renderItem={item => <List.Item key={item}>{item}</List.Item>}
                />
            </Card.Grid>

        </Card>
    );
}

function SystemStrain2(props: Props) {
    console.log(props)
    let bonus = calculateBonus(props.value)
    return (
        <BootstrapCard>
            <BootstrapCard.Header as="h6" className="test-align-left">System Strain <Badge bg="success"
                                                                                           className="float-right"></Badge></BootstrapCard.Header>
            <ListGroup className="list-group-flush" style={{textAlign: 'left'}}>
                <ListGroupItem>
                    ???
                    <Badge bg="danger" className="float-right">-1</Badge>
                </ListGroupItem>
                <ListGroupItem>
                    ???
                    <Badge bg="danger" className="float-right">-1</Badge>
                </ListGroupItem>
            </ListGroup>
            <BootstrapCard.Body>

            </BootstrapCard.Body>
        </BootstrapCard>
    );
}

export default SystemStrain;
