"use strict";
class Developer {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: ${this.salary}$`);
    }
}
const denis = new Developer("Denis", "JS", 6000);
// denis.salary //! Error, because salary is private
// denis.role //! Error, because salary is protected
denis.getInfo();
// npx ts-node encapsulation.ts
//# sourceMappingURL=encapsulation.js.map