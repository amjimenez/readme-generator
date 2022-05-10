const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a project a title',
        default: '',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a prjoect description',
        default: '',
    },
    {
      type: 'input',
      name: 'contents',
      message: 'Enter table of contents (optional)',
      default: '',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
        default: '',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
        default: '',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Enter credits',
      default: '',
  },
    {
      type: 'input',
      name: 'features',
      message: 'Enter features',
      default: '',
    }, 
    {
      type: 'input',
      name: 'contribute',
      message: 'Enter contribution guidelines',
      default: '',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
        default: '',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license',
      choices: [
        'MIT',
        'Apache',
        'BSD',
      ],
    },
    {
      type: 'input',
      name: 'badges',
      message: 'Enter badges',
      default: '',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter GitHub username',
      default: '',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter email address',
      default: '',
    },
];



// Initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
      let readme = md.generateMarkdown(answers);
      writeToFile('README.md', readme);
  })
  .catch((error) => {
    console.log(error)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

init(); 