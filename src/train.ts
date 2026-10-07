//MIT TASK Q
function missingNumber(nums: number[]): number {
  const n = nums.length;

  // 0 dan n gacha bo'lgan sonlar yig'indisi: n * (n + 1) / 2
  const expectedSum = (n * (n + 1)) / 2;

  // Array dagi haqiqiy yig'indi
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  // Tushib qolgan son
  return expectedSum - actualSum;
}
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

/* Validation:
Frontend validation
Backend validation
Database validation
*/
// // MIT TASK- R
// function calculate(str: string): number {
//   return str
//     .split("+") // "+" bo'yicha ajratish
//     .map((num) => Number(num)) // String → Number
//     .reduce((sum, num) => sum + num, 0); // Yig'indi
// }

// console.log(calculate("1+21+3"));

// MIT TASK Q
// function hasProperty(obj: Record<string, any>, key: string): boolean {
//   return Object.prototype.hasOwnProperty.call(obj, key);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "chevrolet"));
/**
 * Traditional FD  => SSR => EJS

 * Modern FD > REACT > SPA


 */

// P task
// function objectToArray(obj: object): any[][] {
//   return Object.entries(obj);
// }

// //Object.entries() — object ni kalit-qiymat juftliklari arrayiga aylantiradi.Va u built in method
// console.log(objectToArray({ a: 10, b: 20 }));

// // O task
// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([1, "10", { son: 2 }, true, 3, 4, false]));

/* Project Standards:
- Logging standards
- Naming standards
function, method, variable => CAMEL   goHome
class => PASCAL          Class
folder => KEBAB 
css => SNAKE    button_id
*/
/* Traditional API
 * Rest API
 * GraphQL API
 */
// N TASK

// function palindromCheck(input: string): boolean {
//   const reverseInput = input.toLowerCase().split("").reverse().join("");
//   if (input.toLowerCase() == reverseInput) return true;

//   return false;
// }

// console.log(palindromCheck("mom"));
// console.log(palindromCheck("non"));
// // MIT TASK M
// function getSquareNumbers(arr: number[]) {
//   return arr.map((num: number) => ({
//     raqam: num,
//     kvadrati: num * num,
//   }));
// }

// // ===== TEST =====
// console.log(getSquareNumbers([1, 2, 3]));
// // [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]
