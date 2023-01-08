import React, { useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {api} from "../information"
import css from "./MainImg.module.css";
import { Loading } from "../Loading/Loading";
import { postFetch } from "../../utils/Fetch";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
export const MainImg = ({ data, loading, updateContent, updateLoading, isUnique, cltnInfo, updateUnique, updateCltnInfo, content, email}) => {
  const [exist, setExist] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isSwipe, setIsSwipe] = useState(false)
  const [delay, setDelay] = useState(true)
  const [preLastHex, setPreLastHex] = useState([])
  setTimeout(async () => updateLoading(false), 700)

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
    updateLoading(true)
    setIsSwipe(true)
    setExist(false)
    setSuccess(false)
    updateUnique(true)

    fetch(`${api.url}/user/rcmd`, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
      },
      body:  JSON.stringify({"src": content[0].src}),
    }).then(res => res.json()).then(res => console.log(res))

    updateContent(() => {
      let newContent = []
      data.forEach((el) => {
        el && el.hex != content[0].hex && !(preLastHex.includes(el.hex)) ? newContent.push(el) : console.log(el);
      })
      console.log("NEW content")
      console.log(newContent)
      return newContent
    })

    setPreLastHex(() => {
      const newPreLastHex = []
      preLastHex.forEach((el) => newPreLastHex.push(el))
      newPreLastHex.push(content[0].hex)
      return newPreLastHex
    })

    console.log(preLastHex)
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
            (success && (
              <SwitchTransition>
                <CSSTransition in={success} timeout={500} classNames={{ ...css }}>
                  <div className={css.alert_container}>
                    <div className="alert alert-success alert-dismissible" role="alert">
                      <p id={css.alert_text}>Картина добавлена в коллекцию</p>
                      <img id={css.icon} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA0MCA0MCI+CjxwYXRoIGZpbGw9IiNiYWUwYmQiIGQ9Ik0yMCwzOC41QzkuNzk5LDM4LjUsMS41LDMwLjIwMSwxLjUsMjBTOS43OTksMS41LDIwLDEuNVMzOC41LDkuNzk5LDM4LjUsMjBTMzAuMjAxLDM4LjUsMjAsMzguNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNWU5Yzc2IiBkPSJNMjAsMmM5LjkyNSwwLDE4LDguMDc1LDE4LDE4cy04LjA3NSwxOC0xOCwxOFMyLDI5LjkyNSwyLDIwUzEwLjA3NSwyLDIwLDIgTTIwLDEgQzkuNTA3LDEsMSw5LjUwNywxLDIwczguNTA3LDE5LDE5LDE5czE5LTguNTA3LDE5LTE5UzMwLjQ5MywxLDIwLDFMMjAsMXoiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTEgMjBMMTcgMjYgMzAgMTMiPjwvcGF0aD4KPC9zdmc+"/>
                      <button id={css.close} onClick={() => setSuccess(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>   
                  </div>           
                </CSSTransition>
              </SwitchTransition>))

          :
            (
              <SwitchTransition>
                <CSSTransition in={exist} timeout={500} classNames={{ ...css }}>
                  <div className={css.alert_container}>
                    <div className="alert alert-warning alert-dismissible" role="alert">   
                      <p id={css.alert_text}>Картина уже есть в вашей коллекции</p>
                      <img id={css.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACh0lEQVR4nGNgGAVEggvbU6aCMAM9wYk1MQEf7vR9/nhv4peTq2ND6WLpqlWhzDcPFh77/27xfxC+sS//+P56exaaW3xmY1zVj2ez/8IsBrHPbEyqoqml2xZ78D08VXMdZikMPzhZdXv3wgBhmll8fkvK3L+vF6JYCsJ/3yz8f2F72iyaWHp4WbD2qyvtL9AtheFXV9peHV4bpk91iy/vztqGy1IYvronewtVLT29IS7k071JX2EW/Hm98P+T69PBGMSGiX9+OOX7mfWxUVSxdH+9PcvtgyUnkH327MbM/2YOvmAMYiPL3TpYeOrMTGNWii0+szG+9uezOX+Jtfjn8zn/zm9OaqTI0h2zQ4Uena65iR6X+CwG4Uen6+4dXRQoRrbFF7amLfj3BjP7ELL439tF/y/tSJtPlqVHl0UYvr7a8RJb6iVkMQi/udH19uSqSEuSLb62N2c7rmxDjMXg7LU7ZxdJlp5cGxMNyhqUWvz10bQfZzZGxxNl6apVoWy3j5acxldQEGsxOHsdLjm7baIHO0GLz26IbwVlCXyGvbw9839geCQYg9j41P5+Nf//+S2JrXgt3bPMV/zx2bo7hIpGUvHj03UP9i8OlMFp8YWtacuwZR9seMWiuv8rFtcRpfbf28X/L+/MXILV0mOrIs1eX+96Q4xBHx7Ohcfxx0dziLL83c3ed8dWRdpjWHx9X/5OUoJv5eI6MCZFz9W9efv+/2dghFt6cm10ypeHU39QO27R8bcn03+dXh+XDs8+d4+UnqO1pf+h+M6RsoubZvpwMZzbmNTy+9U8ulj6H1SXv5r3/9ympE6Gs5tSMu4cLdt491jZBnrgO0fLNp7bnJZJsEAZdgAAHR2X6wjW50kAAAAASUVORK5CYII="/>
                      <button id={css.close} onClick={() => setExist(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            )
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

