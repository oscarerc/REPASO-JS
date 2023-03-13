const d= document;

export default function darkTheme(btn, classDark){
    const $themeBtn =d.querySelector(btn),
    // en css el uso de [] hace referencia a la lista del mismo atributo
    $selectors=d.querySelectorAll("[dat-dark]");

    console.log($selectors); 
}