function checkNumber(num) {
    return num > 0 ? "positive" : (num < 0 ? "negative" : "zero");
  }
  
  // Example usage:
  const number = -5;
  console.log(checkNumber(number));  // Output: negative
  