import view from "../views/menu.html";

let menuAbierto = true;

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const botonMenu = divElement.querySelector(".boton-menu");
  const mySidenav = divElement.querySelector("#mySidenav");
  const main = document.querySelector("#main");

  const openNav = () => {
    if (!menuAbierto) {
      // mySidenav.style.width="250px";
      mySidenav.classList.add("open");
      botonMenu.classList.add("change");
      // main.style.marginLeft = "250px";
    } else {
      // mySidenav.style.width="0";
      mySidenav.classList.remove("open");
      botonMenu.classList.remove("change");
      // main.style.marginLeft = "0px";
    }

    menuAbierto = !menuAbierto;
  };

  window.addEventListener("hashchange", () => {
    mySidenav.style.width = "0";
    botonMenu.classList.remove("change");
    menuAbierto = true;
  });

  const botonMenuExterno = divElement.querySelector("#boton-menu-externo");
  botonMenuExterno.addEventListener("click", openNav);
  const botonMenuInterno = divElement.querySelector("#boton-menu-interno");
  botonMenuInterno.addEventListener("click", openNav);

  openNav();

  return divElement;
};
