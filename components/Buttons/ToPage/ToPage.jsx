import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export const ToPage = ({ children, onClick }) => {
  return (
    <a className="page-link" onClick={onClick} href="#">
      {children}
    </a>
  );
};
