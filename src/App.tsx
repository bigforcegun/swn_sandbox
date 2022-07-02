import React from 'react';
import './App.css';
import './antd.less';
import 'antd/dist/antd.css';
import {Container,} from "react-bootstrap"
import StoreProvider from "./store/context";
import {Card} from "antd";
import CharacterSheet from "./components/CharacterSheet";
import CharacterSheetEditor from "./components/CharacterSheetEditor";


function App() {
    return (
        <StoreProvider>
            <div className="App">
                <Container fluid>
                    <Card title="John Due Character" bordered={false}>
                        <CharacterSheetEditor character={"lel"}/>
                        <CharacterSheet character={"lel"}/>
                    </Card>
                </Container>
            </div>
        </StoreProvider>
    );
}

export default App;
