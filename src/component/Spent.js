import React from "react";

export default function Spent({ totalExpenses }) {
    return (
        <div className="alert alert-success">
            <span>You spent: ${totalExpenses}</span>
        </div>
    )
}