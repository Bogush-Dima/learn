const AUDI = "Audi"
const _BMW = "BMW"
const MERCEDES = "MERCEDES"

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

class CarFactory {
  constructor(
    public model: string
  ){}

  create() {
    switch (this.model) {
      case AUDI:
        return new Audi()
      case _BMW:
        return new BMW()
      case MERCEDES:
        return new Mercedes()
      default:
        console.log("404 Not found");
        break
    }
  }
}

const audi = new CarFactory(AUDI).create()
const bmw = new CarFactory(_BMW).create()
const mercedes = new CarFactory(MERCEDES).create()
const undef = new CarFactory("undef").create()

audi?.getInfo()
bmw?.getInfo()
mercedes?.getInfo()

// npx ts-node abstractFactory.ts