// global variables
const fs = require('fs');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var allEmployees = [];

// prompt for initial manager questions
const startApplication = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter your team manager's name (Required)`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter your team manager's name`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter your team manager's employee ID (Required)`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`Please enter your team manager's employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter your team manager's email (Required)`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter your team manager's email!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `Enter your team manager's office number (Required)`,
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log(`Please enter your team manager's office number!`);
                    return false;
                }
            }
        },
    ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            allEmployees.push(manager);

            addEmployee();
        });
};

// prompt for adding additional employees
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Select if you would like to add an engineer or intern',
            choices: ['Engineer', 'Intern', 'I would not like to enter another employee.']
        }
    ])
        .then((data) => {
            // if the user selects engineer then run the engineer function
            if (data.employeeType === 'Engineer') {
                addEngineer();
            }
            // if the user selects intern then run the intern function 
            else if (data.employeeType === 'Intern') {
                addIntern();
            }
            // else create the page 
            else {
                createPage();
            }
        });
};

// prompt for adding engineer's information
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter your engineer's name (Required)`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter your engineer's name`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter your engineer's employee ID (Required)`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter your engineer's employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter your engineer's email (Required)`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter your engineer's email!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: `Enter your engineer's github username (Required)`,
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log(`Please enter your engineer's github username!`);
                    return false;
                }
            }
        }
    ])
        // create a new engineer, push it to the all employees array and ask the user if they want to add another employee
        .then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            allEmployees.push(engineer);

            addEmployee();
        })
}

// prompt to add an intern
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter your intern's name (Required)`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter your intern's name`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter your intern's employee ID (Required)`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter your intern's employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter your intern's email (Required)`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter your intern's email!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `Enter your intern's school (Required)`,
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log(`Please enter your intern's school!`);
                    return false;
                }
            }
        }
    ])
        // add a new intern, push it to the all employees array and then ask the user if they want to add another employee
        .then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            allEmployees.push(intern);

            addEmployee();
        })
}

const createPage = () => {
    // write file to dist folder using the generatePage function
    fs.writeFile('./dist/index.html', generatePage(allEmployees), err => {
        var obj = {
            ok: true,
            message: 'File created!'
        }

        if (err) {
            console.log(err);
            return;
        }

        // log the obj if true and then run copy style
        console.log(obj);
        copyStyle();
    })
};

const copyStyle = () => {
    // copy the style page and add it to the dist folder
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        var obj = {
            ok: true,
            message: 'Style sheet copied successfully!'
        }

        if (err) {
            console.log(err);
            return;
        }

        console.log(obj);
    });
}

// run the initial function
startApplication();