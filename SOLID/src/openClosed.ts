//! Bad Example

// class Person {
//   constructor(
//     public name: string,
//     public gender: string
//   ){}
  
//   // ! Initial sayName method
//   // sayName() {
//   //   console.log(`His name is ${this.name}`);
//   // }
  
//   // ! Here we need to change sayName method for different genders
//   sayName() {
//     if (this.gender === "male") {
//       console.log(`His name is ${this.name}`);
//     } else if (this.gender === "female") {
//       console.log(`Her name is ${this.name}`);
//     }
//   }
//  }
  
//  class Male extends Person {
//   constructor(
//     public name: string,
//     public gender: string
//   ){
//     super(name, gender)
//   }
//  }
  
//  class Female extends Person {
//   constructor(
//     public name: string,
//     public gender: string
//   ){
//     super(name, gender)
//   }
//  }
  
//  const paul = new Male("Paul", 'male')
//  const fiona = new Female("Fiona", 'female')
  
//  paul.sayName()
//  fiona.sayName()





//! Good Example

// //! Create interface for common method which we need to have different for genders
// interface DisaplayName {
//   sayName: () => void
// }
// class Person implements DisaplayName {
//   constructor(
//     public name: string,
//     public gender: string
//   ){}

//   //! Init the method
//   sayName() {}
// }

// class Male extends Person {
//   constructor(
//     public name: string,
//     public gender: string
//   ){
//     super(name, gender)
//   }

//   //! Extend the method for Man
//   sayName() {
//     console.log(`His name is ${this.name}`);
//   }
// }

// class Female extends Person {
//   constructor(
//     public name: string,
//     public gender: string
//   ){
//     super(name, gender)
//   }

//   //! Extend the method for Women
//   sayName() {
//     console.log(`Her name is ${this.name}`);
//   }
// }

// const paul = new Male("Paul", 'male')
// const fiona = new Female("Fiona", 'female')

// paul.sayName()
// fiona.sayName()

// npx ts-node openClosed.ts