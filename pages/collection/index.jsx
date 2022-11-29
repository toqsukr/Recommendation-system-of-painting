import React, { useState } from "react";
import { HeadCltn } from "../../components/Header/HeadCltn/HeadCltn";
import { Footer } from "../../components/Footer/Footer";
import { Gallery } from "../../components/Gallery/Gallery";
import { SwitchBar } from "../../components/SwitchBar/SwitchBar";
import { NotFound } from "../../components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.css";

export default function myCollection({ data }) {
  const [content, setContent] = useState(data);
  const [page, setPage] = useState(0);
  const fullGallery = data;
  const updatePage = (p) => setPage(p);
  const updateContent = (p) => setContent(p);
  return (
    <main>
      <title>Моя коллекция</title>
      <HeadCltn
        fullGallery={fullGallery}
        updateContent={updateContent}
        content={content}
        updatePage={updatePage}
      />
      <div>
        {content ? (
          <Gallery content={content?.slice(page * 6, (page + 1) * 6)} />
        ) : (
          <NotFound />
        )}
      </div>
      <SwitchBar content={content} page={page} updatePage={updatePage} />
      <Footer />
    </main>
  );
}

export async function getServerSideProps(context) {
  const obj = await fetch("https://jsonplaceholder.typicode.com/photos").then(
    (res) => res.json()
  );
  return {
    props: {
      data: obj,
    },
  };
}
