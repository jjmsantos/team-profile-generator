const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, role, gitHub) {
        super(name, email, id, role)
        this.gitHub = gitHub; 
    }
    getGihub() {
        return this.gitHub; 
    }    
   }
module.exports = Engineer; 