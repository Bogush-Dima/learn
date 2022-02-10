"use strict";
class People {
    constructor(name) {
        this.name = name;
    }
    sayHi() { }
}
class Russian extends People {
    constructor(name) {
        super(name);
        this.name = name;
    }
    sayHi() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
}
class American extends People {
    constructor(name) {
        super(name);
        this.name = name;
    }
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    }
}
const andrey = new Russian("Андрей");
const tom = new American("Tom");
andrey.sayHi();
tom.sayHi();
// npx ts-node polymorphism.ts
//# sourceMappingURL=polymorphism.js.map