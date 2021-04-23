import view from "../views/cursos.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  return divElement;
};
