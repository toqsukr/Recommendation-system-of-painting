import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BtnSearch } from "../Buttons/BtnSearch/BtnSearch";
import { Input } from "../Input/Input";

export const Search = ({ children }) => {
  return (
    <div>
      <form className="d-flex" role="search">
        <Input>{children.placeholder}</Input>
        <BtnSearch>{children.bttn}</BtnSearch>
      </form>
    </div>
  );
};
