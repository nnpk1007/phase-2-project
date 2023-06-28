import React from "react";

export default function Remaining({ remainingBalance }) {
    const alertType = remainingBalance < 0 ? "alert-danger" : "alert-primary"
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${remainingBalance}</span>
        </div>
    )
}