import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./component/Navbar";
import Budget from "./component/Budget";
import Remaining from "./component/Remaining";

function App() {
  return (
    <div className="container">
        <Navbar />
        <div className="col mt-3">
          <div className="row-sm">
            <Budget />
          </div>
          <div className="row-sm">
            <Remaining />
          </div>
        </div>
    </div>

  );
}

export default App;
