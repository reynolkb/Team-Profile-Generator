const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // calling on constructor function in employee class
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;