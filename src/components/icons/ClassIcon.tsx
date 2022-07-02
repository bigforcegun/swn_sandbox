import React from 'react';

import {ExperimentOutlined, MinusOutlined, PercentageOutlined, SendOutlined} from '@ant-design/icons';

interface Props {
    class: string;
}


function ClassIcon(props: Props) {
    switch (props.class) {
        case "warrior": {
            return (
                <SendOutlined/>
            );
        }
        case "expert": {
            return (
                <PercentageOutlined/>
            );
        }
        case "psychic": {
            return (
                <ExperimentOutlined/>
            );
        }
        case "adventurer": {
            return (
                <PercentageOutlined/>
            );
        }
        default: {
            return (
                <MinusOutlined/>
            );
        }
    }
}

export default ClassIcon;
