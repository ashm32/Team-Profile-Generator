# Team Profile Generator

This is a Node.js command-line application that generates an HTML webpage to display summaries for each person on a software engineering team. The application follows the principles of Test-Driven Development (TDD), ensuring that every part of the code passes the provided tests.

## Description

The Team Profile Generator allows you to input information about team members, such as managers, engineers, and interns, and generates an organized and visually appealing HTML webpage that showcases the team structure and individual member details. The generated webpage provides a quick summary of each team member's name, role, employee ID, email address, and role-specific information.

The application utilizes Node.js and various NPM packages to facilitate the command-line interface, input prompts, and HTML generation. It follows the principles of Test-Driven Development to ensure the accuracy and reliability of the code.

## Installation

To use the Team Profile Generator, follow these steps:

1. Ensure that you have Node.js installed on your machine.
2. Clone the repository to your local machine.
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Install the required dependencies by running the following command:
   ```
   npm install
   ```
5. Once the dependencies are installed, you can run the application using the following command:
   ```
   node --experimental-modules index.mjs
   ```
   
## Usage

1. Launch the application by running the command `node --experimental-modules index.mjs` in the terminal or command prompt.
2. The application will prompt you to enter information about the team manager, starting with the manager's name, employee ID, email address, and office number.
3. After entering the manager's details, you will be presented with a menu that allows you to choose the next action:
   - **Add an engineer**: Enter the engineer's name, employee ID, email address, and GitHub username.
   - **Add an intern**: Enter the intern's name, employee ID, email address, and school name.
   - **Finish building the team**: Exit the application and generate the HTML webpage.
4. You can continue adding engineers and interns until you choose to finish building the team.
5. Once you finish building the team, the application will generate an HTML webpage named `team.html` in the `output` directory.
6. Open the `team.html` file in a web browser to view the team profile.

## Tests

The Team Profile Generator includes a comprehensive suite of tests to ensure the correctness of the code. These tests cover various functionalities and scenarios to validate the application's behaviour.

To run the tests, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the project's root directory.
3. Run the following command to execute the tests:
   ```
   npm run test
   ```

The test results will be displayed in the terminal, indicating whether each test passed or failed. The application should only be considered complete when all tests pass successfully.

## Contributing

Contributions to the Team Profile Generator are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue on the GitHub repository.

## License

The Team Profile Generator is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or need further assistance, please feel free to contact me.

- Email: [ash.m32@icloud.com](mailto:your-ash.m32@icloud.com)
- GitHub: [ashm32](https://github.com/ashm32)
