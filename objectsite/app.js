let searchCars = document.querySelector("#searchCars");
let submitButton = document.querySelector("#addcar");
let salesPrices = document.querySelector("#salesPrices");

class Car {
  constructor(licence_plate, maker, model, owner, price, color) {
    this.licence_plate = licence_plate;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
    this.salePrice = function () {
      if (this.price > 20000) return (this.price *= 0.75);
      else if (this.price >= 15000) return (this.price *= 0.8);
      else if (this.price < 15000) return (this.price *= 0.9);
    };
  }
}

carsArray = [];

// alenna hinnat

salesPrices.addEventListener("click", () => {
  let tableRow = `<tr>
  <th>licence_place</th>
  <th>maker</th>
  <th>model</th>
  <th>owner</th>
  <th>price</th>
  <th>color</th>
</tr>`;
  for (let car of carsArray) {
    console.log(car);
    car.salePrice();
    tableRow +=
      "<tr>" +
      "<td>" +
      car.licence_plate +
      "</td>" +
      "<td>" +
      car.maker +
      "</td>" +
      "<td>" +
      car.model +
      "</td>" +
      "<td>" +
      car.owner +
      "</td>" +
      "<td>" +
      car.price +
      "</td>" +
      "<td>" +
      car.color +
      "</td>" +
      "</tr>";
  }
  document.querySelector(".tableData").innerHTML = tableRow;
});

// etsi auto

searchCars.addEventListener("click", (e) => {
  console.log(carsArray);
  e.preventDefault();
  let input = document.querySelector("#searchInput").value;
  let results = document.querySelector("#searchResults");
  tempArray = carsArray.filter((car) => car.licence_plate == input);
  results.textContent = `Car with a licence plate ${tempArray[0].licence_plate} is a ${tempArray[0].maker} is owned by ${tempArray[0].owner}`;
});

// Tämä tuo objectin taulukkoon

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
