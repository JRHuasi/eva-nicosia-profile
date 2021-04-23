import view from "../views/capacidades.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  return divElement;
};
