//PART 1

// console.log(typeof null);
// console.log(typeof true);
// console.log(typeof 33);
// console.log(typeof "This is string");
// console.log(typeof x);

//PART 2

// let years = 20;
// let dogYears = 20;
// function converter(years) {
//   dogYears = years * 7;
//   console.log(dogYears);

//   //this is for conversion dog to human
//   years = dogYears * 7;
// }

// converter(years);

//PART 3

let accMoney = 5200;

let money = prompt("How much you want to withdraw?");

function atm(accMoney, money) {
  if (money <= accMoney) {
    console.log("Succesfully Withdrawn, You have left:");
    console.log(accMoney - money);
  } else {
    console.log("Not enough money!");
  }
}

atm(accMoney, money);
