import React, { useState } from "react";

export default function Budget({ budget, onUpdateBudget }) {
  const [editing, setEditting] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleNewBudget = (e) => {
    setNewBudget(parseFloat(e.target.value));
  };

  const handleEditClick = () => {
    setEditting(true);
  };

  const handleSaveClick = () => {
    fetch("http://localhost:3000/budget", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ total: newBudget }),
    })
      .then(() => {
        setEditting(false);
        onUpdateBudget(newBudget);
      })
      .catch((errror) => {
        console.log("Error updating budget:", budget);
      });
  };

  const handleCancelClick = () => {
    setEditting(false);
    setNewBudget(budget);
  };

  return (
    <div className="alert alert-info d-flex justify-content-between align-items-center">
      {editing ? (
        <>
          <input
            type="number"
            className="form-control mr-2"
            value={newBudget}
            onChange={handleNewBudget}
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
          <span>Budget: ${budget}</span>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}
