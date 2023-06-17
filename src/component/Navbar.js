import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar md navbar-dark bg-dark">
      <div className="container">
        <a href="#Your Budget Manager" className="navbar-brand">
          Your Budget Manager
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#Home" className="nav-link active">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#Add Expense" className="nav-link">
              Add Expense
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
