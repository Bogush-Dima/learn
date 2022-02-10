"use strict";
class Manipulation {
    show(value) {
        console.log("Is shows: ", value);
    }
    hide(value) {
        console.log("Is hides: ", value);
    }
}
class Value {
    constructor() {
        this.manipulateWithValue = new Manipulation();
    }
    setValue(value) {
        this.manipulateWithValue.show(value);
        this.manipulateWithValue.hide(value);
    }
}
const something = new Value();
// something.setValue("VALUE")
// npx ts-node dependencyInversion.ts
//# sourceMappingURL=dependencyInversion.js.map