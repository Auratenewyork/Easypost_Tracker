import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Arrivals from "./components/arrival/Arrival";
import AurateInfo from "./components/aurate-info/AurateInfo";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Arrivals />
                <AurateInfo />
            </div>
        </>
    );
}

export default App;
