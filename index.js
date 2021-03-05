const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util')

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser =() =>{
return inquirer.prompt([
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
            type: "list",
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
    ]);
};
  
const generateREADME = (answers) => 
    `
    ${answers.title}
    ${answers.description}
    ${answers.installation}
    ${answers.usage}
    ${answers.license}
    ${answers.contributors}
    ${answers.tests}
    ${answers.githubinfo}
    ${answers.email}

    `
    
;

const init = () => {
    promptUser()
    .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
