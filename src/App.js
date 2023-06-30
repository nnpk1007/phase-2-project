import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./component/Navbar";
import Budget from "./component/Budget";
import Remaining from "./component/Remaining";
import Spent from "./component/Spent";
import ExpenseList from "./component/ExpenseList";
import AddExpenseForm from "./component/AddExpenseForm";

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  // fetch data from json server when the page first load
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/budget`)
      .then((r) => r.json())
      .then((data) => setBudget(data.total))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/expenses`)
      .then((r) => r.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.log(error));
  }, [expenses]);

  // calculate total spent
  const totalExpenses = expenses
    .map((expense) => expense.cost)
    .reduce((total, cost) => total + cost, 0);

  // calculate the remaining balance
  const remainingBalance = budget - totalExpenses;

  const handleUpdateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (expenseId) => {
    const updateExpenseList = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    setExpenses(updateExpenseList);
  };

  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="container">
          <div className="col mt-3">
            <div className="col">
              <Budget budget={budget} onUpdateBudget={handleUpdateBudget} />
            </div>
            <div className="col">
              <Remaining remainingBalance={remainingBalance} />
            </div>
            <div className="col">
              <Spent totalExpenses={totalExpenses} />
            </div>
          </div>
        </div> 
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <Switch>
              <Route exact path={["/", "/home"]}>
                <ExpenseList
                  expenses={expenses}
                  onDeleteExpense={handleDeleteExpense}
                />
              </Route>
              <Route exact path="/add-expense">
                <AddExpenseForm onAddExpense={handleAddExpense} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
