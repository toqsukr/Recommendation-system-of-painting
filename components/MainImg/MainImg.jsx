import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {api} from "../information"
import css from "./MainImg.module.css";
import { Loading } from "../Loading/Loading";
import { postFetch } from "../../utils/Fetch";
export const MainImg = ({ data, loading, updateContent, updateLoading, isUnique, cltnInfo, updateUnique, updateCltnInfo, content, email}) => {
  const [exist, setExist] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isSwipe, setIsSwipe] = useState(false)
  const [delay, setDelay] = useState(true)
  setTimeout(async () => updateLoading(false), 500)

  useEffect(() => {
    if(isSwipe) {
      setIsSwipe(false)
      setTimeout(() => {
          fetch(`${api.url}/user/collection`).then(
              res => res.json()
          ).then(
              obj => {
                  updateCltnInfo(obj)
                  obj.forEach((el) => {
                      if(el.src === content[0].src)   updateUnique(false);
                  })
              })
          }, 500)
      setTimeout(async () => updateLoading(false), 1000)
    }
  })

  function handleLike(e) {
    e.preventDefault();
    if(!delay)  return
    setDelay(false)
    setTimeout(async () => {
      setDelay(true)
    }, 700)
    if(isUnique) {
      setExist(false)
      setSuccess(true)
      updateUnique(false) 
      let newCltnInfo = [JSON.parse(JSON.stringify(cltnInfo))]
      newCltnInfo.push(content[0])
      updateCltnInfo(newCltnInfo)
      postFetch(`${api.url}/user/collection`, 
      {
        src: content[0].src,
        title: content[0].title,
        descript: content[0].descript,
        hex: content[0].hex,
        userID: email,
      }
    ).then().catch(e => console.error(e))
    } else {
      setExist(true)
    }
  }

  function handleSwipe(value) {
    fetch(`${api.url}/user/rcmd`, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
      },
      body:  JSON.stringify({"src": content[0].src}),
    }).then(res => res.json()).then(res => console.log(res))

    setIsSwipe(true)
    setExist(false)
    setSuccess(false)
    updateUnique(true)
    
    updateLoading(true)
    
    updateContent(() => {
      let newContent = []
      data.forEach((el) => {
        if (el && el.hex != content[0].hex && !(el in content))    newContent.push(el);
      })
      return newContent
    })
    postFetch(`${api.url}/user/decision`, {
        "userID": email,
        "imgName": content[0].title,
        "hex": content[0].hex,
        "decision": value,
    }).then(
      res => {
        console.log(res)
      }
    )
  }    
  return (
    <>
    { !loading ? content && (
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
                <p id={css.title}>{content[0].title}</p>
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
          </div>
      </section>
      ) : (<Loading/>)}
    </>
  );
};

