const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Prompts
function promptRoles() {
    inquirer
    .prompt([
        {
        type: "list",
        name: "roles",
        message: "Who would you like to add?",
        choices: ["Engineer?", "Intern?", "All members added"],
        },
    ])
    .then(function (inputs) {
        if (inputs.roles === 'Engineer?') {
        promptEngineer();
        }
        else if (inputs.roles === 'Intern?') {
        promptIntern();
        }
        else if (inputs.roles === 'All members added') {
        generateHTML();
        }
    });
};

// Manager's information
function promptManager() {
    inquirer
    .prompt([
        {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        },
        {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID?",
        },
        {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
        },
        {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        },
    ])
        .then((answers) => {
        const manager = new Manager(answers.managerName , answers.managerId , answers.managerEmail , answers.managerOfficeNumber);
        teamMembers.push(manager);
        promptRoles();
    });
};

// Engineer's information
function promptEngineer() {
    inquirer
    .prompt([
        {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
        },
        {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID?",
        },
        {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
        },
        {
        type: "input",
        name: "engineerGithub",
        message: "Enter the engineer's GitHub username?",
        },
    ])
        .then((answers) => {
        const engineer = new Engineer(answers.engineerName , answers.engineerId , answers.engineerEmail , answers.engineerGithub);
        teamMembers.push(engineer);
        promptRoles();
    });
}

// Intern's Information
function promptIntern() {
    inquirer
    .prompt([
        {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        },
        {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID?",
        },
        {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
        },
        {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
        },
    ])
        .then((answers) => {
        const intern = new Intern(answers.internName , answers.internId , answers.internEmail , answers.internSchool);
        teamMembers.push(intern);
        promptRoles();
    });
};

// Generate HTML
function generateHTML() {

};

promptManager();