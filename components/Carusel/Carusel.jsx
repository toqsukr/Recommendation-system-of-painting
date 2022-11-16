import React, { children } from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./carusel.module.css";
export const Carusel = ({ children }) => {
  return (
    <section className="container-centre py-5 text-center">
      <div id={css.frame}>
        <section
          id="carouselExampleControls"
          className="carousel slide"
          style={{ maxHeight: "692px" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                height={children.height}
                width={children.width}
                src={children.path}
                alt="Изображение"
              />
            </div>
            <div className="carousel-item">
              <img
                height={children.height}
                width={children.width}
                src={children.path}
                alt="Изображение"
              />
            </div>
            <div className="carousel-item">
              <img
                height={children.height}
                width={children.width}
                src={children.path}
                alt="Изображение"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            id={css.like}
            type="button"
            data-bs-target="#carouselExampleControls"
            script="#"
          >
            <span className="visually-hidden">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Следующий</font>
              </font>
            </span>
          </button>
          <button
            className="carousel-control-prev"
            id={css.mainbtnleft}
            type="button"
            script="#"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Предыдущий</font>
              </font>
            </span>
          </button>
          <button
            className="carousel-control-next"
            id={css.mainbtnright}
            type="button"
            script="#"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Следующий</font>
              </font>
            </span>
          </button>
        </section>
      </div>
    </section>
  );
};
