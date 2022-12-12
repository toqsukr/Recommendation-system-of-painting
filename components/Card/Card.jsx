import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { SidePanel } from "../SidePanel/SidePanel";
import {api} from "../information"
import css from "./Card.module.css"
export const Card = ({ updateContent, updatePage, data, title, url, hex }, key) => {
  const [info, setInfo] = useState(false);
  const deleteCard = () => {
      fetch(`${api.url}/user/collection`, {
        method: "DELETE",
        body: hex,
      }).then((obj) => {
         console.log(obj)
      }, (e) => {
        console.log(e)
      })
  }
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body" >
          <div>
            <a href={url} target='_blank'>

            <img className="border border-3" id={css.img} key={key} width="70%" height="70%" src={url} alt="Изображение" />
            </a>
          <p
            className="card-text"
            
          >
            <a id={css.title} type="button" onClick={() => setInfo(true)}>{title}</a>
          </p>
          <button onClick={deleteCard} type="button" className="btn btn-danger" id={css.delete}>Удалить из коллекции</button>
              {info && (
                <SidePanel onClick={() => setInfo(false)} content={data} />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
