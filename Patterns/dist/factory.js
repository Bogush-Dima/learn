"use strict";
const AUDI = "Audi";
const _BMW = "BMW";
const MERCEDES = "MERCEDES";
class Audi {
    getInfo() {
        console.log(`I'm ${AUDI}`);
    }
}
class BMW {
    getInfo() {
        console.log(`I'm ${_BMW}`);
    }
}
class Mercedes {
    getInfo() {
        console.log(`I'm ${MERCEDES}`);
    }
}
class Factory {
    constructor(model) {
        this.model = model;
    }
    create() {
        switch (this.model) {
            case AUDI:
                return new Audi();
            case _BMW:
                return new BMW();
            case MERCEDES:
                return new Mercedes();
            default:
                console.log("404 Not found");
                break;
        }
    }
}
const audi = new Factory(AUDI).create();
const bmw = new Factory(_BMW).create();
const mercedes = new Factory(MERCEDES).create();
const undef = new Factory("undef").create();
audi === null || audi === void 0 ? void 0 : audi.getInfo();
bmw === null || bmw === void 0 ? void 0 : bmw.getInfo();
mercedes === null || mercedes === void 0 ? void 0 : mercedes.getInfo();
//# sourceMappingURL=factory.js.map