const d= document;

export default function darkTheme(btn, classDark){
    const $themeBtn =d.querySelector(btn),
    // en css el uso de [] hace referencia a la lista del mismo atributo
    $selectors=d.querySelectorAll("[data-dark]");

    console.log($selectors); 

    let moon="🌙",
    sun="☀️";

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent);
            if($themeBtn.textContent===moon){
                $selectors.forEach((el)=>{
                    el.classList.add(classDark);
                    $themeBtn.textContent=sun;
                })
            }else{
                $selectors.forEach((el)=>{
                    el.classList.remove(classDark);
                    $themeBtn.textContent=moon;
                })
            }
        }
    })
}