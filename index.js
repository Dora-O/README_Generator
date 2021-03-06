const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
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
    ])
}

const generateREADME = (answers, badge) =>
    `
# ${answers.title}
# ${licenseBadge(answers)}
### Created by ${answers.githubinfo} Github user.
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [License](#llicense)
* [Questions](#questions)
### Description
${answers.description}
### Installation
${answers.installation}
### Usage
${answers.usage}
    
### Licenses
${licenseBadge(answers)}
    
### Contributors
${answers.contributors}
    
### Tests
${answers.tests}
### Contact Info
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

let licenseBadge = (answers) =>{
if(answers.license === 'Appache license 2.0') {
   return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
}else if (answers.license === 'IBM'){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
}else if(answers.license === 'MIT'){
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}else if(answers.license === 'ICS'){
   return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
}else if(answers.license === 'None'){
        return 'None'}
}