function getWeatherCondition(temperature) {
    const weatherCondition = temperature > 30 ? "Hot" : "Moderate";
    console.log(`The weather is: ${weatherCondition}`);
  }
  
  // Example usage:
  const temperature = 32;
  getWeatherCondition(temperature);  // Output: The weather is: Hot
  