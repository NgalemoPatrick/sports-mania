import React from "react";

const CustomButton = ({ title, iconRight, type, onClick }) => {
  return (
    <button onClick={onClick} type={type || "button"} className="custom-button">
      {title}
      {iconRight && <div className="iconR">{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
