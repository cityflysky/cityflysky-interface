import {Routes, Route, Link} from "react-router-dom";
import DaoHome from "./view/daoHome";
import MineDaos from "./view/MineDaos";
import CityFlySkyReader from "./component/cityflysky-header"
import CityFlySkyFooter from "./component/cityflysky-footer";
import GlobalStyle from "./style/style";
import React from "react";
import { ConnectProvider} from "./api/contracts";

function App() {
    return (
        <ConnectProvider>
            <GlobalStyle/>
            <div className="App" style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <CityFlySkyReader/>
                <Routes>
                    <Route path="/" element={<DaoHome/>}/>
                    <Route path="/MineDaos" element={<MineDaos/>}/>
                </Routes>
                <CityFlySkyFooter/>
            </div>

        </ConnectProvider>
    )
}

export default App;
