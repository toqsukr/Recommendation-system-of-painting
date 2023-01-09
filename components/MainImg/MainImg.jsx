import React, { useEffect, useState} from "react";
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
  const [preLastHex, setPreLastHex] = useState([])
  setTimeout(async () => updateLoading(false), 700)

  useEffect(() => {
    if(isSwipe) {
      setIsSwipe(false)
      setTimeout(async () => {
          await fetch(`${api.url}/user/collection`).then(
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
              <div className={css.alert_container}>
                <div className="alert alert-success alert-dismissible" role="alert">
                  <p id={css.alert_text}>Картина добавлена в коллекцию</p>
                  <img id={css.icon} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA0MCA0MCI+CjxwYXRoIGZpbGw9IiNiYWUwYmQiIGQ9Ik0yMCwzOC41QzkuNzk5LDM4LjUsMS41LDMwLjIwMSwxLjUsMjBTOS43OTksMS41LDIwLDEuNVMzOC41LDkuNzk5LDM4LjUsMjBTMzAuMjAxLDM4LjUsMjAsMzguNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNWU5Yzc2IiBkPSJNMjAsMmM5LjkyNSwwLDE4LDguMDc1LDE4LDE4cy04LjA3NSwxOC0xOCwxOFMyLDI5LjkyNSwyLDIwUzEwLjA3NSwyLDIwLDIgTTIwLDEgQzkuNTA3LDEsMSw5LjUwNywxLDIwczguNTA3LDE5LDE5LDE5czE5LTguNTA3LDE5LTE5UzMwLjQ5MywxLDIwLDFMMjAsMXoiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTEgMjBMMTcgMjYgMzAgMTMiPjwvcGF0aD4KPC9zdmc+"/>
                  <button id={css.close} onClick={() => setSuccess(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>   
              </div>))                
          :
            (
              <div className={css.alert_container}>
                <div className="alert alert-warning alert-dismissible" role="alert">   
                  <p id={css.alert_text}>Картина уже есть в вашей коллекции</p>
                  <img id={css.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACh0lEQVR4nGNgGAVEggvbU6aCMAM9wYk1MQEf7vR9/nhv4peTq2ND6WLpqlWhzDcPFh77/27xfxC+sS//+P56exaaW3xmY1zVj2ez/8IsBrHPbEyqoqml2xZ78D08VXMdZikMPzhZdXv3wgBhmll8fkvK3L+vF6JYCsJ/3yz8f2F72iyaWHp4WbD2qyvtL9AtheFXV9peHV4bpk91iy/vztqGy1IYvronewtVLT29IS7k071JX2EW/Hm98P+T69PBGMSGiX9+OOX7mfWxUVSxdH+9PcvtgyUnkH327MbM/2YOvmAMYiPL3TpYeOrMTGNWii0+szG+9uezOX+Jtfjn8zn/zm9OaqTI0h2zQ4Uena65iR6X+CwG4Uen6+4dXRQoRrbFF7amLfj3BjP7ELL439tF/y/tSJtPlqVHl0UYvr7a8RJb6iVkMQi/udH19uSqSEuSLb62N2c7rmxDjMXg7LU7ZxdJlp5cGxMNyhqUWvz10bQfZzZGxxNl6apVoWy3j5acxldQEGsxOHsdLjm7baIHO0GLz26IbwVlCXyGvbw9839geCQYg9j41P5+Nf//+S2JrXgt3bPMV/zx2bo7hIpGUvHj03UP9i8OlMFp8YWtacuwZR9seMWiuv8rFtcRpfbf28X/L+/MXILV0mOrIs1eX+96Q4xBHx7Ohcfxx0dziLL83c3ed8dWRdpjWHx9X/5OUoJv5eI6MCZFz9W9efv+/2dghFt6cm10ypeHU39QO27R8bcn03+dXh+XDs8+d4+UnqO1pf+h+M6RsoubZvpwMZzbmNTy+9U8ulj6H1SXv5r3/9ympE6Gs5tSMu4cLdt491jZBnrgO0fLNp7bnJZJsEAZdgAAHR2X6wjW50kAAAAASUVORK5CYII="/>
                  <button id={css.close} onClick={() => setExist(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
            )
          }
          <div
            className="container container-lg container-md container-sm"
            id={css.mainimg}
          >
            <div className="carousel-inner">
              <div id={css.container} className='container container-sm container-md'>
                <div type="button" className={css.like_container} onClick={handleLike}>
                  <a type="button" onClick={handleLike}>
                    <img className={`border border-4 ${css.like}`} src={content[0].src}/>
                  </a>
                </div>
                    <button
                    className="carousel-control-prev"
                    id={css.mainbtnleft}
                    type="button"
                    onClick={() =>{
                      handleSwipe(-1)
                    }
                  } 
                    >
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeklEQVR4nO2ZW4hNYRTHf8ckl4OYBhnNA1EiMSWXEPGqpMwTXkQeqPEml1cP8kAUNcqUFw/yQim5TJEHiqLcokQujftlNHIbffXf+prO2bvjrL3P/rJ/9dXp7NX6f2vv9a2z9jpQUFBQEMNKoAu4D/QBA4arD7gKrANKpMQ0oMd443GrO40gFgNvJdAL7AHmAmVjnUnAFuCjtNxn0ycRBXEKGE36rJXeY0unPV4QqeXtIEZKsx/Dgx2lUxZPImK+dF1BMaFLDt2ZyJLj0r0FTLRw+EAO55At64Gv0n4CTK7X4Wc5yzKtItqAO1alOKrpjWKW9J+FHsh46X8JOZASsF/6l0MO5Iy0vwGLQg7ktle1mkMOpAW4Kf1DoR/2BdJ/Hnogzd57StCBbJP+jXod/ZSjJrJlGHAE+CX9jnod9spRK9my1EupTRYOL1jdkRqZLV3XtJqwXQ4vki3jrA65XzU+yOkasmO6ND9ZOt0qp681HPhXyrrTcasNWA3ck+YJ6+btnJdiQxLsNwDfDcZBd4EJGOMcvpLAzgTbzoQB3PuY9RK4BuxIYdT0l+Wq6z8SutExyu3fwExyyj7d2afK6WoclN0xcspQ4Lo2eTLGboq6gv408tyKqUodF8zGGLvTstlNjunwDu+MKjbLZPNCTzK3dGujbmQzPOEtL+sWpybKGmkO6HBXYrOuXyHntGs44ErtqirD6HcNmlbWTKfXwrTGlOLD5JwScFabvVShhZmnaw8JgBZVJ7fhXYOujbL+ryNtVngtzELv+yVp/PuUNnu934529VrRRN2NP4OhCThfoet9lNCb5ZIRwAHgjZ7MUWBsozdVUPA/8wdFzgR0YTyMcAAAAABJRU5ErkJggg=="/>
                    </button>
                      <button
                    className="carousel-control-next"
                    id={css.mainbtnright}
                    type="button"
                    onClick={() =>{
                      handleSwipe(1)
                    }
                  } 
                    >
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChUlEQVR4nO2ZTYhOURjHf0MThqF3ehuNogwLRA0Ln6kxaykLspiVBQsKS8LOQiiKwmIUC6uxoCzMjJSFpKZMYaYxChn5DEO+BtOp/1untzv3feuee95zdX91Nvec/s/z3HvPOc95DuTk5NSCGcBp4D0wCpwHCmSMqcAt4F9ZGwaayBDH5PgroA1YCjzUs5NkhA7gD/AbWGs936BARsgARX0F4/Chsr5Zev6dwKkDbsjZPmBKWX+b+oYInH1y9C0wL6L/lPrPEjArgR/AX2BzRH8D8EGBrCJQZgJP5KTZN6LYpf67BMwlOTkATJ9kTGnp3U6gbJODX4Elk4xpt/aUegKkFfgsJ3fGjOvWmMMESD1wXw5ejRm3EBjX3tFMgBxXEM8rJIJnNO4iAdJupSDrYsbN1q9nluRlBEYz8Fpv+WCVG2RUM4vDx5g2CtxTmmNSG+cpyE050huRgpTTCfyKCaba9hiY6zKQPVYK0pJwAy1UaPOBLcAj2bziKghzGPok0a34Y7FsmrnmhAMS7MEvBWtOOaFHgmYn98kK2R10JfhGglHpeZpstL7IbheC4xI0RQWfTAPOWfYTJ52lpbBW7JX9B1kPpMnVpK91IGtk/2WWAykC/bJvktDMBjIg289clFxrGch12f5ZIdsOPpA64ITs3876ZC/+L6vWctl/kVToi4Qa8c8Ca8J3JRUblJCp3/qkE/hmrVqJc70LEjuCX7pkt99VFabDOh2aooIvVsuuKck6o0+i3VWc113RkMadyiJdbBrha8Ac/JVkn7oWXm8F8w44qmsC1yWbFh2kSiXZ/aRU8+11UOaptl1O+1fepLtzU3cac+z8GHAH2JFmADk5OWSTCQIHBIvH/7mJAAAAAElFTkSuQmCC"/>
                    </button>
              </div>  
                <p id={css.title}>{content[0].title}</p>
            </div>
          </div>
      </section>
      ) : (<Loading/>)}
    </>
  );
};

