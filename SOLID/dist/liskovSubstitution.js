"use strict";
class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    getInfo() {
        console.log("Name: ", this.name);
        console.log("Gender: ", this.gender);
    }
}
class Man extends Human {
    constructor(name, gender) {
        super(name, gender);
        this.name = name;
        this.gender = gender;
    }
}
class Woman extends Man {
    constructor(name, gender) {
        super(name, gender);
        this.name = name;
        this.gender = gender;
    }
}
class Trance extends Woman {
    constructor(name, gender) {
        super(name, gender);
        this.name = name;
        this.gender = gender;
    }
}
const idiot = new Trance("Pedro", "??????");
idiot.getInfo();
// npx ts-node liskovSubstitution.ts
//# sourceMappingURL=liskovSubstitution.js.map