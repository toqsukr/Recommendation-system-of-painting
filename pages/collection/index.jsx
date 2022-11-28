import React, { useEffect, useState } from "react";
import { HeadCltn } from "../../components/Header/HeadCltn/HeadCltn";
import { Footer } from "../../components/Footer/Footer";
import { Gallery } from "../../components/Gallery/Gallery";
import { SwitchPages } from "../../components/Buttons/SwitchPages/SwitchPages";
import { ToPage } from "../../components/Buttons/ToPage/ToPage";
import "bootstrap/dist/css/bootstrap.css";

export default function myCollection({ data }) {
  const [content, setContent] = useState(data);
  const [page, setPage] = useState(0);
  return (
    <main>
      <title>Моя коллекция</title>
      <HeadCltn />
      <div>
        {content && (
          <Gallery content={content?.slice(page * 6, (page + 1) * 6)} />
        )}
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <SwitchPages
              className="page-link"
              ariaLabel="Previous"
              type="button"
              onClick={() => setPage((p) => (p - 1 > -1 ? p - 1 : 0))}
            >
              <span aria-hidden="true">&laquo;</span>
            </SwitchPages>
          </li>

          {page === 0 ? (
            <li className="page-item active">
              <span className="page-link">1</span>
            </li>
          ) : (
            <li className="page-item">
              <ToPage onClick={() => setPage(0)} className="page-link" href="#">
                1
              </ToPage>
            </li>
          )}

          {page > 2 && (
            <li>
              <span className="page-link">...</span>
            </li>
          )}

          {page > 1 && (
            <>
              <li className="page-item">
                <ToPage
                  onClick={() => setPage(page - 1)}
                  className="page-link"
                  href="#"
                >
                  {page}
                </ToPage>
              </li>
            </>
          )}

          {page != 0 && page != Math.trunc(content.length / 6) && (
            <>
              <li className="page-item active">
                <span className="page-link">{page + 1}</span>
              </li>
            </>
          )}

          {page < Math.trunc(content.length / 6) - 1 && (
            <>
              <li className="page-item">
                <ToPage
                  onClick={() => setPage(page + 1)}
                  className="page-link"
                  href="#"
                >
                  {page + 2}
                </ToPage>
              </li>
            </>
          )}

          {page < Math.trunc(content.length / 6) - 2 && (
            <li>
              <span className="page-link">...</span>
            </li>
          )}

          {page === Math.trunc(content.length / 6) ? (
            <li className="page-item active">
              <span className="page-link">
                {Math.trunc(content.length / 6) + 1}
              </span>
            </li>
          ) : (
            <li className="page-item">
              <ToPage onClick={() => setPage(Math.trunc(content.length / 6))}>
                {Math.trunc(content.length / 6) + 1}
              </ToPage>
            </li>
          )}

          <li className="page-item">
            <SwitchPages
              className="page-link"
              ariaLabel="Next"
              type="button"
              onClick={() =>
                setPage((p) =>
                  p + 1 > Math.trunc(content.length / 6) ? p : p + 1
                )
              }
            >
              <span aria-hidden="true">&raquo;</span>
            </SwitchPages>
          </li>
        </ul>
      </nav>
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
