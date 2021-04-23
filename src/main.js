import { router } from "./router/index.routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/estilos.scss";

if (window.location.hash == "") window.location.href = "#/";

router(window.location.hash);

window.addEventListener("hashchange", () => router(window.location.hash));
