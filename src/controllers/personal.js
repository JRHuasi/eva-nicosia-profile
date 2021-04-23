import view from "../views/personal.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  return divElement;
};
