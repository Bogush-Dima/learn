type AutoDBType = {
  [key: string]: number
}

class Auto {
  constructor(
    public model?: string,
    public coast?: number
  ){}

  getAutoInfo() {
    return ({
      model: this.model,
      coast: this.coast
    })
  }

  setModel(modelName: string) {
    this.model = modelName
  }

  setCoast(coastValue: number) {
    this.coast = coastValue
  }
}

class CustomerAuto {
  constructor(
    public id?: number | null,
    public order?: Auto | null
  ){}

  setOrder(auto: Auto): void {
    this.id = Math.random()
    this.order = auto
  }

  getOrder() {
    return ({
      id: this.id,
      order: this.order
    })
  }

  removeOrder(): void {
    this.id = null
    this.order = null
  }
}

class AutoDB {
  constructor(
    public model?: string,
    public coast?: number,
    public db?: AutoDBType,
  ){}

  getDB() {
    return this.db
  }

  setAuto(auto: Auto): void {
    const { model, coast } = auto
    this.db = {...this.db, [model as any]: coast}
  }

  removeAuto(model: string) {
    if(this.db) {
      delete this.db[model]
    } else {
      console.log("DB is empty");
    }
  }
}
//=================================================================================
// Create car
const mercedes = new Auto()
mercedes.setModel("Mercedes")
mercedes.setCoast(10000)
// console.log(mercedes.getAutoInfo()); // { model: 'Mercedes', coast: 10000 }



//=================================================================================
// Create order
const customerDenis = new CustomerAuto()
customerDenis.setOrder(mercedes)
// console.log(customerDenis.getOrder()); // { id: 0.1409399235422577, order: { model: 'Mercedes', coast: 10000 } }

// Remove order
// customerDenis.removeOrder()
// console.log(customerDenis.getOrder()) // { id: null, order: null }



//=================================================================================
// Add car to DB
const db = new AutoDB()
db.setAuto(mercedes)
// console.log(db.getDB()); // { Mercedes: 10000 }

// Remove car from DB
db.removeAuto("Mercedes")
// console.log(db.getDB()) // {}



// npx ts-node singleResponsibility.ts