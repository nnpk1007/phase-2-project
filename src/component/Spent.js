import React from "react";

export default function Spent({ totalExpenses }) {
    return (
        <div className="alert alert-danger">
            <span>You spent: ${totalExpenses}</span>
        </div>
    )
}