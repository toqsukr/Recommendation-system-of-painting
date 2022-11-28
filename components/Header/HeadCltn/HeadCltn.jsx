import React from "react";
import { BtnHead } from "../../Buttons/BtnHead/BtnHead";
import { collection } from "../../information";
import { Search } from "../../Search/Search";
import "bootstrap/dist/css/bootstrap.css";
import css from "../header.module.css";

export const HeadCltn = ({
  content,
  updateContent,
  updatePage,
  fullGallery,
}) => {
  return (
    <div id={css.header_fixed}>
      <nav className={`navbar navbar-expand-lg bg-dark`} id={css.header}>
        <div className="container-fluid">
          <div className="header">
            <BtnHead path="/">{collection.rcmd.name}</BtnHead>
          </div>
          <Search
            fullGallery={fullGallery}
            updateContent={updateContent}
            updatePage={updatePage}
            content={content}
          >
            {collection.search}
          </Search>
        </div>
      </nav>
    </div>
  );
};
