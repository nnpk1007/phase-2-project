import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

export default function ExpenseItem({ id, title, cost, onDeleteExpense }) {
  const [editCost, setEditCost] = useState(false);
  const [newCost, setNewCost] = useState(cost);

  const handleEditClick = () => {
    setEditCost(true);
  };

  const handleNewCost = (e) => {
    setNewCost(parseFloat(e.target.value));
  };

  const handleSaveClick = () => {
    fetch(`http://localhost:3000/expenses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, cost: newCost }),
    })
      .then(() => {
        setEditCost(false);
      })
      .catch((error) => {
        console.log("Error updating cost of expense:", error);
      });
  };

  const handleCancelClick = () => {
    setEditCost(false);
    setNewCost(cost);
  };

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
        {editCost ? (
          <>
            <input
              type="number"
              className="form-control mr-2"
              value={newCost}
              onChange={handleNewCost}
            />
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <span className="badge rounded-pill text-bg-primary">${cost}</span>
            <button
              type="button"
              className="badge text-bg-secondary"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <AiTwotoneDelete
              size="1.5em"
              onClick={handleDeleteClick}
            ></AiTwotoneDelete>
          </>
        )}
      </div>
    </li>
  );
}
