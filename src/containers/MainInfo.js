import React from "react";
import { TotalBox } from "../components/TotalBox";
import { LineChart } from "./LineChart";
import "../scss/mainInfo.scss";

export const MainInfo = () => {
  return (
    <div className="mainInfo">
      <div className="totalWrapper">
        <TotalBox name="Expense" amount="2.50" percents="35" />
        <TotalBox name="Earning" amount="31.70" percents="55" />
      </div>

      <LineChart />
    </div>
  );
};
