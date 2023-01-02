import React, { useState, useEffect } from "react";
import { Input } from "../Input/Input";
import "bootstrap/dist/css/bootstrap.css";

export const Search = ({
  children,
  updateContent,
  updatePage,
  fullGallery,
}) => {
  const [title, setTitle] = useState("");
  function handleClick(e) {
    e.preventDefault();
    updateContent(() => {
      let newContent = [];
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
        <Input
          className="form-control me-2 head_search"
          type="search"
          value={title}
          placeholder={children.placeholder}
          aria-label="Search"
          onChange={(e) => setTitle(e.target.value)}
          onInputCapture = {(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};
