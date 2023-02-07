// METODOS PRARA TRAER ELEMENTOS NODOS Y SELECTORES
// recibe un selector
// DEVUELVEN COLECCIONES
console.log(document.getElementById("menu"));

// DEVUELVEN NODOS
console.log(document.querySelector("#menu"));
console.log(document.querySelector(".card"));
console.log(document.querySelector(".card")[2]);
// TRAER TODO LOS ELEMNTOS DE UN TIPO 
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));


// CREAR ELELEMNTOS DINAMICAMENTE EN JS

const $figure = document.createElement("figure"),
$img = document.createElement("Img"),
$figcaption= element.createElemen("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector("card");

// AGREGAR UN HIJO
$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

// CON EL INNERHTML ES MAS FACIL
// EJEMPLO

const $figure2= document.createElement("figure");
$figure.innerHTML=`
<img src="https://placeimg.com/200/200/peopl3" alt="people"`;
