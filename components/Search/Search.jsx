import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BtnSearch } from "../Buttons/BtnSearch/BtnSearch";

export const Search = ({
  children,
  updateContent,
  updatePage,
  fullGallery,
}) => {
  let [title, setTitle] = useState("");
  function handleClick(e) {
    e.preventDefault();
    updateContent((content) => {
      let newContent = [];
      console.log(title);
      title === ""
        ? (newContent = fullGallery)
        : content.forEach((el) => {
            if (el.title.includes(title)) newContent.push(el);
          });
      updatePage(0);
      return newContent;
    });
    setTitle("");
  }
  return (
    <div>
      <form onSubmit={handleClick} className="d-flex" role="search">
        <input
          className="form-control me-2 head_search"
          type="search"
          value={title}
          placeholder={children.placeholder}
          aria-label="Search"
          onChange={(e) => setTitle(e.target.value)}
        />
        <BtnSearch>{children.bttn}</BtnSearch>
      </form>
    </div>
  );
};
