// Creating an object and adding stuff

let car = new Object();

car.mark = "Volvo";
car.year = 2000;
car.owner = "Helsinki Fire Department";
car.city = "Helsinki";
car.agee = 2022 - car.year;

console.log(car);
console.log(car.mark, car.owner);

car.color = "silver";
delete car.city;
console.log(car);

car.age = () => 2022 - car.year;
car.motor = function () {
  return car.mark + car.owner;
};

console.log(car.motor());
console.log(car.age());

// Creating object with curly bracers

let fiat = {
  mark: "Mercedez Benz",
  year: 2000,
  owner: "Me",
  city: "Helsinki",
  calcAge: function () {
    this.age = 2022 - this.year;
    return this.age;
  },
};

console.log(fiat);
console.log(fiat.calcAge());

// Creating a class with function and objects after

function Account(savings, loans) {
  this.savings = savings;
  this.loans = loans;
  this.funds = function () {
    return this.savings - this.loans;
  };
}

let MattsAcc = new Account(100, 200);

console.log(MattsAcc);
console.log(MattsAcc.funds());

// Creating a class with class and objects after

class Car {
  constructor(mark, year, owner, city) {
    this.mark = mark;
    this.year = year;
    this.owner = owner;
    this.city = city;
    this.age = function () {
      return 2022 - this.year;
    };
  }
}

let volvo = new Car("Volvo", 1999, "Tampere Fire Department", "Tampere");

console.log(volvo);

console.log(volvo.age());
