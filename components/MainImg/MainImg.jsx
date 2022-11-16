import React from "react";
import { Carusel } from "../Carusel/Carusel";
import { recommendation } from "../information";
export const MainImg = () => {
  return <Carusel>{recommendation.carusel}</Carusel>;
};
