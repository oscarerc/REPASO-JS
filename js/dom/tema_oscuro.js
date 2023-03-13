const d= document,
ls=localStorage;

export default function darkTheme(btn, classDark){
    const $themeBtn =d.querySelector(btn),
    // en css el uso de [] hace referencia a la lista del mismo atributo
    $selectors=d.querySelectorAll("[data-dark]");

    console.log($selectors); 

    let moon="🌙",
    sun="☀️";

    const lightMode=()=>{
        $selectors.forEach((el)=>{
            el.classList.remove(classDark);
            $themeBtn.textContent=moon;
            // verificamos y agregamos la variables al ls
            ls.setItem("theme","light");
        })
    }

    const darkMode=()=>{
        $selectors.forEach((el)=>{
            el.classList.add(classDark);
            $themeBtn.textContent=sun;
            // verificamos y agregamos la variables al ls
            ls.setItem("theme","dark");
        })
    }

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent);
            if($themeBtn.textContent===moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    });


    d.addEventListener("DOMContentLoaded", (e)=>{
        // validamos si existe una variables de tipo locals
        if(ls.getItem("theme")=== null)ls.setItem("theme","light");
        if(ls.getItem("theme")==="light")lightMode();
        if(ls.getItem("theme")==="dark")darkMode();

    });
}