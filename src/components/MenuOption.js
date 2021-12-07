import React from "react";

export const MenuOption = ({ name, imageUrl }) => {
  return (
    <div className="option">
      <img
        src={`../../${imageUrl}.png`}
        alt="option"
        className="option-image"
      />
      <span>{name}</span>
    </div>
  );
};
