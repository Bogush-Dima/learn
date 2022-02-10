class Person {
  constructor(
    public name: string,
    public position: string
  ){}

  getInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Position: ${this.position}`);
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.position}`);
  }
}

class Developerrr extends Person {
  constructor(
    public name: string,
    public position: string
  ){
    super(name, position)
  }

  writeCode() {
    console.log("Write code");
  }
}

const dima = new Developerrr("Dima", "REACT Developer")

dima.getInfo()
dima.sayHi()
dima.writeCode()

// npx ts-node inheritance.ts