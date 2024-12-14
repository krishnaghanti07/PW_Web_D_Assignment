// Create a Map to store contact information
const contacts = new Map();

// Function to add a contact to the map
function addContact(name, age, email, location) {
  contacts.set(name, { age, email, location });
}

// Function to retrieve contact details by name
function getContactByName(name) {
  const contact = contacts.get(name);
  if (contact) {
    console.log(`Contact details for ${name}:`);
    console.log(`Age: ${contact.age}`);
    console.log(`Email: ${contact.email}`);
    console.log(`Location: ${contact.location}`);
  } else {
    console.log(`No contact found for ${name}.`);
  }
}

// Example usage
addContact('John Doe', 30, 'john.doe@example.com', 'New York');
addContact('Jane Smith', 25, 'jane.smith@example.com', 'Los Angeles');

// Retrieve contact details
getContactByName('John Doe');
// Output:
// Contact details for John Doe:
// Age: 30
// Email: john.doe@example.com
// Location: New York

getContactByName('Jane Smith');
// Output:
// Contact details for Jane Smith:
// Age: 25
// Email: jane.smith@example.com
// Location: Los Angeles

getContactByName('Alice');
// Output:
// No contact found for Alice.
