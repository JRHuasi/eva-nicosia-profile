import farmacia from "../views/exp-farmacia.html";
import cajera from "../views/exp-cajera.html";
import secretaria from "../views/exp-secretaria.html";

export default (tarea) => {
  const divElement = document.createElement("div");
  switch (tarea) {
    case "farmacia":
      divElement.innerHTML = farmacia;
      break;
    case "secretaria":
      divElement.innerHTML = secretaria;
      break;
    case "cajera":
      divElement.innerHTML = cajera;
      break;
  }
  return divElement;
};
