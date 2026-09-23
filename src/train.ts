// MIT TASK M
function getSquareNumbers(arr: number[]) {
  return arr.map((num: number) => ({
    raqam: num,
    kvadrati: num * num,
  }));
}

// ===== TEST =====
console.log(getSquareNumbers([1, 2, 3]));
// [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]
