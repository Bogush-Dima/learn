// //! The problem
// class Human {
//   say = true
//   move = true
// }

// class Developer extends Human {
//   writeCode = true
// }

// class QA extends Developer {
//   //! Here we need to change writeCode property so class QA cannot use instead Developer
//   writeCode = false
// }

// const qa = new QA()

// console.log(qa.writeCode);


//! Decision
class Human {
  say = true
  move = true
}

class CanWriteCode extends Human {
  writeCode = true
}

class CannotWriteCode extends Human {
  writeCode = false
}

const qa = new CannotWriteCode()
const developer = new CanWriteCode()

console.log("QA", qa.writeCode);
console.log("Developer", developer.writeCode);



// npx ts-node liskovSubstitution.ts