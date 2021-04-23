import view from "../views/contacto.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const enviarConsulta = divElement.querySelector("#enviarConsulta");
  enviarConsulta.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("nombre", divElement.querySelector("#nombre"));
    formData.append("empresa", divElement.querySelector("#empresa"));
    formData.append("email", divElement.querySelector("#email"));
    formData.append("celular", divElement.querySelector("#celular"));
    formData.append("consulta", divElement.querySelector("#consulta"));
    const request = new XMLHttpRequest();
    request.open("POST", "https://agrocoins.com.ar/php/enviarConsulta.php");
    request.send(formData);
  });

  return divElement;
};
