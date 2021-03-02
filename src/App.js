import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Arrivals from "./components/arrival/Arrival";
import MultipleArrivals from "./components/multiple-arrivals/MultipleArrivals";
import AurateInfo from "./components/aurate-info/AurateInfo";
import Spinner from "./components/spinner";
import NotFound from "./components/not-found";
import { useParams, useLocation } from "react-router-dom";
import { API_LINK } from "./constants";

function App() {
    const query = useLocation().search;
    const { orderNumber } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${API_LINK}/${orderNumber}${query}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setError(true);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="loading-box">
                <Spinner />
            </div>
        );
    }

    if (error || !data) {
        return <NotFound errorCode={500} />;
    }

    if (data.length > 1) {
        return (
            <>
                <Header />
                <div className="container">
                    <MultipleArrivals trackingData={data} />
                    <AurateInfo />
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="container">
                <Arrivals trackingData={data[0]} />
                <AurateInfo />
            </div>
        </>
    );
}

export default App;
