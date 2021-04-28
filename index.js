const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

function teamTree() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message:"Enter Employee Name:",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Enter an employee name");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address:",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Enter an e-mail address for this employee!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "eid",
        message: "Please Enter their employee ID:",
        validate: teamMemberID => {
            if (teamMemberID) {
                return true;
            } else {
                console.log("Enter their Employee ID.")
                return false;
            }
        }
    },
    {
        type: "list",
        name: "role",
        message: "What is their role in the company?",
        choices: ["Manager", "Employee", "Engineer", "Intern"]
    }
    ])
    .then(input => {
        if (input.role === "Manager") {
            inquirer.prompt([{
                type: "input",
                name: "officeNumber",
                message: "What is your Office Number?",
                validate: phonenumber => {
                    if (phonenumber) {
                        return true;
                    } else {
                        console.log("Enter an Office Number for the manager.");
                        return false;
                    }
                }
            }])
            .then(ans => {
                const initialManager = new Manager(input.name, input.email, input.eid, input.role, input.officeNumber);

                team.push(initialManager);
                addOtherMembers();
            });
        } else if (input.role === "Engineer") {
            inquirer.prompt([{
                type: "input",
                name: "gitHub",
                message: "Enter the engineer's github username:",
                validate: gitHubLink => {
                    if (gitHubLink) {
                        return true;
                    } else {
                        console.log("Enter the GitHub username!");
                        return false;
                    }
                }
            }])
            .then(ans => {
                const softwareEngineer = new Engineer(input.name, input.email, input.eid, input.role, input.gitHub);
                team.push(softwareEngineer);
                addOtherMembers();
            });
        } else if (input.role === "Intern") {
            inquirer.prompt ([{
                type: "input",
                name: "school",
                message: "What school did this intern go to?",
                validate: education => {
                    if (education) {
                        return true;
                    } else {
                        console.log("Enter the school the intern went to!");
                        return false;
                    }
                }
            }])
            .then(ans => {
                const rookieDev = new Intern(input.name, input.email, input.eid, input.role, input.school);
                team.push(rookieDev);
                addOtherMembers();
            });
        } else {
            const teamMember = new Employee(input.name, input.email, input.eid, input.role);
            team.push(teamMember);
            addOtherMembers
        }
        function addOtherMembers () {
            inquirer.prompt({
                type: "confirm",
                name: "newEmployee",
                message: "Would you like to add another Team Member?",
            })
            .then (res => {
                if (res === true) {
                    teamTree(team);
                } else {
                    console.log(team);
                }
            })
        }
    })
}


teamTree();