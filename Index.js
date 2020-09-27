const fs = require('fs');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var allEmployees = [];

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
            if (data.employeeType === 'Engineer') {
                addEngineer();
            } else if (data.employeeType === 'Intern') {
                addIntern();
            } else {
                return createPage();
            }
        });
};

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
        .then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            allEmployees.push(engineer);

            addEmployee();
        })
}

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
        .then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            allEmployees.push(intern);

            addEmployee();
        })
}

const createPage = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generatePage(allEmployees), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    });
};

const copyStyle = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });
    });
}

startApplication();
copyStyle();