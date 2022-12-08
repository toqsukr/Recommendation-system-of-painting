import React from "react";
import css from "./SidePanel.module.css"
import "bootstrap/dist/css/bootstrap.css";

export const SidePanel = ({ content, onClick }) => {
  return (
    <div
      className="modal fade show"
      id="exampleModalScrollable"
      tabIndex="-1"
      aria-labelledby="exampleModalScrollableTitle"
      style={{ display: "block", backgroundColor: "rgb(46 45 45 / 50%)" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="py-5 text-center container" style={{ marginTop: "80px" }}>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 id={css.title}>
                {content.title}
              </h1>
              <button
                onClick={onClick}
                type="button"
                className="btn-close"
                id="clsbtn"
              ></button>
            </div>
            <div className="modal-body">

              <h1 id={css.descript}>
                {content.descript}
              </h1>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
