import React from "react";
import { MenuOption } from "../components/MenuOption";
import "../scss/sideMenu.scss";

export const SideMenu = () => {
  return (
    <div className="sideMenu">
      <div className="options-wrapper">
        <MenuOption imageUrl="dashboard" name="Home" />
        <MenuOption imageUrl="transaction" name="Transaction" />
        <MenuOption imageUrl="wallet" name="Wallet" />
        <MenuOption imageUrl="pie-chart" name="Reports" />
      </div>
    </div>
  );
};
