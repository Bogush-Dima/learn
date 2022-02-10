class HouseBuilder {
  constructor(
    private material: string,
    private windows?: number,
    private doors?: number,
    private pool?: boolean,
    private garage?: boolean,
    private garden?: boolean,
  ){
    this.windows = windows || 0,
    this.doors = doors || 0,
    this.pool = pool || false,
    this.garage = garage || false,
    this.garden = garden || false
  }

  buildWindows(windowsCount: number): void {
    this.windows = windowsCount
  }

  buildDoors(doorsCount: number): void {
    this.doors = doorsCount
  }

  buildPool(): void {
    this.pool = true
  }

  buildGarage(): void {
    this.garage = true
  }

  buildGarden(): void {
    this.garden = true
  }

  getResult(): void {
    const stringArr = []

    this.windows && stringArr.push(`${this.windows} windows`)
    this.doors && stringArr.push(`${this.doors} doors`)
    this.pool && stringArr.push("pool")
    this.garage && stringArr.push("garage")
    this.garden && stringArr.push("garden")
    
    const houseWithConfig = stringArr.reduce((acc, value, idx, arr) => {
      if (idx === 0) {
        return acc + value + ","
      }

      if (idx === (arr.length - 1)) {
        return acc + " and " + value
      }

      if (idx === (arr.length - 2)) {
        return acc + " " + value
      }

      return acc + " " + value + ","
    }, "")

    console.log(`This house of ${this.material} ${houseWithConfig ? `with ${houseWithConfig}` : ""}`);
  }
}

const myHouse = new HouseBuilder("rock")

myHouse.buildWindows(4)
myHouse.buildDoors(2)
myHouse.buildGarage()
myHouse.buildGarden()
myHouse.getResult()


// npx ts-node builder.ts