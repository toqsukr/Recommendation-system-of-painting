import React from "react";
import { Carusel } from "../Carusel/Carusel";
import { recommendation } from "../information";
export const MainImg = () => {
  return (
    <Carusel
      height={recommendation.carusel.img.height}
      width={recommendation.carusel.img.width}
      path={recommendation.carusel.img.path}
    />
  );
};
