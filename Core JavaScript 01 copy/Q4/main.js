// Create two person objects
const person1 = {
    name: "John",
    age: 30
  };
  
  const person2 = {
    name: "Jane",
    age: 25
  };
  
  // Function to introduce a person
  function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
  
  // Use the call method to make person2 introduce itself
  introduce.call(person2);  // Output: Hello, I'm Jane, and I'm 25 years old.
  