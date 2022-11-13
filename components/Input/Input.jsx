import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export const Input = ({ children }) => {
  return (
    <input
      className="form-control me-2 head_search"
      type="search"
      placeholder={children}
      aria-label="Search"
    />
  );
};
