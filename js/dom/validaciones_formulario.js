const d= document;

export default function formValidations(){
    const $form = d.querySelector(".contac-form"),
    $inputs = d.querySelectorAll(".contac-form [required]");

    console.log($inputs);

    $inputs.forEach((input)=>{
        const $span = d.createElement("span");
        $span.id= input.namespaceURI;
        $span.textContent= input.title;
        input.insertAdjacentElement("afterend",$span);
    })
}