// N TASK

function palindromCheck(input: string): boolean {
  const reverseInput = input.toLowerCase().split("").reverse().join("");
  if (input.toLowerCase() == reverseInput) return true;

  return false;
}

console.log(palindromCheck("mom"));
console.log(palindromCheck("non"));
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
