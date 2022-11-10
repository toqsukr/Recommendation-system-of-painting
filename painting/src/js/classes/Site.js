import { templates } from "../modules/templates.mjs";
import { image } from "../modules/img_info.mjs";

export class Site {
  constructor(selector, model) {
    this.$el = document.querySelector(selector);
    this.model = model;
  }

  build() {
    this.$el.innerHTML = "";
    this.model.forEach((block) => {
      block.image = image;
      const toHTML = templates[block.type];
      if (toHTML) {
        block.type === "header"
          ? this.$el.insertAdjacentHTML("beforebegin", toHTML(block))
          : this.$el.insertAdjacentHTML("beforeend", toHTML(block));
      }
    });
  }
}
