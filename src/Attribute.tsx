import React from 'react';
import {useRootData} from "./store/UseRootData";
import {Button, Input} from "antd";

import {MinusOutlined, PlusOutlined,} from '@ant-design/icons';

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
    if (attribute < 3) { return -2 } else
    if (attribute < 7) { return -1 } else
    if (attribute < 13) { return -0 } else
    if (attribute < 17) { return 1 } else
    { return 2 }

}

function Attribute(props: Props) {
    const updateAttribute = useRootData(store => store.updateAttribute);
    const downgradeAttribute = useRootData(store => store.downgradeAttribute);
    let bonus = calculateBonus(props.value)
    return (
        <>
            <Input.Group>
                <Button icon={<MinusOutlined/>} onClick={() => downgradeAttribute(props.type)}/>
                <Input style={{width: 'calc(100% - 100px)'}}
                       value={props.value}
                       addonBefore={props.type}
                       addonAfter={`${bonusPrefix(bonus)}${bonus}`}
                />
                <Button icon={<PlusOutlined/>} onClick={() => updateAttribute(props.type)}/>
            </Input.Group>
        </>
        );
}

export default Attribute;
