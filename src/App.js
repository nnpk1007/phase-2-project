import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./component/Navbar";
import Budget from "./component/Budget";
import Remaining from "./component/Remaining";
import Spent from "./component/Spent"
import ExpenseList from "./component/ExpenseList"

function App() {
  return (
    <div className="container">
        <Navbar />
        <div className="row mt-4">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Spent />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
    </div>

  );
}

export default App;
