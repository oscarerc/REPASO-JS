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

// const $figure = document.createElement("figure"),
// $img = document.createElement("Img"),
// $figcaption= element.createElemen("figcaption"),
// $figcaptionText = document.createTextNode("Animals"),
// $cards = document.querySelector("card");

// // AGREGAR UN HIJO
// $img.setAttribute("src","https://placeimg.com/200/200/animals");
// $img.setAttribute("alt","Animals");
// $figure.classList("card");

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// // CON EL INNERHTML ES MAS FACIL
// // EJEMPLO

// const $figure2= document.createElement("figure");
// $figure.innerHTML=`
// <img src="https://placeimg.com/200/200/peopl3" alt="people"`;


// // TEMPLATES
// // MODELO A SEGUIR

// const $cardss = document.querySelector("cards"),
// // ACEDIENDO AL CONTENIDO DEL TEMPLATE
// $template= document.getElementById("template-card").content,
// $fragment =document.createDocumentFragment(),
// cardContent=[
//     {
//     title:"Tecnologia",
//     img:"https://placeimg.com/200/200tech"
//     }
//     {
//      title:"Animals",
//     img:"https://placeimg.com/200/200/animals"
//     }
// ]
// // se puede agregar con un foreach

// // METODOS PARA AGREGAR ELEMENTOS

// CONST $card = DOCUMENT.querySelector("cards"),
// $newCard= DOCUMENT.createElemen("figure");
// //clonar elelmentos recibe boolena para ver si clina el contenido
// $cloneCards=$card.cloneNode(true);


// $newCard.innerHTML=`
// <img src="">
// `;
// $newCard.classList.add("card");

// // REEMPLAZAR HIJO
// $newCard.replaceChild($newCard, $card.cildren[2])

// // OPENCHILD INSERTAR HIJO
// //insertar despues en este caso al inicio
// $cards.insertBefore($newCard, $cards.firtsElementChild);
// //eliminar elemento solo necesita el nodo que queremos eliminar
// $cards.removeChild($cards.lastElementChild);
// //clonar elelementos
// document.body.appendChild($cloneCards);

//NUEVOS METODOS

/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");
$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); */
//$cards.prepend($newCard); //hijo primero
//$cards.append($newCard); //hermano anterior
//$cards.before($newCard); //ultiomo hijo
//$cards.after($newCard); //hermano posterior
/*

📝 Los Eventos

    👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

    👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
    
    👉 Hay 3 maneras de definir los Eventos en JS : 
//1️⃣ COMO ATRIBUTO DEL HTML
    
   //👀 Muy importante: 
   /*👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
    *👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
   */
     function holaMundo(){
         alert('Holaaa Mundo')
         console.log(event)  //👈 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.
     }    
       //👉 type.- es el tipo de evento q se desencadeno
       //👉 target.- es el elemento que origino el evento
       
       //👉 Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho elemento y
        // los q estan en null son eventos q no tienen definida dicha función en dichos eventos. En cam

        //2️⃣ COMO MANEJADOR SEMÁNTICO
    
   //👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo
   //👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
     const $eventoSemantico = document.getElementById('evento-semantico');
     $eventoSemantico.onclick = holaMundo //👈 no le ponemos () a la función xq sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se ejecuta.
    
//    //👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function
    $eventoSemantico.onclick = function(e){  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
         alert(`Hola Manejador de Evento Semántico`)
        console.log(e)
        console.log(event)
      }


 //3️⃣ COMO MANEJADOR MÚLTIPLE
   
//    //👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
    const $eventoMultiple = document.getElementById('evento-multiple')
//    //👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
//    // 1° Nombre de evento
//    // 2° Función q se va a ejecutar, pero sin parentesis
//    $eventoMultiple.addEventListener('click', holaMundo)
    
//    //👇 tmb podemos trabajar con una arrow function
   $eventoMultiple.addEventListener('click', (e) => { //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
       alert(`Hola Manejador de Evento Múltiple`)
       console.log(e)
       console.log(e.type)
       console.log(e.target)
       console.log(event)
    } )
  //📝NOTA:
   //👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta en dicho Evento   
   //👉 Una misma función nos puede servir para desencadenar eventos en diferentes elementos
   //👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta, cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del DOM q se estamos manejando
   //👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento semántico sólo va poder ejecutar una función.
   //👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
   