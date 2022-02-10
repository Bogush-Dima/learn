class People {
  constructor(
    public name: string,
  ){}

  sayHi(){}
}

class Russian extends People {
  constructor(
    public name: string,
  ){
    super(name)
  }

  sayHi() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}

class American extends People {
  constructor(
    public name: string,
  ){
    super(name)
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
    
  }
}

const andrey = new Russian("Андрей")
const tom = new American("Tom")

andrey.sayHi()
tom.sayHi()

// npx ts-node polymorphism.ts