import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export const Card = ({ title, url }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body">
          <div>
            <img width="80%" height="80%" src={url} alt="Изображение" />
          </div>
          <p className="card-text">
            <font>{title}</font>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <font>Описание</font>
              </button>
              <button href="#" type="button" className="btn-close"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
