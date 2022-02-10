class Developer {
  constructor(
    public name: string,
    public department: string,
    private salary: number,
  ){}

  getInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
    console.log(`Salary: ${this.salary}$`);
  }
}

const denis = new Developer("Denis", "JS", 6000)

// denis.salary //! Error, because salary is private
denis.getInfo()

// npx ts-node encapsulation.ts