abstract class Car {
  public model: string = ""
  getPrice() {}
}

class Tesla extends Car {
  public model: string = "Tesla"

  getPrice() {
    return 80000
  }
}

class Honda extends Car {
  public model: string = "Honda"

  getPrice() {
    return 60000
  }
}

class BMW extends Car {
  public model: string = "BMW"

  getPrice() {
    return 70000
  }
}

const carsList: Array<Car> = [
  new Tesla(),
  new Honda(),
  new BMW()
]

carsList.forEach(({model, getPrice}) => {
  console.log(`Price of ${model} equal ${getPrice()}$`);
})

// Result in console:
// Price of Tesla equal 80000$
// Price of Honda equal 60000$
// Price of BMW equal 70000$

// npx ts-node openClosed.ts