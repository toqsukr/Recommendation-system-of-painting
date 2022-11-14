import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export const ColFooter = ({ children }) => {
  return (
    <div className="col-6 col-md">
      <h5>{children}</h5>
    </div>
  );
};
