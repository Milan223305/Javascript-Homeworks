/*

HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert

*/

// function tellStory() {
//   let name = prompt("Enter name");
//   let mood = prompt("Enter mood");
//   let activity = prompt("Enter activity");

//   console.log(
//     `This is ${name} is a nice person. Today they are ${mood}. They are ${activity} all day.`
//   );
// }

// tellStory();

/*
HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

*/

// function sumer() {
//   let i;
//   let num = [];
//   let sum = 0;
//   for (i = 0; i < 5; i++) {
//     num[i] = parseFloat(prompt("Enter number:"));
//     sum += num[i];
//   }
//   console.log(sum);
// }

// sumer();

// HOMEWORK #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

// function arrstrings() {
//   const arr = ["Hello", "there", "students", "of", "SEDC", "!"];
//   const result = arr.join(" ");
//   console.log(result);
// }

// arrstrings();

// Homework #4
// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} \n`);
//   } else {
//     console.log(`${i} `);
//   }
// }

// Homework #5
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

// function sumer() {
//   let arr = [3, 5, 6, 8, 11];
//   let max = 0;
//   let min = 9999;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   sum = max + min;
//   console.log(sum);
// }

// sumer();

// Homework #6
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

function students() {
  let first = ["Bob", "Jill"];
  let last = ["Gregory", "Wurtz"];
  let brojac = 0;

  for (let i = 0; i < first.length; i++) {
    brojac++;
    for (let j = 0; j < last.length; j++) {
      console.log(`${brojac}. ${first[i]} ${last[i]}`);
    }
  }
}

students();
