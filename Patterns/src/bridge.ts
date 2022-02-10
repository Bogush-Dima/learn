class Color {
  constructor(
    public value: string
  ){}

  getColor(): string {
    return this.value
  }
}

class Red extends Color {
  constructor(
    public value: string
  ){
    super(value)
  }
}

class Figure {
  constructor(
    public color: Color
  ){}
}

class Circle extends Figure {
  constructor(
    public color: Color
  ){
    super(color)
  }

  paint(): string {
    return `I'm ${this.color.getColor()} Circle`
  }
}

const redCircle = new Circle(new Red("red"))
console.log(redCircle.paint())

// npx ts-node bridge.ts