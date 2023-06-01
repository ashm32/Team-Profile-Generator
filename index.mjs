const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

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
