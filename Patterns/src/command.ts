class Driver {
  constructor(
    public command: SwitchEngineStatus
  ){}

  execute(): void {
    this.command.execute()
  }
}

class Engine {
  public status = false

  on() {
    this.status = true
  }

  off() {
    this.status = false
  }
}

class SwitchEngineStatus {
  constructor(
    public engine: Engine
  ){}

  execute(): void {
    if (this.engine.status === false) {
      this.engine.on()
    } else {
      this.engine.off()
    }
  }
}


const engine = new Engine()
const engineSwitcher = new SwitchEngineStatus(engine)
const driver = new Driver(engineSwitcher)

driver.execute()


// npx ts-node command.ts