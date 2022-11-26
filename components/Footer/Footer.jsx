import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ColFooter } from "../ColFooter/ColFooter";
import css from "./footer.module.css";
import { footer } from "../information";

export const Footer = () => {
  return (
    <section className="py-5 text-center container" id={css.footer}>
      <footer
        className="pt-4 pt-md-5 border-top"
        style={{ backgroundColor: "#00000" }}
      >
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src="/Logo.png"
              alt="Logo"
              width="24"
              height="24"
            />
            <small className="d-block mb-3 text-muted">{footer.year}</small>
          </div>
          <ColFooter>{footer.features}</ColFooter>
          <ColFooter>{footer.resources}</ColFooter>
          <ColFooter>{footer.about}</ColFooter>
        </div>
      </footer>
    </section>
  );
};
