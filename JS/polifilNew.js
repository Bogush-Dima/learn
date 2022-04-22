function Const(name = "Вася", age) {
  this.name = name
  this.age = age
}

function customNew(func) {
  const res = {};
  const args = Array.from(arguments).slice(1)
  res.__proto__ = func.prototype;
  func.apply(res, args);
  return res;
}

const dima = customNew(Const, "Дима", 26)
const denis = customNew(Const, "Денис", 31)

console.log(dima)
console.log(denis)