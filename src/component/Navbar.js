import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar md navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Your Budget Manager
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
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
