import React, { useEffect, useState } from "react";
import { HeadCltn } from "../../components/Header/HeadCltn/HeadCltn";
import { Footer } from "../../components/Footer/Footer";
import { Gallery } from "../../components/Gallery/Gallery";
import { SidePanel } from "../../components/SidePanel/SidePanel";
import { SwitchPages } from "../../components/Buttons/SwitchPages/SwitchPages";
import css from "./collection.module.css";

export default function myCollection() {
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
      <div className={css.switchpanel}>
        <SwitchPages
          style={{ marginLeft: "1%" }}
          type="button"
          onClick={() => setPage((p) => (p - 1 > -1 ? p - 1 : 0))}
        >
          Prev
        </SwitchPages>
        <SwitchPages
          style={{ marginLeft: "80%" }}
          type="button"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </SwitchPages>
      </div>
      <Footer />
    </main>
  );
}
