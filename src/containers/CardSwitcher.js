import React from "react";
import { Card } from "../components/Card";

export const CardSwitcher = () => {
  return (
    <div className="card-wrapper">
      <Card
        bankName="Monobank"
        cardNumbers="5987 8574 9685 9085"
        userName="Mandzyniak Yaroslav"
        className="first"
      />
      <Card
        bankName="PrivatBank"
        cardNumbers="5682 8574 2658 9085"
        userName="Yarman Develop"
        className="second"
      />
    </div>
  );
};
