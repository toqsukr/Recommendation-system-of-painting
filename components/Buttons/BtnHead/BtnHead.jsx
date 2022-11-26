import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "../../Header/header.module.css";
import Link from "next/link";

export const BtnHead = ({ children, path }) => {
  return (
    <>
      <Link href={path} type="button" className={`btn ${css.btn_head_clr}`}>
        {children}
      </Link>
    </>
  );
};
