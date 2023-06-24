import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses}) {
  const renderExpenses = expenses.map((expense) => (
    <ExpenseItem key={expense.id} title={expense.title} cost={expense.cost}/>
  ))
  return (
    <div>
      <ul className="list-group">{renderExpenses}</ul>
    </div>
  );
}
