// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Import the Employee class
const Employee = require("./Employee");

// Intern class extends Employee class
class Intern extends Employee {
  // Constructor for Intern class
  constructor(name, id, email, school) {
    // Call the super constructor of the Employee class
    super(name, id, email);
    this.school = school;
  }

  // Method to get the school of the intern
  getSchool() {
    return this.school;
  }

  // Method to get the role of the intern (overrides getRole() in Employee class)
  getRole() {
    return "Intern";
  }
}

// Export the Intern class
module.exports = Intern;

