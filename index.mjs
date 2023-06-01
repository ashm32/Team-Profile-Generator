// Import required modules and classes
import inquirer from "inquirer";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import path from "path";
import fs from "fs";
import render from "./src/page-template.js";

// Function to handle the menu options
async function menu(teamMembers, outputPath) {
  let addAnother = true;
  while (addAnother) {
    // Prompt for adding an engineer or intern or finish building the team
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
      },
    ]);

    switch (choice) {
      case "Add an engineer":
        // Prompt for the engineer's information
        const engineerData = await promptEngineer();
        const engineer = new Engineer(
          engineerData.name,
          engineerData.id,
          engineerData.email,
          engineerData.github
        );
        teamMembers.push(engineer); // Add the engineer to the team members array
        break;

      case "Add an intern":
        // Prompt for the intern's information
        const internData = await promptIntern();
        const intern = new Intern(
          internData.name,
          internData.id,
          internData.email,
          internData.school
        );
        teamMembers.push(intern); // Add the intern to the team members array
        break;

      case "Finish building the team":
        addAnother = false; // Set addAnother to false to exit the loop
        break;
    }

    if (addAnother) {
      console.log("Team member added successfully!\n");
    }
  }

  // Generate the HTML using the render function and the team members array
  const html = render(teamMembers);

  // Create the output directory if it doesn't exist
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  // Write the generated HTML to the team.html file
  fs.writeFileSync(outputPath, html);

  console.log("Team.html file generated successfully!");
}

// Function to prompt for the manager's information
function promptManager() {
  console.log("Enter the team manager's information:");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Manager's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Manager's email address:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Manager's office number:",
    },
  ]);
}

// Function to prompt for an engineer's information
function promptEngineer() {
  console.log("Enter an engineer's information:");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Engineer's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Engineer's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Engineer's email address:",
    },
    {
      type: "input",
      name: "github",
      message: "Engineer's GitHub username:",
    },
  ]);
}

// Function to prompt for an intern's information
function promptIntern() {
  console.log("Enter an intern's information:");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Intern's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Intern's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Intern's email address:",
    },
    {
      type: "input",
      name: "school",
      message: "Intern's school:",
    },
  ]);
}

// Entry point of the application
function init() {
  // Initialise an empty array to store the team members
  const teamMembers = [];

  // Prompt for the manager's information
  promptManager()
    .then((managerData) => {
      const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
      );
      teamMembers.push(manager); // Add the manager to the team members array

      // Define the output file path
      const OUTPUT_DIR = path.resolve(process.cwd(), "output");
      const outputPath = path.join(OUTPUT_DIR, "team.html");

      // Call the menu function to prompt for adding more team members or finish building the team
      menu(teamMembers, outputPath);
    })
    .catch((err) => {
      console.error("An error occurred:", err);
    });
}

// Call the init function to start the application
init();
