import inquirer from 'inquirer';
import fs from "fs/promises";

let {description, installation, usage, contributing, tests, email, github, license} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project:",
        },
        {
            type: 'input',
            name: 'installation',
            message: "What installations are required:",
        },
        {
            type: 'input',
            name: 'usage',
            message: "What is your project used for:",
        },
        {
            type: 'input',
            name: 'contributing',
            message: "How to contributed:",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Show instructions:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:",
        },
        {
            type: 'input',
            name: 'github',
            message: "Github username:",
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need?',
            choices: ['Mozilla Public License 2.0', 'The Perl License', 'The Artistic License 2.0']
          },
    ])

    
let readmeText = `# Project Description
${generateLicense(license)}
${description}

## Table of Content

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have any questions or would like to reach out to me, send me an email @${email}

Here is my Github profile!
https://github.com/${github}

## License

${generateLicense(license)} This project is under the license of ${(license)}

`
fs.writeFile("README.md", readmeText)


function generateLicense(license){

    if(license === "Mozilla Public License 2.0"){

        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    
    if(license === "The Perl License"){

        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    }
    
    if(license === "The Artistic License 2.0"){

        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    }

    return ""
}