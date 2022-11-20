import React, { useEffect, useState } from "react";
import { HeadCltn } from "../../components/Header/HeadCltn/HeadCltn";
import { Footer } from "../../components/Footer/Footer";
import { Gallery } from "../../components/Gallery/Gallery";
import { SwitchPages } from "../../components/Buttons/SwitchPages/SwitchPages";

export default function collection() {
  let [content, setContent] = useState(null);
  let [page, setPage] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((obj) => setContent(obj));
  }, []);
  return (
    <main>
      <HeadCltn />
      <div>
        {content && (
          <Gallery content={content?.slice(page * 6, (page + 1) * 6)} />
        )}
      </div>
      <SwitchPages
        type="button"
        onClick={() => setPage((p) => (p - 1 > -1 ? p - 1 : 0))}
      >
        Prev
      </SwitchPages>
      <SwitchPages type="button" onClick={() => setPage((p) => p + 1)}>
        Next
      </SwitchPages>
      <Footer />
    </main>
  );
}
