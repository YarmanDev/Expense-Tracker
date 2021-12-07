import React from "react";

export const TotalBox = ({ name, amount, percents }) => {
  return (
    <div className="totalBox">
      <h5>Total {name}</h5>
      <h4>{amount}K</h4>
      <p>{percents}%</p>
    </div>
  );
};
