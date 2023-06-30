import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2">
      <div className="container">
        <NavLink to="/home" exact className="navbar-brand" style={{ fontSize: "30px", color: "purple" }}>
          BudgetWise
        </NavLink>
        <ul className="nav flex-column">
          <li className="nav-item active">
            <NavLink to="/home" exact className="nav-link" activeStyle={{background:"lightgray"}}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-expense" exact className="nav-link " activeStyle={{background:"lightgray"}}>
              Add Expense
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
