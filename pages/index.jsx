import React, { useState, useEffect } from "react";
import { HeadRcm } from "../components/Header/HeadRcm/HeadRcm";
import { Footer } from "../components/Footer/Footer";
import { MainImg } from "../components/MainImg/MainImg";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { recommendation } from "../components/information";

export default function myRecommendation() {
  let [info, setInfo] = useState(false);

  return (
    <div>
      <title>Рекомендации</title>
      <HeadRcm onClick={() => setInfo(true)} />
      <MainImg />
      {info && (
        <SidePanel
          content={recommendation.info}
          onClick={() => setInfo(false)}
        />
      )}
      <Footer />
    </div>
  );
}
