class ItemNotFound extends Error {}
class FundsError extends Error {}

class BankAccount {
  constructor(start) {
    this.balance = start;
  }
}

class VendingMachine {
  constructor() {
    this.items = new Map();
    this.items.set("Sprite", 1.25);
    this.items.set("Coke", 1.5);
    this.items.set("Water", 1.75);
    this.items.set("Tea", 2.0);
  }

  buy(account, item) {
    const price = this.items.get(item);

    if (price == undefined) {
      throw new ItemNotFound("That item does not exist");
    }
    if (price < account.balance) {
      account.balance -= price;
      console.log(`Successfully bought ${item}.`);
    } else {
      throw new FundsError("Insufficient Funds.");
    }
  }
}

class App {
  static main() {
    const account = new BankAccount(0.50);
    const machine = new VendingMachine();
    try {
      machine.buy(account, "Sprite");
    } catch (err) {
      if (err instanceof FundsError) {
        console.log('Please enter more change.');
      } else if (err instanceof ItemNotFound) {
        console.log("That item does not exist in our system.");
      }
    }
  }
}

App.main();
