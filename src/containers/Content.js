import React from "react";
import { MainInfo } from "./MainInfo";
import { AccountInfo } from "./AccountInfo";
import "../scss/content.scss";

export const Content = () => {
  return (
    <div className="content">
      <MainInfo />
      <AccountInfo />
    </div>
  );
};
