import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./component/Navbar";
import Budget from "./component/Budget";

function App() {
  return (
    <div className="container">
        <Navbar />
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
        </div>
    </div>

  );
}

export default App;
