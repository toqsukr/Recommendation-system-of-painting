import React, { useState, useEffect } from "react";
import { HeadRcm } from "../components/Header/HeadRcm/HeadRcm";
import { Footer } from "../components/Footer/Footer";
import { MainImg } from "../components/MainImg/MainImg";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { footer, api } from "../components/information";
export default function myRecommendation({data}) {
  const [content, setContent] = useState(data)
  const [info, setInfo] = useState(false);
  const [about, setAbout] = useState(false);
  const [count, setCount] = useState(0)
  const swipeImage = (p) => setCount(p)
  return (
    <div>
      <title>Рекомендации</title>
      <HeadRcm onClick={() => setInfo(true)} />
      <MainImg swipeImage={swipeImage} content={content[count]} />
      {about && (
          <SidePanel content={footer.about}
          onClick={() => setAbout(false)}
          />
        )}
      {info && (
        <SidePanel
        content={content[count]}
        onClick={() => setInfo(false)}
          />
      )}
      <Footer onClick={() => setAbout(true)}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const obj = await fetch(`${api.url}/user/rcmd`).then(
    (res) => res.json()
  );
  return {
    props: {
      data: obj,
    },
  };
}