const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const name = 'Kyle';
    const id = '1';
    const email = 'kyle@gmail.com';
    const employee = new Employee(name, id, email);

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(typeof (employee)).toBe("object");
});

test('do the functions actually return their values', () => {
    const name = 'Kyle';
    const id = '1';
    const email = 'kyle@gmail.com';
    const employee = new Employee(name, id, email);

    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe('Employee');
});