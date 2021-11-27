// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${data.license}
## Description 
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation 
${data.installation}

## License
${data.license}
${data.licenseDescription}

## Usage
${data.usage}

## Contributors 
${data.contribution}

## Tests 
${data.tests}

## Questions
Have any questions? Check out my [GitHub Accout](https://github.com/${data.github}) 
or [Email Me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
