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
    removeOrder() {
        this.id = null;
        this.order = null;
    }
}
class AutoDB {
    constructor(model, coast, db) {
        this.model = model;
        this.coast = coast;
        this.db = db;
    }
    getDB() {
        return this.db;
    }
    setAuto(auto) {
        const { model, coast } = auto;
        this.db = Object.assign(Object.assign({}, this.db), { [model]: coast });
    }
    removeAuto(model) {
        if (this.db) {
            delete this.db[model];
        }
        else {
            console.log("DB is empty");
        }
    }
}
//=================================================================================
// Create car
const mercedes = new Auto();
mercedes.setModel("Mercedes");
mercedes.setCoast(10000);
// console.log(mercedes.getAutoInfo()); // { model: 'Mercedes', coast: 10000 }
//=================================================================================
// Create order
const customerDenis = new CustomerAuto();
customerDenis.setOrder(mercedes);
// console.log(customerDenis.getOrder()); // { id: 0.1409399235422577, order: { model: 'Mercedes', coast: 10000 } }
// Remove order
// customerDenis.removeOrder()
// console.log(customerDenis.getOrder()) // { id: null, order: null }
//=================================================================================
// Add car to DB
const db = new AutoDB();
db.setAuto(mercedes);
// console.log(db.getDB()); // { Mercedes: 10000 }
// Remove car from DB
db.removeAuto("Mercedes");
// console.log(db.getDB()) // {}
// npx ts-node singleResponsibility.ts
//# sourceMappingURL=singleResponsibility.js.map