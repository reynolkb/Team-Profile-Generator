const Intern = require('../lib/Intern');

test('creates an intern', () => {
    const name = 'Frank';
    const id = '4';
    const email = 'frank@gmail.com';
    const school = 'UCLA';
    const intern = new Intern(name, id, email, school);

    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
    expect(typeof (intern)).toBe("object");
});

test('do the functions actually return their values', () => {
    const name = 'Frank';
    const id = '4';
    const email = 'frank@gmail.com';
    const school = 'UCLA';
    const intern = new Intern(name, id, email, school);

    expect(intern.getName()).toBe(name);
    expect(intern.getId()).toBe(id);
    expect(intern.getEmail()).toBe(email);
    expect(intern.getSchool(school));
    expect(intern.getRole()).toBe('Intern');
});