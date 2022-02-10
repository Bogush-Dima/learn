class Logger_1 {
  logger(): void {
    console.log("I'm Logger_1");
  }
}

class Logger_2 {
  logger(): void {
    console.log("I'm Logger_2");
  }
}

class Current {
  constructor(
    public logger: any
  ){}

  runLogger() {
    const log = new this.logger()
    log.logger()
  }
}

const first = new Current(Logger_1)
const second = new Current(Logger_2)

first.runLogger()
second.runLogger()

// npx ts-node dependencyInjection.ts