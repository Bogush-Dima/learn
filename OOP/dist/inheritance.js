"use strict";
class Person {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    getInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Position: ${this.position}`);
    }
    sayHi() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.position}`);
    }
}
const dima = new Person("Dima", "REACT Developer");
dima.getInfo();
dima.sayHi();
// npx ts-node inheritance.ts
//# sourceMappingURL=inheritance.js.map