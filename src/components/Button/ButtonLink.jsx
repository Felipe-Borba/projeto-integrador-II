import React from "react";
import "./style.css";

export default function ButtonLink({ onClick, children }) {
  return (
    <button className="buttonLink" onClick={onClick}>
      {children}
    </button>
  );
}
