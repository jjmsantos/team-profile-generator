const Engineer = require('../lib/Engineer');

const testEngineer = new Engineer("Jeremy", "jeremy.santos1010@gmail.com", 321 , "Engineer", "jjmsantos");

test('has a name', () => {
    expect(testEngineer.name).toEqual(expect.any(String));
    expect(testEngineer.name.length).toBeGreaterThan(2);
})

test('has an email a valid email', () =>{
    expect(testEngineer.email).toEqual(expect.stringContaining('@'));
    expect(testEngineer.email).toEqual(expect.stringContaining('.'));
})

test('has a role of Engineer', () => {
    expect(testEngineer.role).toBe('Engineer');
})

test('Id has value', () =>{
    expect(testEngineer.id).toEqual(expect.any(Number));
})

test('Entered a gitHub', () =>{
    expect(testEngineer.gitHub).toEqual(expect.any(String));
})