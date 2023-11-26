import React from "react";
import "./style.css";

export default function ButtonPrimary({ onClick, children }) {
  return (
    <button className="buttonPrimary" onClick={onClick}>
      {children}
    </button>
  );
}
