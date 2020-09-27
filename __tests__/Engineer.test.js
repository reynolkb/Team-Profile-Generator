const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
    const name = 'Tom';
    const id = '3';
    const email = 'tom@gmail.com';
    const github = 'reynolkb';
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
    expect(typeof (engineer)).toBe("object");
});

test('do the functions actually return their values', () => {
    const name = 'Tom';
    const id = '3';
    const email = 'tom@gmail.com';
    const github = 'reynolkb';
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.getName()).toBe(name);
    expect(engineer.getId()).toBe(id);
    expect(engineer.getEmail()).toBe(email);
    expect(engineer.getGithub(github));
    expect(engineer.getRole()).toBe('Engineer');
});