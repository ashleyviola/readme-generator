const inquirer = require('inquirer');

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
            name: 'installation',
            message: 'Enter Installation Instructions'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select License for Project. Only choose one.',
            choices: ['Apache 2.0','Eclipse Public License','GNU GPL v3','BSD 3-Clause', 'Common Development', 'MIT License', 'Mozilla Public License']
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
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message:'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptQuestions()
    .then(projectData => {
        return generateMarkdown(projectData);
    })
    .then(readMe => {
        return writeFile(readMe);
    });
