// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: 'input',
        message: 'GitHub username?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is you email address?',
        name: 'address',
    }, {
        type: 'input',
        message: 'What is your project tile?',
        name: 'project',
    }, {
        type: 'input',
        message: 'What is a brief description of your project?',
        name: 'briefProject'
    }, {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: [
                'MIT',
                'Apache2.0',
                'GPL3.0',
                'BSD3',
                'None',
        ]              
    }, {
        type: 'input',
        message: 'What should be run to install dependencies?',
        name: 'dependencies'
    }, {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests'
    }, {
        type: 'input',
        message: 'What does your user need to know about using this repo?',
        name: 'usage'
    }, {
        type: 'input',
        message: 'What does user need to know about contributing to repo?',
        name: 'contributing'
    },
])

.then((questions) => 

    fs.writeFile('README.md',
`
# Project Title
${questions.project}
# Description 
${questions.briefProject}
# Table of Contents
1. [Title](Title)
2. [Description](#Description)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [License](#License)
6. [Contributing](#Contributing)
7. [Tests](#Tests)
8. [Questions](#Questions)
# Installation
${questions.dependencies}
# Usage
${questions.usage}
# License
![badge](https://img.shields.io/badge/license-${questions.license}-brightgreen)
## This application is covered by the ${questions.license} license. 
# Contributing
${questions.contributing}
# Tests
${questions.tests}
# Questions
## GitHub User name 
${questions.userName}
### Link to GitHub:
### To access the website
https://github.com/jmnfire/09-Node.js-Professional-README-Generator/settings 
### Email address 
${questions.address}
# Demo
![Demo of README](./assets/image/README.gif)

`, (err) =>
    err ? console.log(err) : console.log('README Created!'))
);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// const init = () => {
//     inquirer.prompt(questions).then((response) => {
//         var generateReadme = readme(response)
//         fs.writeFile('readme.md', generateReadme, (err) =>
//             err ? console.error(err) : console.log('README Created'))
//     }) .catch(err => console.log(err))    
// }

// Function call to initialize app
// init();