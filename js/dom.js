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
