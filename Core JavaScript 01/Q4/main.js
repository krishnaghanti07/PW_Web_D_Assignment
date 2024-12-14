let x = 10;
let y = 20;

let result = (x++, y++, x + y);  // The expressions x++ and y++ are executed, then x + y is evaluated.
console.log(result);  // Output: 32, since x is incremented to 11, y to 21, and then 11 + 21 = 32
console.log(x);  // Output: 11
console.log(y);  // Output: 21
