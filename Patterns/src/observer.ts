class FirstClient {
  getInfo(newItems: Array<string>): void {
    console.log("FirstClient: ", newItems)
  }
}

class SecondClient {
  getInfo(newItems: Array<string>): void {
    console.log("SecondClient: ", newItems)
  }
}

class Shop {
  public subscribers: Array<FirstClient> = []

  subscribe(client: FirstClient): void {
    this.subscribers.push(client)
  }

  sendMessageAboutNewItems(items: Array<string>): void {
    this.subscribers.forEach((client: FirstClient) => client.getInfo(items))
  }
}

const shop = new Shop()
const firstClient = new FirstClient()
const secondClient = new SecondClient()

shop.subscribe(firstClient)
shop.sendMessageAboutNewItems(["jacket, short"])

console.log("===================");

shop.subscribe(secondClient)
shop.sendMessageAboutNewItems(["iphone, sony"])

// npx ts-node observer.ts