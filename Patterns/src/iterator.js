const currentCollection = {
  audi: {
    name: "Audi",
    hasAutopilot: false
  },
  bmw: {
    name: "BMW",
    hasAutopilot: false
  },
  tesla: {
    name: "Tesla",
    hasAutopilot: true
  }
}


class CarIterator {
  constructor(obj){
    this.obj = obj
    this.keys = Object.keys(obj)
    this.index = 0
  }

  next() {
    return this.obj[this.keys[this.index++]]
  }

  hasNext() {
    return this.index < this.keys.length
  }
}


const collection = new CarIterator(currentCollection)

while(collection.hasNext()) {
  console.log(collection.next())
}


// node iterator.js