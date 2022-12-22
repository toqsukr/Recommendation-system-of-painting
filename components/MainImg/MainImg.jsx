import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {api} from "../information"
import css from "./MainImg.module.css";
import { postFetch } from "../../utils/Fetch";
export const MainImg = ({ updateContent, content, email}) => {
  const [exist, setExist] = useState(false)
  const [success, setSuccess] = useState(false)
  const [delay, setDelay] = useState(true)
  const [update, setUpadte] = useState(false)

  const img = new window.Image()
  img.src = content[0].src
  img.onload
  useEffect(() => {
    if(update) {
      fetch(`${api.url}/user/rcmd`).then(
        res => {
          return res.json()
      }).then(res => {
          if(res[0].hex != content[0].hex)  updateContent(res)
          setUpadte(false)
      })
    }
  })
  function handleLike(e) {
    e.preventDefault();
    if(!delay)  return
    setDelay(false)
    setTimeout(async () => {
      setDelay(true)
    }, 700)
    postFetch(`${api.url}/user/collection`, 
      {
        src: content[0].src,
        title: content[0].title,
        descript: content[0].descript,
        hex: content[0].hex,
        userID: email,
      }
    ).then((obj) => {
      if(obj["success"]) {
        setExist(false)
        setSuccess(true) 
      }
      else    setExist(true)
    }, (e) => {
      console.log(e)
    })
  }

  function handleSwipe(value) {
    setExist(false)
    setSuccess(false)
    if(!delay)  return
    setDelay(false)
    setTimeout(async () => {
      setDelay(true)
    }, 700)
    postFetch(`${api.url}/user/decision`, {
        "userID": email,
        "imgName": content[0].title,
        "hex": content[0].hex,
        "decision": value,
    }).then(
        res => {
          setUpadte(true)
        }
    )
  }    
  return (
    <>
    {content && (
    <section id={css.section} className="container container-md container-sm container-centre py-5 text-center" >
              {!exist 
              ?
                success && (<div className="alert alert-success alert-dismissible" role="alert">
                  <div>Картина добавлена в коллекцию</div>
                      <button onClick={() => setSuccess(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>)
              :
                (<div className="alert alert-warning alert-dismissible" role="alert">
                <div>Картина уже есть в вашей коллекции</div>
                    <button onClick={() => setExist(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>)
              }
          <div
            className="container container-lg container-md container-sm"
            id={css.mainimg}
          >
            <div className="carousel-inner">
                  <div id={css.container} className='container container-sm container-md'>
                <input id={css.like} className='border border-4' src={content[0].src} type="image" onClick={handleLike}/>
              <button
              onClick={() => {
                handleSwipe(-1)
              }
            }
            className="carousel-control-prev"
            id={css.mainbtnleft}
            type="button"
            ></button>
              <button
              onClick={() => {
                handleSwipe(1)
              }
            }
            className="carousel-control-next"
            id={css.mainbtnright}
            type="button"
            ></button>
                </div>
                
                </div>
                <p id={css.title}>{content[0].title}</p>
                </div>
                </section>
                )}
                
                </>
    );
};

