import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, onDeleteExpense }) {
  const renderExpenses = expenses.map((expense) => (
    <ExpenseItem key={expense.id} id={expense.id} title={expense.title} cost={expense.cost} onDeleteExpense={onDeleteExpense}/>
  ))
  return (
    <div>
      <ul className="list-group">{renderExpenses}</ul>
    </div>
  );
}
