import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./footer.module.css";
import { footer } from "../information";

export const Footer = ({onClick}) => {
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
            <small id={css.foot_btn} className="d-block mb-3 text-muted">{footer.year}</small>
          </div>
          <div className="col-6 col-md">
            <a id={css.foot_btn} href="https://github.com/toqsukr/Recommendation-system-of-painting" target="_blank">{footer.resources}</a>
          </div>
          <div className="col-6 col-md">
            <a type="button" id={css.foot_btn} onClick={onClick}>{footer.about.title}</a>
          </div>
        </div>
      </footer>
    </section>
  );
};
