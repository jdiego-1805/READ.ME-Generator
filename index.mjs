import inquirer from 'inquirer';
import fs from "fs/promises";
import { generate } from 'rxjs';

let {description, tableOfContent, installation, usage, contributing, tests, questions, size} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'description',
            messages: "Write a description of your project:",
        },
        {
            type: 'input',
            name: 'tableOfContent',
            messages: "Write a table of content for your project:",
        },
        {
            type: 'input',
            name: 'installation',
            messages: "What installations are required:",
        },
        {
            type: 'input',
            name: 'usage',
            messages: "What is your project used for:",
        },
        {
            type: 'input',
            name: 'contributing',
            messages: "Who contributed:",
        },
        {
            type: 'input',
            name: 'tests',
            messages: "Show some test runs:",
        },
        {
            type: 'input',
            name: 'questions',
            messages: "Any questions:",
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need?',
            choices: ['Mozilla Public License 2.0', 'The Perl License', 'The Artistic License 2.0'],
            filter(val) {
              return val.toLowerCase();
            },
          },
    ])

    
let readmeText = `# Project Description

${description}

## Table of Content

${tableOfContent}

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## Questions

${questions}

## License

${generateLicense(license)}

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