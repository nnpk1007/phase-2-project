import React, { useEffect, useState } from "react";

export default function Budget() {
  return (
    <>
      <div className="alert alert-info">
        <span>Budget: $2500</span>
      </div>
      <div className="alert alert-secondary">
        <span>Remaining: $1000</span>
      </div>
      <div className="alert alert-danger">
        <span>Spent: $1500</span>
      </div>
    </>
  );
}
