import React from "react";
import { TiDelete } from "react-icons/ti"

export default function ExpenseItem({ title, cost }) {
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {title}
            <div>
            <span className="badge rounded-pill bg-primary mr-3">
                    ${cost}
                </span>
                <TiDelete size="1.5em"></TiDelete>
            </div>
        </li>
    )
}