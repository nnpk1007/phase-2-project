import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, onDeleteExpense }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderExpenses = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      id={expense.id}
      title={expense.title}
      cost={expense.cost}
      onDeleteExpense={onDeleteExpense}
      searchTerm={searchTerm}
    />
  ));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search expense..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
      <ul className="list-group mt-3">{renderExpenses}</ul>
    </div>
  );
}
