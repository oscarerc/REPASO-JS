
import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
// uando no hay default se realiza de la siguiente forma
import { digitalClock,alarm } from "./dom/reloj.js";
import { shortcuts,moveBall } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    // aqui llamamos las funciones y relacionamos las variables
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Nov 23,2023 03:23:19","FELIZ CUMPLEAÑOS");
});


d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e, ".ball" , ".stage")
});