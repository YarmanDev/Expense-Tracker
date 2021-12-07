import React from "react";
import { SideMenu } from "./containers/SideMenu";
import { Header } from "./containers/Header";
import { Content } from "./containers/Content";
import "./scss/dashboard.scss";

export const App = () => {
  return (
    <div className="dashboard">
      <SideMenu />
      <Header />
      <Content />
    </div>
  );
};
