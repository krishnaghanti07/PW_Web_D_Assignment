// Create a Set to store unique numbers
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Create a Map to associate each number with its square
const numberSquares = new Map();

// Iterate through the Set and populate the Map with each number and its square
uniqueNumbers.forEach((number) => {
  numberSquares.set(number, number * number);
});

// Print unique numbers
console.log("Unique Numbers:");
uniqueNumbers.forEach((number) => {
  console.log(number);
});

// Print the corresponding squares
console.log("\nCorresponding Squares:");
numberSquares.forEach((square, number) => {
  console.log(`${number}: ${square}`);
});
