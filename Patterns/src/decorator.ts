abstract class BasicCar {
  constructor(
    public model?: string,
    public price?: number
  ){}

  getInfo(): void {
    console.log(`Model: ${this.model}; Price: ${this.price}`);
  }
}

class Tesla extends BasicCar {
  constructor(
    public model?: string,
    public price?: number
  ){
    super(model, price)
    this.model = model || "Tesla"
    this.price = price || 20000
  }
}

class Autopilot {
  constructor(
    public car: BasicCar
  ){}

  getInfo(): void {
    console.log(`Model: ${this.car.model}; Price: ${this.car.price as number + 5000}; with autopilot`);
  }
}

const tesla = new Tesla()
const teslaWithAutopilot = new Autopilot(tesla)

tesla.getInfo()
teslaWithAutopilot.getInfo()


// npx ts-node decorator.ts