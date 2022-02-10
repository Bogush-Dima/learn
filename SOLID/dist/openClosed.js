"use strict";
class Car {
    constructor() {
        this.model = "";
    }
    getPrice() { }
}
class Tesla extends Car {
    constructor() {
        super(...arguments);
        this.model = "Tesla";
    }
    getPrice() {
        return 80000;
    }
}
class Honda extends Car {
    constructor() {
        super(...arguments);
        this.model = "Honda";
    }
    getPrice() {
        return 60000;
    }
}
class BMW extends Car {
    constructor() {
        super(...arguments);
        this.model = "BMW";
    }
    getPrice() {
        return 70000;
    }
}
const carsList = [
    new Tesla(),
    new Honda(),
    new BMW()
];
// carsList.forEach(({model, getPrice}) => {
//   console.log(`Price of ${model} equal ${getPrice()}$`);
// })
// Result in console:
// Price of Tesla equal 80000$
// Price of Honda equal 60000$
// Price of BMW equal 70000$
// npx ts-node openClosed.ts
//# sourceMappingURL=openClosed.js.map