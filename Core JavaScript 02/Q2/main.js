const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

console.log("Sorted ages:", ages);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);

// Find the median age
let medianAge;
const middle = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
  medianAge = (ages[middle - 1] + ages[middle]) / 2;
} else {
  medianAge = ages[middle];
}

console.log("Median Age:", medianAge);

// Find the average age
const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;

console.log("Average Age:", averageAge);

// Find the range of the ages
const range = maxAge - minAge;

console.log("Age Range:", range);

// Compare (min - average) and (max - average) using abs()
const minAvgDifference = Math.abs(minAge - averageAge);
const maxAvgDifference = Math.abs(maxAge - averageAge);

console.log("Difference between min and average:", minAvgDifference);
console.log("Difference between max and average:", maxAvgDifference);
