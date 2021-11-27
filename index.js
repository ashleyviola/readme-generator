// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Enter Your Project Name',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter your project name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter Projects Description'
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Enter Installation Instructions'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select License Type',
            choices:['GNU GPLv3, MIT, ISC, Rust, Apache License 2.0']
        },
        {
            type: 'input',
            name: 'usage',
            message:'Enter Usage Instructions'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter Contribution Instructions'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter Test Instructions'
        },
        {
            type: 'input',
            name: 'github',
            message:'Enter Your GitHub Username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Contact Email Address'
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
questions();