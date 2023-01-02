import { useState, React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./Gallery.module.css"
import { Card } from "../Card/Card";

export const Gallery = ({ fullContent, updateContent, updatePage, content }) => {
  const [loading, setLoading] = useState(true)
  if(loading) setTimeout(() => setLoading(false), 2800)
  return (
    <section
      className="py-5 text-center container"
      id={css.section}
    >
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id={css.container}
      >
        {!loading ? content && content.map((el) => (
        <Card fullContent={fullContent} updateContent={updateContent} updatePage={updatePage} data={el}/>
        )) : (
          <div style={{marginTop: '220px', marginBottom: '220px'}} className="container container-sm container-md container-lg">
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
              </div>
          </div>
        )}
      </div>
    </section>
  );
};
