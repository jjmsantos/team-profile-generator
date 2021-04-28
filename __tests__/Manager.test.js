const Manager = require('../lib/Manager');

//passed test
//const testManager = new Manager("Jeremy", "jeremy.santos1010@gmail.com", 321 , "Manager", 4165550161)

//failed test
const testManager = new Manager("je", "jeremygmail.com", "notanID" , "Intern", "notaRoom");

test('has a name', () => {
    expect(testManager.name).toEqual(expect.any(String));
    expect(testManager.name.length).toBeGreaterThan(2);
})

test('has an email a valid email', () =>{
    expect(testManager.email).toEqual(expect.stringContaining('@'));
    expect(testManager.email).toEqual(expect.stringContaining('.'));
})

test('has a role of Manager', () => {
    expect(testManager.role).toBe('Manager');
})

test('Id has value', () =>{
    expect(testManager.id).toEqual(expect.any(Number));
})

test('Entered an office', () =>{
    expect(testManager.office).toEqual(expect.any(Number));
})