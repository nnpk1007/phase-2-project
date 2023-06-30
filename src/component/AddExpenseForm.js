import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AddExpenseForm({ onAddExpense }) {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCostChange = (e) => {
    setCost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuidv4(),
      title: title,
      cost: parseFloat(cost),
    };

    fetch(`${process.env.REACT_APP_API_URL}/expenses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    })
      .then((r) => r.json())
      .then((data) => {
        // reset the form fields
        setTitle("");
        setCost("");
        onAddExpense(data);

        const addMore = window.confirm(
          "Expense added successfully. Do you want to add another expense?"
        );

        if (addMore) {
          // User wants to add another expense, no action needed
        } else {
          // User doesn't want to add another expense, navigate back to home page
          history.push("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label>Title</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
          ></input>
        </div>
        <div className="col-sm">
          <label>Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={handleCostChange}
          ></input>
        </div>
      </div>
      <div className="col-sm">
        <button type="submit" className="mt-3 btn btn-primary btn-sm">
          Save
        </button>
      </div>
    </form>
  );
}
