import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Arrivals from "./components/arrival/Arrival";
import AurateInfo from "./components/aurate-info/AurateInfo";
import Spinner from './components/spinner'
import NotFound from './components/not-found'
import { useParams } from 'react-router-dom'

function App() {
    const { orderNumber } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://4p9vek36rc.execute-api.us-east-2.amazonaws.com/api/tracking_information/${orderNumber}`)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }, [orderNumber])

    if (isLoading) {
        return (
            <div className="loading-box">
                <Spinner />
            </div>
        )
    }

    if (!data || !data.length) {
        return <NotFound errorCode={500} />
    }

    console.log(data)

    return (
        <>
            <Header />
            <div className="container">
                <Arrivals trackingData={data} />
                <AurateInfo />
            </div>
        </>
    );
}

export default App;
