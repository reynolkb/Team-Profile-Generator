const Manager = require('../lib/Manager');

test('creates a manager', () => {
    const name = 'John';
    const id = '2';
    const email = 'john@gmail.com';
    const officeNumber = '3';
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
    expect(typeof (manager)).toBe("object");
});

test('do the functions actually return their values', () => {
    const name = 'John';
    const id = '2';
    const email = 'john@gmail.com';
    const officeNumber = '3';
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getName()).toBe(name);
    expect(manager.getId()).toBe(id);
    expect(manager.getEmail()).toBe(email);
    expect(manager.getOfficeNumber(officeNumber));
    expect(manager.getRole()).toBe(`Manager`);
});