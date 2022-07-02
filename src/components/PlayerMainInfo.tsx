import React, {FC} from 'react';
import {Col, Row,} from "react-bootstrap"
import {Avatar, Card} from "antd";

import {CrownOutlined, HomeOutlined, RocketOutlined, SecurityScanOutlined, UserOutlined,} from '@ant-design/icons';
import {Statistic} from "antd/es";
import {useRootData} from "../store/UseRootData";
import ClassIcon from "./icons/ClassIcon";

interface Props {
    type: string;
    value: number;
}

const PlayerInfo: FC<Props> = ({type = ""}) => {

    const level = useRootData(store => store.player.level);
    const classname = useRootData(store => store.player.class_name);

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

                    <Statistic title="class" value={classname} prefix={<ClassIcon class={classname}/>}/>
                    <Statistic title="Background" value={"mem"} prefix={<HomeOutlined/>}/>
                    <Statistic title="Ship Role" value={"mem"} prefix={<RocketOutlined/>}/>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="Level" value={level} prefix={<CrownOutlined/>}/>
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
