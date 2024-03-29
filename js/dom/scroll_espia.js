const d= document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb =(entries)=>{
        // console.log("entries", entries);

        entries.forEach((entry)=>{
            // cada entry
            //  console.log("entry", entry);

            const id= entry.target.getAttribute("id");
            // console.log(id);

            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        });
    }

    const observer = new IntersectionObserver(cb,{
        // porcentaje a 4 lados en px 
        // rootMargin:"-250px",
        // elementos porcentaje de vista
         threshold:0.5
    });

    $sections.forEach(el => {
        observer.observe(el);
    });
}