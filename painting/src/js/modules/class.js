import { templates } from "./templates.mjs";
import { img } from "./img_info.mjs";

export class Site {
  constructor(slctr, model) {
    this.slctr = slctr;
    this.model = model;
  }

  build() {
    const $site = document.querySelector(this.slctr);
    this.model.forEach((block) => {
      block.img = img;
      const toHTML = templates[block.type];
      if (toHTML) {
        block.type === "header"
          ? $site.insertAdjacentHTML("beforebegin", toHTML(block))
          : $site.insertAdjacentHTML("beforeend", toHTML(block));
      }
    });
  }
}
