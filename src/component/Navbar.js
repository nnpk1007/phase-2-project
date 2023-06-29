import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Your Budget Manager
        </Link>
        <ul className="nav flex-column" >
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-expense" className="nav-link">
              Add Expense
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
