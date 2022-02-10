"use strict";
class Auto {
    constructor(model, coast) {
        this.model = model;
        this.coast = coast;
    }
    getAutoInfo() {
        return ({
            model: this.model,
            coast: this.coast
        });
    }
    setModel(modelName) {
        this.model = modelName;
    }
    setCoast(coastValue) {
        this.coast = coastValue;
    }
}
class CustomerAuto {
    constructor(id, order) {
        this.id = id;
        this.order = order;
    }
    setOrder(auto) {
        this.id = Math.random();
        this.order = auto;
    }
    getOrder() {
        return ({
            id: this.id,
            order: this.order
        });
    }
    removeOrder(id) {
        this.id = null,
            this.order = null;
    }
}
class AutoDB {
    constructor(model, coast, db) {
        this.model = model;
        this.coast = coast;
        this.db = db;
    }
    setAuto(model, coast) {
        this.db = Object.assign(Object.assign({}, this.db), { [model]: coast });
    }
    removeAuto(model) {
        if (this.db) {
            delete this.db[model];
        }
        console.log("DB is empty");
    }
}
// npx ts-node singleResponsibility.ts
//# sourceMappingURL=singleResponcibility.js.map