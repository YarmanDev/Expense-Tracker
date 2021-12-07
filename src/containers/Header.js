import React from "react";
import { Logo } from "../components/Logo";
import "../scss/header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="greetings">
        <p className="title">Hi, Mike</p>
        <p>Welcome back!</p>
      </div>
      <div className="add">
        <p>Add New Card</p>
        <img src="./plus.png" alt="plus" />
      </div>
      <img className="user" src="./user.png" alt="user" />
    </header>
  );
};
