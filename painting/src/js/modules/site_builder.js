import { templates } from "./templates.mjs";
import { img } from "./img_info.mjs";

const model = [
  { type: "header", value: ["Моя коллекция", "?"] },
  { type: "carusel", value: ["Изображение"] },
  { type: "footer", value: ["© 2022", "Features", "Resources", "About"] },
];

const $site = document.querySelector("#site");

model.forEach((block) => {
  let html = "";
  block.img = img;
  if (block.type === "header") {
    html = templates.header_recomendation(block);
    $site.insertAdjacentHTML("beforebegin", html);
  } else if (block.type === "carusel") {
    html = templates.carusel(block);
    $site.insertAdjacentHTML("beforeend", html);
  } else if (block.type === "footer") {
    html = templates.footer(block);
    $site.insertAdjacentHTML("beforeend", html);
  }
});
