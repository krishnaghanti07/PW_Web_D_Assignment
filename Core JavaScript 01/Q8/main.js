function calculateSum(n) {
    let sum = 0;
    let i = 1;
  
    // Using do-while loop to calculate the sum
    do {
      sum += i;
      i++;
    } while (i <= n);
  
    console.log(`The sum of numbers from 1 to ${n} is: ${sum}`);
  }
  
  // Example usage:
  const number = 5;
  calculateSum(number);  // Output: The sum of numbers from 1 to 5 is: 15
  