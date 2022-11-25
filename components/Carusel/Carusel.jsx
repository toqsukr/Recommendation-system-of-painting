import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./carusel.module.css";
export const Carusel = ({ height, width, path }) => {
  return (
    <section className="container-centre py-5 text-center">
      <div id={css.frame}>
        <section id="carouselExampleControls" className="carousel slide">
          <div
            id={css.mainimg}
            className="container container-lg container-md container-sm"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <form action="">
                  <input
                    type="image"
                    id={css.like}
                    height={height}
                    width={width}
                    src={path}
                    alt="Изображение"
                  />
                </form>
              </div>
              <button
                className="carousel-control-prev"
                id={css.mainbtnleft}
                type="button"
                script="#"
              ></button>
              <button
                className="carousel-control-next"
                id={css.mainbtnright}
                type="button"
                script="#"
              ></button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
