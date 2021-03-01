const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of this project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a short description for this project.",
            name: "description"
        },
        {
            type: "input",
            message: "What is the installation needed for this application?",
            name: "installation"
        },
        {
            type: "input",
            message: "How would someone try to use this application?",
            name: "usage"
        },
        {
            type: "input",
            message: "What license was used for this application?",
            name: "license",
            choices: ["Appache license 2.0", "IBM", "MIT", "ICS", "None"]
        },
        {
            type: "input",
            message: "Did you have any contributors?",
            name: "contributors"
        },
        {
            type: "input",
            message: "What are the test instructions for this application?",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your github username for contact?",
            name: "githubinfo"
        },
        {
            type: "input",
            message: "What is your email for questions?",
            name: "email"
        },

    ])