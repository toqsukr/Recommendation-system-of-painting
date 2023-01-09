import { useState, useEffect, React } from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./Gallery.module.css"
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";

export const Gallery = ({ loading, updateLoading, updateFullGallery, fullContent, updateContent, updatePage, content }) => {
  const [isDeleted, setIsDeleted] = useState(false)

  setTimeout(() => updateLoading(false), 1000)

  useEffect(() => {
    if(isDeleted) {
      setIsDeleted(false)
      updateLoading(true)
      updatePage(0)
      setTimeout(async () => updateLoading(false), 700)
    }
  })

  const updateIsDeleted = (p) => setIsDeleted(p)

  return (
    <section
      className="py-5 text-center container"
      id={css.section}
    >
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id={css.container}
      >
        
        {!loading ? content && content.map((el) => (
        <Card key={el.hex} updateFullGallery={updateFullGallery} updateIsDeleted={updateIsDeleted} fullContent={fullContent} updateContent={updateContent} updatePage={updatePage} data={el}/>
        )) : (
          <Loading/>
        )}
      </div>
    </section>
  );
};
