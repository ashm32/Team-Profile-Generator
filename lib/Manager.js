// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Import the Employee class
const Employee = require("./Employee");

// Manager class extends Employee class
class Manager extends Employee {
  // Constructor for Manager class
  constructor(name, id, email, officeNumber) {
    // Call the super constructor of the Employee class
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Method to get the office number of the manager
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Method to get the role of the manager (overrides getRole() in Employee class)
  getRole() {
    return "Manager";
  }
}

// Export the Manager class
module.exports = Manager;
