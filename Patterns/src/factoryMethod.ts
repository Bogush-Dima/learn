class BMW_5_Series {
  create() {
    console.log("BMW 5 series is created");
  }
}

class BMW_M_Series {
  create() {
    console.log("BMW M series is created");
  }
}

const factoryBMW = () => {
  return new BMW_5_Series()
}

const factorySportBMW = () => {
  return new BMW_M_Series()
}

const BMW_5 = factoryBMW()
const SportBMW = factorySportBMW()

BMW_5.create()
SportBMW.create()

// npx ts-node factoryMethod.ts