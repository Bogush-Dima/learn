class Car {
  constructor(
    public color: string,
    public price: number,
    public nitro: boolean
  ){}

  produce() {
    return new Car(this.color, this.price, this.nitro)
  }

  getCarInfo() {
    console.log("Color: ", this.color);
    console.log("Price: ", this.price);
    console.log("Nitro: ", this.nitro);
  }
}

const prototypeCar = new Car("black", 8000, false)

const car1 = prototypeCar.produce()
const car2 = prototypeCar.produce()

car1.getCarInfo()

car2.nitro = true
car2.getCarInfo()


// npx ts-node prototype.ts