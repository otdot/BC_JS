const calculate = () => {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value) / 100;
  let bodymass = document.querySelector("#bodymass");
  let totalweight = (weight / height ** 2).toFixed(1);
  let text = `Your bodymass index is: ${totalweight} kg/m2 `;
  let color;

  if (totalweight < 18.6) {
    text += ` - weigth is underweight`;
    color = "warning";
  } else if (totalweight > 18.5 && totalweight < 25) {
    text += `- a normal weight`;
    color = "normal";
  } else if (totalweight > 25 && totalweight < 30) {
    text += ` - weight is overweight`;
    color = "danger";
  } else {
    text += ` - weight is overweight`;
    color = "danger";
  }

  bodymass.textContent = text;
  bodymass.classList.add(color);
};
