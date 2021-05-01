const Intern = require('../lib/Intern');

const testIntern = new Intern("Jeremy", "jeremy.santos1010@gmail.com", 321 , "Intern", "University Of Toronto");

test('has a name', () => {
    expect(testIntern.name).toEqual(expect.any(String));
    expect(testIntern.name.length).toBeGreaterThan(2);
})

test('has an email a valid email', () =>{
    expect(testIntern.email).toEqual(expect.stringContaining('@'));
    expect(testIntern.email).toEqual(expect.stringContaining('.'));
})

test('has a role of Intern', () => {
    expect(testIntern.role).toBe('Intern');
})

test('Id has value', () =>{
    expect(testIntern.id).toEqual(expect.any(Number));
})

test('Entered a school', () =>{
    expect(testIntern.school).toEqual(expect.any(String));
})