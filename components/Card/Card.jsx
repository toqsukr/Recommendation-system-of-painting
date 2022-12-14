import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { SidePanel } from "../SidePanel/SidePanel";
import { api } from "../information"
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import css from "./Card.module.css"
export const Card = ({ updateFullGallery, updateIsDeleted, fullContent, updateContent, data}, key) => {
  const [info, setInfo] = useState(false);
  async function deleteCard() {
    updateIsDeleted(true)
    let newContent = [];
    fullContent.forEach((el) => {
      if (el.hex != data.hex) newContent.push(el);
    });
    updateContent(newContent)
    updateFullGallery(newContent)
    fetch(`${api.url}/user/collection`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({"hex": data.hex}),
    }).then((e) => {
      console.log(e)
    })
  }
  return (
    <>
      <div className="col">
        <div className="card shadow-sm" id={css.card}>
          <div className="card-body"  >
            <div >
              <a href={data.src} target='_blank'>
              <img className="border border-3" id={css.img} key={key} src={data.src} alt="Изображение" />
              </a>
            <p
              className="card-text" 
            >
              <a id={css.title} type="button" onClick={() => setInfo(true)}>{data.title}</a>
            </p>
            <button onClick={deleteCard} type="button" className="btn btn-danger" id={css.delete}>Удалить из коллекции</button>
                {info && (
                  <div className={css.container_info}>
                    <SidePanel onClick={() => setInfo(false)} content={data} />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
