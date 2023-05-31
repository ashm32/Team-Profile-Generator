// TODO: Write code to define and export the Employee class
class Employee {
  // Constructor for Employee class
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Method to get the name of the employee
  getName() {
    return this.name;
  }

  // Method to get the ID of the employee
  getId() {
    return this.id;
  }

  // Method to get the email of the employee
  getEmail() {
    return this.email;
  }

  // Method to get the role of the employee
  getRole() {
    return "Employee";
  }
}

// Export the Employee class
module.exports = Employee;
