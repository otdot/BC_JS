let searchCars = document.querySelector("#searchCars");
let submitButton = document.querySelector("#addcar");

class Car {
  constructor(licence_plate, maker, model, owner, price, color) {
    this.licence_plate = licence_plate;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

carsArray = [];

// Tämä tuo objectin 

searchCars.addEventListener("click", (e) => {
  console.log(carsArray);
  e.preventDefault();
  let input = document.querySelector("#searchInput").value;
  let results = document.querySelector("#searchResults");
  tempArray = carsArray.filter((car) => car.licence_plate === input);
  console.log(tempArray);
  results.textContent = ` ${tempArray.licence_plate}`;
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let licence_plate = document.querySelector("#licence_plate").value;
  let maker = document.querySelector("#maker").value;
  let model = document.querySelector("#model").value;
  let owner = document.querySelector("#owner").value;
  let price = document.querySelector("#price").value;
  let color = document.querySelector("#color").value;
  let newCar = new Car(licence_plate, maker, model, owner, price, color);
  carsArray.push(newCar);
  let tableRow =
    "<tr>" +
    "<td>" +
    newCar.licence_plate +
    "</td>" +
    "<td>" +
    newCar.maker +
    "</td>" +
    "<td>" +
    newCar.model +
    "</td>" +
    "<td>" +
    newCar.owner +
    "</td>" +
    "<td>" +
    newCar.price +
    "</td>" +
    "<td>" +
    newCar.color +
    "</td>" +
    "</tr>";
  document.querySelector(".tableData").innerHTML += tableRow;
});
