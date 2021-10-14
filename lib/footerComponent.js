import { createElement } from "./elements.js";
export function createFooterComponent() {
  const footerElement = createElement(
    "footer",
    {
      className: "footer",
    },
    ["BEST FOOTER 🦩"]
  );
  return footerElement;
}
