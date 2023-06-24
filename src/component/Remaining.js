import React from "react";

export default function Remaining({ remainingBalance }) {
    return (
        <div className="alert alert-success">
            <span>Remaining: ${remainingBalance}</span>
        </div>
    )
}