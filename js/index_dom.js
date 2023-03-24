
import networkStatus from "./dom/deteccion_red.js";
import scrollTopButton from "./dom/btn_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import webcam from "./dom/deteccion_webcam.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
// uando no hay default se realiza de la siguiente forma
import { digitalClock,alarm } from "./dom/reloj.js";
import { shortcuts,moveBall } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    // aqui llamamos las funciones y relacionamos las variables
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Nov 23,2023 03:23:19","FELIZ CUMPLEAÑOS");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=Pqz1rYuqqiM" target="_blank" rel="noopener">ver video </a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/Pqz1rYuqqiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("g-maps","(min-width:1024px)",`<a href="https://goo.gl/maps/dhnE7ZQHjtjw6KZt7" target="_blank" rel="noopener">ver mapa </a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2365784580224!2d-75.60444738602722!3d1.613404361123322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e244e175b2b6a6f%3A0x3a439372c8674d5!2sCra.%205b%20%234-3%2C%20Florencia%2C%20Caquet%C3%A1!5e0!3m2!1ses!2sco!4v1678739532439!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webcam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
});


// d.addEventListener("keydown",(e)=>{
//     shortcuts(e);
//     moveBall(e, ".ball" , ".stage")
// });

// DEBEMOS SACAR KLA FUNCION DELD ARK DEBIDO A QUE ESTA DENTRO DE SU 
// FLUJOO HACE USO DEL DOMCONTENLOADED Y NO PODEMOS LLAMARLA ANIDADAS
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();