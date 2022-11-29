import React from "react";
import { ToPage } from "../Buttons/ToPage/ToPage";
import { SwitchPages } from "../Buttons/SwitchPages/SwitchPages";

export const SwitchBar = ({ updatePage, page, content }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {Math.trunc(content.length / 6) != 0 && (
          <li className="page-item">
            <SwitchPages
              className="page-link"
              ariaLabel="Previous"
              type="button"
              onClick={() => updatePage((p) => (p - 1 > -1 ? p - 1 : 0))}
            >
              <span aria-hidden="true">&laquo;</span>
            </SwitchPages>
          </li>
        )}

        {Math.trunc(content.length / 6) != 0 &&
          (page === 0 ? (
            <li className="page-item active">
              <span className="page-link">1</span>
            </li>
          ) : (
            <li className="page-item">
              <ToPage
                onClick={() => updatePage(0)}
                className="page-link"
                href="#"
              >
                1
              </ToPage>
            </li>
          ))}

        {page > 2 && (
          <li>
            <span className="page-link">...</span>
          </li>
        )}

        {page > 1 && (
          <>
            <li className="page-item">
              <ToPage
                onClick={() => updatePage(page - 1)}
                className="page-link"
                href="#"
              >
                {page}
              </ToPage>
            </li>
          </>
        )}

        {page != 0 && page != Math.ceil(content.length / 6) - 1 && (
          <>
            <li className="page-item active">
              <span className="page-link">{page + 1}</span>
            </li>
          </>
        )}

        {page < Math.ceil(content.length / 6) - 2 && (
          <>
            <li className="page-item">
              <ToPage
                onClick={() => updatePage(page + 1)}
                className="page-link"
                href="#"
              >
                {page + 2}
              </ToPage>
            </li>
          </>
        )}

        {page < Math.ceil(content.length / 6) - 3 && (
          <li>
            <span className="page-link">...</span>
          </li>
        )}

        {Math.trunc(content.length / 6) != 0 &&
          (page === Math.ceil(content.length / 6) - 1 ? (
            <li className="page-item active">
              <span className="page-link">{Math.ceil(content.length / 6)}</span>
            </li>
          ) : (
            <li className="page-item">
              <ToPage
                onClick={() => updatePage(Math.ceil(content.length / 6) - 1)}
              >
                {Math.ceil(content.length / 6)}
              </ToPage>
            </li>
          ))}
        {Math.trunc(content.length / 6) != 0 && (
          <li className="page-item">
            <SwitchPages
              className="page-link"
              ariaLabel="Next"
              type="button"
              onClick={() =>
                updatePage((p) =>
                  p + 1 > Math.ceil(content.length / 6) - 1 ? p : p + 1
                )
              }
            >
              <span aria-hidden="true">&raquo;</span>
            </SwitchPages>
          </li>
        )}
      </ul>
    </nav>
  );
};
