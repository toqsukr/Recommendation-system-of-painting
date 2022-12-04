import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export const Search = ({
  children,
  updateContent,
  updatePage,
  fullGallery,
}) => {
  let [title, setTitle] = useState("");
  function handleClick(e) {
    e.preventDefault();
    console.log(title);
    updateContent(() => {
      let newContent = [];
      console.log(title);
      title === ""
        ? (newContent = fullGallery)
        : fullGallery.forEach((el) => {
            if (el.title.toLowerCase().includes(title.toLowerCase())) newContent.push(el);
          });
      updatePage(0);
      return newContent;
    });
  }
  return (
    <div>
      <form onChange={handleClick} className="d-flex" role="search">
        <input
          className="form-control me-2 head_search"
          type="search"
          value={title}
          placeholder={children.placeholder}
          aria-label="Search"
          onInputCapture={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};
