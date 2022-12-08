import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "../Card/Card";

export const Gallery = ({ updateContent, updatePage, content }) => {
  return (
    <section
      className="py-5 text-center container"
      style={{ marginBottom: "30px" }}
    >
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
        style={{ marginTop: "30px" }}
      >
        {content.map((el) => (
        <Card updateContent={updateContent} updatePage={updatePage} data={el} title={el.title} url={el.src} hex={el.hex}/>
        ))}
      </div>
    </section>
  );
};
