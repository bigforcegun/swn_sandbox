import React, {FC} from 'react';
import {Col, Row,} from "react-bootstrap"
import {Avatar, Card} from "antd";

import {
    AuditOutlined,
    CrownOutlined,
    HomeOutlined,
    RocketOutlined,
    SecurityScanOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {storeContext} from "../store/context";
import {Statistic} from "antd/es";

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

const PlayerInfo: FC<Props> = ({type = ""}) => {

    const store = React.useContext(storeContext);
    if (!store) throw Error("Store shouldn't be null");

    let count = 1

    return (
        <>
            <Card size="small">
                name: kek pek
            </Card>
            <Row>
                <Col span={12}>
                    <Avatar size={64} icon={<UserOutlined/>}/>
                </Col>
                <Col span={12}>

                    <Statistic title="class" value={"warrior"} prefix={<AuditOutlined/>}/>
                    <Statistic title="Background" value={"mem"} prefix={<HomeOutlined/>}/>
                    <Statistic title="Ship Role" value={"mem"} prefix={<RocketOutlined/>}/>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="Level" value={3} prefix={<CrownOutlined/>}/>
                        </Col>
                        <Col span={12}>
                            <Statistic title="Exp" value={"10"} prefix={<SecurityScanOutlined/>} suffix="/ 100"/>
                        </Col>
                    </Row>,
                </Col>
            </Row>

        </>
    )

}

export default PlayerInfo;
