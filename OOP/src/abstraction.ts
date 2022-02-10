abstract class Car {
  constructor(
    public name: string,
    public startEngineSound: string
  ){}

  startEngine() {
    console.log("Car name: ", this.name);
    console.log("Start engine sound: ", this.startEngineSound);
  }
}

class Lada extends Car {
  constructor(
    public name: string,
    public startEngineSound: string
  ){
    super(name, startEngineSound)
  }

  howItworks() {
    console.log("I'm so stupid car");
  }
}

class Ferrari extends Car {
  constructor(
    public name: string,
    public startEngineSound: string
  ){
    super(name, startEngineSound)
  }

  howItworks() {
    console.log("Oh, yeah))) let's go!");
  }
}

// const abs = new Car("Ads", "message") //! Error, because Car is abstract class

const shit = new Lada("Lada", "tr-tr-tr-prh...")
const sport = new Ferrari("Ferrari", "wrum...")

shit.startEngine()
shit.howItworks()

console.log("--------------------");

sport.startEngine()
sport.howItworks()

// npx ts-node abstraction.ts