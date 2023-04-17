const d = document;

export default function formValidations() {
  const $form = d.querySelector(".contac-form"),
    $inputs = d.querySelectorAll(".contac-form [required]");

  //   console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contac-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contac-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        console.log(!regex.exec($input.value), pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.remove("none")
          : d.getElementById($input.name).classList.add("none");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.remove("none")
          : d.getElementById($input.name).classList.add("none");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("enviando formulario");

    // variables que alamcenen referencias del loader y response
    const $loader = d.querySelector(".contac-form-loader"),
      $response = d.querySelector(".contac-form-response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");

      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
