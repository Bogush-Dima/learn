const carFun = (x) => (y) => (z) => console.log(x + y + z)

// const foo = carFun(1)
// const foo2 = foo(2)
// const foo3 = foo2(3)

// const main = carFun(1)(2)(3)


const fun = (a, b, c) => console.log(a + b + c)

const curry = (func) => {
  return function curried(...args) {
    if (args.length === func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

curry(fun)(1, 2)(3)
curry(fun)(1)(2)(3)
curry(fun)(1, 2, 3)