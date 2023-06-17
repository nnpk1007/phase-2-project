import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
const expenseUrl = "http://localhost:3001/expenses"

export default function ExpenseList() {
    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        fetch(expenseUrl)
        .then(r => r.json())
        .then(expenses => setExpenses(expenses))
    }, [])

    const renderExpenses = expenses.map((expense) => (
        <ExpenseItem key={expense.id} id={expense.id} title={expense.title} amount={expense.amount}/>
    ))

    return(
        <ul className="list-group">
            {renderExpenses}
        </ul>
    )
}