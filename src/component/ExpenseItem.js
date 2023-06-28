import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

export default function ExpenseItem({ id, title, cost, onDeleteExpense }) {
  const handleDeleteClick = () => {
    fetch(`http://localhost:3000/expenses/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((expense) => onDeleteExpense(expense.id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {title}
      <div>
        <span className="badge rounded-pill bg-primary mr-3">${cost}</span>
        <AiTwotoneDelete 
          size="1.5em"
          onClick={handleDeleteClick}
        ></AiTwotoneDelete>
      </div>
    </li>
  );
}
