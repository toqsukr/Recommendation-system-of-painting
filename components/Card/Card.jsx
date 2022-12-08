import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { SidePanel } from "../SidePanel/SidePanel";
import {api} from "../information"
import css from "./Card.module.css"
export const Card = ({ updateContent, updatePage, data, title, url, hex }) => {
  const [info, setInfo] = useState(false);
  const deleteCard = () => {
      fetch(`${api.url}/user/collection`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({hex}),
      }).then(() => {

      }, (e) => {
        console.log(e)
      })
      

  }
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body" >
          <div>
            <img width="70%" height="70%" src={url} alt="Изображение" />
          <p
            className="card-text"
            style={{
              marginTop: "10px",
            }}
          >
            <a onClick={() => setInfo(true)}>{title}</a>
          </p>
          <button onClick={deleteCard} type="button" class="btn btn-danger" id={css.delete}>Удалить из коллекции</button>
              {info && (
                <SidePanel onClick={() => setInfo(false)} content={data} />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
