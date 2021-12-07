import React from "react";
import { CardSwitcher } from "./CardSwitcher";
import { BarChart } from "../components/BarChart";
import "../scss/accountInfo.scss";

export const AccountInfo = () => {
  return (
    <div className="accountInfo">
      <CardSwitcher />
      <BarChart />
    </div>
  );
};
