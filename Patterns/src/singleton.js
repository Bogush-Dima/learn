class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance
    }

    this.count = 0
    Counter.instance = this
    return this
  }

  increase() {
    this.count++
  }

  getCount() {
    console.log(this.count);
  }
}

const a = new Counter()
const b = new Counter()

a.increase()
a.increase()
a.increase()

a.getCount()
b.getCount()

// node singleton.js