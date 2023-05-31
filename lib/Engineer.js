// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Import the Employee class
const Employee = require("./Employee");

// Engineer class extends Employee class
class Engineer extends Employee {
  // Constructor for Engineer class
  constructor(name, id, email, github) {
    // Call the super constructor of the Employee class
    super(name, id, email);
    this.github = github;
  }

  // Method to get the GitHub username of the engineer
  getGithub() {
    return this.github;
  }

  // Method to get the role of the engineer (overrides getRole() in Employee class)
  getRole() {
    return "Engineer";
  }
}

// Export the Engineer class
module.exports = Engineer;

