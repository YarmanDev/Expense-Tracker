import React from "react";

export const Card = ({ bankName, cardNumbers, userName, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-title">
        <div>{bankName}</div>
        <img src="../../credit-card.png" alt="credit-card-chip" />
      </div>
      <h4>{cardNumbers}</h4>
      <p className="card-info">
        <span>{userName}</span>
        <img src="../../apple-pay.png" alt="apple-pay" />
      </p>
    </div>
  );
};
