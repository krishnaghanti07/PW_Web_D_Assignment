// Create a calculator object with methods
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  // calculate method to perform the operation
  calculate: function (operation, a, b) {
    if (operation === "add") {
      return this.add(a, b);
    } else if (operation === "subtract") {
      return this.subtract(a, b);
    } else if (operation === "multiply") {
      return this.multiply(a, b);
    } else {
      return "Invalid operation";
    }
  }
};

// Use call to perform an addition operation
console.log(calculator.calculate.call(calculator, "add", 10, 5));
// Output: 15

// Use apply to perform a multiplication operation with arguments as an array
console.log(calculator.calculate.apply(calculator, ["multiply", 4, 3]));
// Output: 12

// Create a discountCalculator object with a discount percentage and method
const discountCalculator = {
  discountPercentage: 10,
  applyDiscount: function (price) {
    const discount = (price * this.discountPercentage) / 100;
    return price - discount;
  }
};

// Use bind to create a new function calculateDiscount bound to the discountCalculator object
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Use the new function to calculate the discount on a price
console.log(calculateDiscount(200)); // Output: 180
