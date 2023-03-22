const d = document;

export default function draw(btn, slector) {
  const getWinner = (selector) => {};

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}
