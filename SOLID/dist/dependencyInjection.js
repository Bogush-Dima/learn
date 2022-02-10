"use strict";
class Logger_1 {
    logger() {
        console.log("I'm Logger_1");
    }
}
class Logger_2 {
    logger() {
        console.log("I'm Logger_2");
    }
}
class Current {
    constructor(logger) {
        this.logger = logger;
    }
    runLogger() {
        const log = new this.logger();
        log.logger();
    }
}
const first = new Current(Logger_1);
const second = new Current(Logger_2);
// first.runLogger()
// second.runLogger()
// npx ts-node dependencyInjection.ts
//# sourceMappingURL=dependencyInjection.js.map