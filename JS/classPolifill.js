function User(name, surname) {
  this.name = name
  this.surname = surname
}

User.prototype.sayHi = function() {console.log(`Hi, ${this.name} ${this.surname}`)}

const me = new User("Dima", "Bogush")
const andrey = new User("Andrey", "Lavrow")

me.sayHi()
andrey.sayHi()

console.log(User.prototype)