import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"

export default function AddExpenseForm() {
    const [title, setTitle] = useState("")
    const [cost, setCost] = useState("")

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleCostChange = (e) => {
        setCost(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newExpense = {
            id: uuidv4(),
            title: title,
            cost: parseFloat(cost)
        }

        fetch("http://localhost:3000/expenses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newExpense)
        })
        .then(r => r.json())
        .then(data => {
            // reset the form fields
            setTitle("")
            setCost("")
            
        })
        .catch(error => console.log(error))
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="title>">Title</label>
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
          <label for="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={handleCostChange}
          ></input>
        </div>
        <div className="col-sm">
            <button type="submit" className="btn btn-primary btn-sm">
                Save
            </button>
        </div>
      </div>
    </form>
  );
}
