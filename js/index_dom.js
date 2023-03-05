
import hamburgerMenu from "./dom/menu_hamburguesa.js";
// uando no hay default se realiza de la siguiente forma
import { digitalClock,alarm } from "./dom/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
})
 