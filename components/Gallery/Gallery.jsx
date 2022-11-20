import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "../Card/Card";

export const Gallery = ({ content }) => {
  return (
    <section className="py-5 text-center container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {content.map((el) => (
          <Card title={el.title} url={el.url} />
        ))}
      </div>
    </section>
  );
};