import { pages } from "../controllers/index.pages";

const menu = document.getElementById("menu");
const header = document.getElementById("header");
const contenedor = document.getElementById("contenedor");
const footer = document.getElementById("footer");
const experiencias = document.getElementById("experiencias");

export const router = (route) => {
  menu.appendChild(pages.menu());
  contenedor.innerHTML = "";

  switch (route) {
    case "#/home":
      contenedor.appendChild(pages.home());
      break;
    case "#/personal":
      contenedor.appendChild(pages.personal());
      break;
    case "#/cursos":
      contenedor.appendChild(pages.cursos());
      break;
    case "#/exp-farmacia":
      contenedor.appendChild(pages.experiencias("farmacia"));
      break;
    case "#/exp-secretaria":
      contenedor.appendChild(pages.experiencias("secretaria"));
      break;
    case "#/exp-cajera":
      contenedor.appendChild(pages.experiencias("cajera"));
      break;
    case "#/capacidades":
      contenedor.appendChild(pages.capacidades());
      break;
    case "#/contacto":
      contenedor.appendChild(pages.contacto());
      break;
    case "#/null":
      break;

    default:
      break;
  }
};
