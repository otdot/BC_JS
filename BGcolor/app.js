let form = document.querySelector("form");
let button = document.getElementById("button");

let color1 = document.getElementById("color_one");
let color2 = document.getElementById("color_two");
let stylegen = document.querySelector("#stylegen");
let left = document.getElementsByClassName("fas fa-arrow-up fa-2x");

const generate = () => {
  let direction = document.querySelector(
    'input[name="direction"]:checked'
  ).value;
  document.body.style.backgroundImage = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
  document.querySelector(
    "#button"
  ).style.backgroundImage = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
  stylegen.textContent = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
};

form.addEventListener("change", generate);

button.addEventListener("click", function (e) {
  console.log("hello world");
});

// hae valitut radiot
// let directions = document.querySelectorAll('input[name="direction"]');
// let selectedValue;
// for (let sel of directions) {
//   if (sel.checked) selectedValue = sel.value;
// }
