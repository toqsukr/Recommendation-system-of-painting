import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { SidePanel } from "../SidePanel/SidePanel";
import { api } from "../information"
import css from "./Card.module.css"
export const Card = ({fullContent, updateContent, updatePage, data}, key) => {
  const [info, setInfo] = useState(false);
  const [isHidden, setIsHidden] = useState(false)
  async function deleteCard() {
      setIsHidden(true)
      updateContent(() => {
        let newContent = [];
        fullContent.forEach((el) => {
          if (el.hex != data.hex) newContent.push(el);
        });
        updatePage(0);
        return newContent;
      });
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
      {!isHidden &&
      (<div className="col">
        <div className="card shadow-sm" id={css.card}>
          <div className="card-body"  >
            <div >
              <a href={data.src} target='_blank'>
              <img className="border border-3" id={css.img} key={data.hex} src={data.src} alt="Изображение" />
              </a>
            <p
              className="card-text"
              
            >
              <a id={css.title} type="button" onClick={() => setInfo(true)}>{data.title}</a>
            </p>
            <button onClick={deleteCard} type="button" className="btn btn-danger" id={css.delete}>Удалить из коллекции</button>
                {info && (
                  <SidePanel onClick={() => setInfo(false)} content={data} />
                )}
            </div>
          </div>
        </div>
      </div>)
      }
        
    </>
  );
};
