const Employee = require('../lib/Employee');

//passed test
const testEmployee = new Employee("Jeremy", "jeremy.santos1010@gmail.com", 321 , "Employee");

//failed test
//const testEmployee = new Employee("je", "jeremygmail.com", "notanID" , "Manager");

test('has a name', () => {
    expect(testEmployee.name).toEqual(expect.any(String));
    expect(testEmployee.name.length).toBeGreaterThan(2);
})

test('has an email a valid email', () =>{
    expect(testEmployee.email).toEqual(expect.stringContaining('@'));
    expect(testEmployee.email).toEqual(expect.stringContaining('.'));
})

test('has a role of Employee', () => {
    expect(testEmployee.role).toBe('Employee');
})

test('Id has value', () =>{
    expect(testEmployee.id).toEqual(expect.any(Number));
})
