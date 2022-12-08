import React, { useState, useEffect } from "react";
import { HeadRcm } from "../components/Header/HeadRcm/HeadRcm";
import { Footer } from "../components/Footer/Footer";
import { MainImg } from "../components/MainImg/MainImg";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { recommendation, footer } from "../components/information";
export default function myRecommendation() {
  const [info, setInfo] = useState(false);
  const [about, setAbout] = useState(false);
  return (
    <div>
      <title>Рекомендации</title>
      <HeadRcm onClick={() => setInfo(true)} />
      <MainImg />
      {about && (
          <SidePanel content={footer.about}
          onClick={() => setAbout(false)}
          />
        )}
      {info && (
        <SidePanel
        content={recommendation.info}
        onClick={() => setInfo(false)}
          />
      )}
      <Footer onClick={() => setAbout(true)}/>
    </div>
  );
}
