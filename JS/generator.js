function* createGen() {
  yield "start"
  yield 1
  yield "end"
}

const gen = createGen()

gen.next()
gen.next()
gen.next()
gen.next()

// Output:
// { value: 'start', done: false }
// { value: 1, done: false }
// { value: 'end', done: false }
// { value: undefined, done: true }