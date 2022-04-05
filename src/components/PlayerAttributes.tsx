import React, {FC} from 'react';
import {Card, Tag} from "antd";

import {CheckCircleOutlined,} from '@ant-design/icons';
import {useRootData} from "../store/UseRootData";
import Attribute from "../Attribute";


interface Props {

}

const PlayerAttributes: FC<Props> = () => {
    const attributes_flat = useRootData(store => store.attributes_flat);

    return (
        <Card size="small"
              title="Attributes"
              extra={<Tag icon={<CheckCircleOutlined/>} color="success">
                  13/13
              </Tag>}
        >
            {attributes_flat.map((attrs) =>
                <Attribute type={attrs.type} value={attrs.value}/>
            )}
        </Card>
    );
}


export default PlayerAttributes;
