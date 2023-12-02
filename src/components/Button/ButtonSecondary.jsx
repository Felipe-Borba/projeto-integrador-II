import React from "react";
import "./style.css";

export default function ButtonSecondary({ onClick, children }) {
  return (
    <button className="buttonSecondary" onClick={onClick}>
      {children}
    </button>
  );
}
