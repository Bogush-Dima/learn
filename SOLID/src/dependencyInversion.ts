class Manipulation {
  show(value: string) {
    console.log("Is shows: ", value);
  }

  hide(value: string) {
    console.log("Is hides: ", value);
  }
}

interface setValue {
  setValue(value: string): void
}

class Value implements setValue {
  manipulateWithValue = new Manipulation()

  setValue(value: string) {
    this.manipulateWithValue.show(value)
    this.manipulateWithValue.hide(value)
  }
}

const something = new Value()

// something.setValue("VALUE")

// npx ts-node dependencyInversion.ts