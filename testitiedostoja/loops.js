// Loop Assignments (Don’t use arrays)

// 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

// let num = 1
// while (num < 100) {
//     if (num % 2 !== 0) console.log(num);
// }

// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 …

// let num = 0;
// while (num <= 48) {
//   console.log(num, 100 - num);
//   num += 2;
// }

// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

// do {
//   let distance = prompt("tell me the distance");
//   Number.parseInt(distance, 10);
//   let time = prompt("tell me the time");
//   Number.parseInt(time, 10);
//   alert(`Your average speed is ${distance / time}`);
// } while (distance !== 0);

// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.
let times = 0;
for (let i = 0; i < 20; i++) {
  let num = prompt("tell me a number");
  if (num % 2 === 0) times++;
}
console.log(times);

// 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.
// let timez = 0;
// let sum = 0;
// let number = prompt("gimme a number");
// while (number !== "0") {
//   timez++;
//   number = Number.parseInt(number, 10);
//   sum += number;
//   number = prompt("gimme a number");
// }

// alert(`The average of your number is ${sum / timez}`);

// 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

// let summa = 0;
// let timess = 0;
// do {
//   let numm = prompt("tell me a num");
//   numm = Number.parseInt(numm, 10);
//   summa += numm;
//   timess++;
// } while (timess < 2);
// alert(`The average of your numbers is ${summa / timess}`);

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

// let arr = [];

// do {
//   let nummer = prompt("gimme a number");
//   arr.push(Number.parseInt(nummer, 10));
//   alert(arr, typeof arr);
//   goOn = prompt("Do you want to continue giving numbers (Y/N)?");
//   goOn = goOn.toUpperCase();
// } while (goOn !== "N");

// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//   total += arr[i];
// }

// alert(`Total is ${total} The average of the number is ${total / arr.length}`);

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

// const arr1 = [];
// let numberamount = prompt("How many numbers you would like to add?");
// do {
//   let numbers = prompt("Add a number");
//   arr1.push(Number.parseInt(numbers, 10));
// } while (arr1.length < numberamount);

// alert(Math.min(...arr1));

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

// let arr2 = [];
// for (let i = 0; i < 3; i++) {
//   const numero = prompt("Give me a number");
//   arr2.push(Number.parseInt(numero, 10));
// }
// let max1 = Math.max(...arr2);
// alert(max1);
// arr2.splice(arr2.indexOf(max1), 1);
// let max2 = Math.max(...arr2);
// alert(max2);

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

// let arr3 = [];
// for (let i = 0; i < 5; i++) {
//   const nummero = prompt("Give me a number");
//   arr3.push(Number.parseInt(nummero, 10));
// }
// let totall = 0;
// for (let i = 0; i < arr3.length; i++) {
//   totall += arr3[i];
// }

// alert(totall);
// alert(totall / arr3.length);
// alert(Math.max(...arr3));
// alert(Math.min(...arr3));
