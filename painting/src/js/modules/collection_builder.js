import { templates } from "./templates.mjs";

const model = [
  { type: "header", value: ["Рекомендации", "Девочка с персиками", "Поиск"] },
  { type: "card", value: ["Вид", "Редактировать", "9 минут"] },
  { type: "footer", value: ["© 2022", "Features", "Resources", "About"] },
];

const $site = document.querySelector("#site");

model.forEach((block) => {
  let html = "";
  if (block.type === "header") {
    html = templates.header_collection(block);
    $site.insertAdjacentHTML("beforebegin", html);
  } else if (block.type === "card") {
    html = templates.card(block);
    $site.insertAdjacentHTML("beforeend", html);
  } else if (block.type === "footer") {
    html = templates.footer(block);
    $site.insertAdjacentHTML("beforeend", html);
  }
});
