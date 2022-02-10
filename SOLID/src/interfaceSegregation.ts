interface MazdaSet {
  getMazdaSet(): void
}

interface ToyotaSet {
  getToyotaSet(): void
}

class Mazda implements MazdaSet {
  getMazdaSet() {
    console.log("I'm Mazda");
  }
}

class Toyota implements ToyotaSet {
  getToyotaSet() {
    console.log("I'm Toyota");
  }
}

const mazda = new Mazda()
const toyota = new Toyota()

mazda.getMazdaSet()
toyota.getToyotaSet()

// npx ts-node interfaceSegregation.ts