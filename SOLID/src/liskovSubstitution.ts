abstract class Human {
  constructor(
    public name: string,
    public gender: string
  ){}

  getInfo(){
    console.log("Name: ", this.name);
    console.log("Gender: ", this.gender);
  }
}

class Man extends Human {
  constructor(
    public name: string,
    public gender: string
  ) {
    super(name, gender)
  }
}

class Woman extends Man {
  constructor(
    public name: string,
    public gender: string
  ) {
    super(name, gender)
  }
}

class Trance extends Woman {
  constructor(
    public name: string,
    public gender: string
  ) {
    super(name, gender)
  }
}

const idiot = new Trance("Pedro", "??????")

idiot.getInfo()

// npx ts-node liskovSubstitution.ts