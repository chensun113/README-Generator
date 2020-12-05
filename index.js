// array of questions for user
const gm = require("./utils/generateMarkdown.js");

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'des',
      message: 'Enter description please',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Enter installation instructions',
    },
    {
      type: 'input',
      name: 'useage',
      message: 'Enter usage information',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select which License you would like to use:',
        choices: ['MIT', 'Apache2.0', 'GNUv2.0', 'GNUv3.0', 'ISC']
    },
      {
        type: 'input',
        name: 'contribution',
        message: 'a criteria for others to contribute to this project'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email address.',
    },
  ]);



promptUser()
  .then((data) => writeFileAsync('README.md', gm(data)))
  .then(() => console.log('Successfully wrote README.md'))
  .catch((err) => console.error(err));

