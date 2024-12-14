function login(username, password) {
    if (username === "admin" && password === "12345") {
      console.log("Login successful");
    } else {
      console.log("Invalid credentials");
    }
  }
  
  // Example usage:
  const username = "admin";
  const password = "12345";
  login(username, password);  // Output: Login successful
  