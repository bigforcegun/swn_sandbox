import {Button, Card, Form, Radio} from 'antd';
import React from 'react';
import {CrownOutlined} from '@ant-design/icons';
import {useRootData} from "../store/UseRootData";
import ClassIcon from "./icons/ClassIcon";

interface Props {
    character: string;
}


function CharacterSheetEditor(props: Props) {
    const [form] = Form.useForm();

    const changeClass = useRootData(store => store.changeClass);
    const levelUp = useRootData(store => store.levelUp);
    const levelDown = useRootData(store => store.levelDown);

    let onFieldsChange = (changedFields: any, allFields: any) => {
        let className = form.getFieldValue('class_name');
        console.log(className)
        changeClass(className)
    };



    return (
        <Card bordered={false}>
            <Form
                layout="inline"
                form={form}
                onFieldsChange={onFieldsChange}
            >
                <Form.Item name="class_name">
                    <Radio.Group>
                        <Radio.Button value="warrior">
                            <ClassIcon class={"warrior"}/>
                            Warrior
                        </Radio.Button>
                        <Radio.Button value="expert">
                            <ClassIcon class={"expert"}/>
                            Expert
                        </Radio.Button>
                        <Radio.Button value="psychic">
                            <ClassIcon class={"psychic"}/>
                            Psychic
                        </Radio.Button>
                        <Radio.Button value="adventurer">
                            <ClassIcon class={"adventurer"}/>
                            Adventurer
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button onClick={() => levelDown(1)}>
                        -1 <CrownOutlined/>
                    </Button>
                    <Button onClick={() => levelUp(1)}>
                        +1 <CrownOutlined/>
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default CharacterSheetEditor;
