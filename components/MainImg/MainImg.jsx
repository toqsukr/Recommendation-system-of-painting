import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {api} from "../information"
import css from "./MainImg.module.css";
export const MainImg = ({content, swipeImage}) => {
  // const img = new Image()
  // img.onload;
  // img.src = content.src
  // const [param, setParam] = useState(img)     
  // const updateParam = (img) => setParam(img)
  const [delay, setDelay] = useState(true)
  function handleClick(e) {
    e.preventDefault();
    fetch(`${api.url}/user/rcmd`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: content.src,
    }).then((obj) => {
      console.log(obj)
    }, (e) => {
      console.log(e)
    })
  }
  return (
    <section id={css.section} className="container container-lg container-md container-sm container-centre py-5 text-center" >
          <div
            className="container container-lg container-md container-sm"
            id={css.mainimg}
          >
            <div className="carousel-inner">
            <div id={css.container} className='container container-sm container-md container-lg'>
                  <a type="button">
                    
                  <img
                    className='border border-4'
                    id={css.like}
                    src={content.src}
                    alt="Изображение"
                  />
                  </a>
              <button
                onClick={async () =>
                  {
                    if(!delay)  return
                    setDelay(false)
                    setTimeout(async () => {
                      setDelay(true)
                      swipeImage((p) => p === 3 ? p : p + 1)
                    },
                   700)}
                }
                className="carousel-control-prev"
                id={css.mainbtnleft}
                type="button"
              ></button>
              <button
                onClick={async () =>
                  {
                    if(!delay)  return
                    setDelay(false)
                    setTimeout(async () => {
                      setDelay(true)
                      swipeImage((p) => p === 3 ? p : p + 1)
                    },
                   700)}
                }
                className="carousel-control-next"
                id={css.mainbtnright}
                type="button"
              ></button>
                </div>
            </div>
              <p id={css.title}>{content.title}</p>
          </div>
    </section>
    );
};
