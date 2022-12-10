import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./Gallery.module.css"
import { Card } from "../Card/Card";

export const Gallery = ({ updateContent, updatePage, content }) => {
  return (
    <section
      className="py-5 text-center container"
      id={css.section}
    >
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"        id={css.container}
      >
        {content.map((el) => (
        <Card key={el.hex} updateContent={updateContent} updatePage={updatePage} data={el} title={el.title} url={el.src} hex={el.hex}/>
        ))}
      </div>
    </section>
  );
};
