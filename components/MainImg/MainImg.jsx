import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {api} from "../information"
import css from "./MainImg.module.css";
export const MainImg = ({content, swipeImage}) => {
  // const img = Image()
  // img.onload;
  // img.src = content.src
  // const [param, setParam] = useState(img)     
  // const updateParam = (img) => setParam(img)
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
    <section className="container-centre py-5 text-center">
      <div id={css.frame}>
        <section id="carouselExampleControls" className="carousel slide">
          <div
            id={css.control}
            className="container container-lg container-md container-sm"
          >
            <div className="carousel-inner">
                <form className='container container-sm container-md container-lg' id={css.mainimg} onClick={handleClick}>
                  <input
                    type="image"
                    // height={img.height/10}
                    // width={img.width/10}
                    id={css.like}
                    src={content.src}
                    alt="Изображение"
                  />
                </form>
              <button
                onClick={() =>
                  swipeImage((p) =>
                    p === 3 ? p : p + 1
                  )
                }
                className="carousel-control-prev"
                id={css.mainbtnleft}
                type="button"
              ></button>
              <button
                onClick={() =>
                  swipeImage((p) =>
                    p === 3 ? p : p + 1
                  )
                }
                className="carousel-control-next"
                id={css.mainbtnright}
                type="button"
              ></button>
            </div>
              <p id={css.title}>{content.title}</p>
          </div>
        </section>
      </div>
    </section>
    );
};
