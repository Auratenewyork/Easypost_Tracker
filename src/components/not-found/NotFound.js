import React from "react";
import "./NotFound.css";

export default function ({ errorCode = 404 }) {
    if (errorCode === 500) {
        return (
            <div className="wrapper">
                ERROR: ORDER NOT FOUND OR SOMETHING WENT WRONG
            </div>
        );
    }

    return <div className="wrapper">ERROR 404: PAGE NOT FOUND</div>;
}
