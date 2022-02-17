class BankAccount {
    constructor(start) {
        this.balance = start;
    }
}

class VendingMachine {
    constructor() {
        this.items = new Map();
        this.items.set('Sprite', 1.25);
        this.items.set('Coke', 1.50);
        this.items.set('Water', 1.75);
        this.items.set('Tea', 2.00);
    }

    buy(account, item) {
        const price = this.items.get(item);

        if (price == undefined) {
            throw new Error('The item does not exist');
        } 
        if (price < account.balance) {
            account.balance - price;
                console.log(`Successfully bought ${item}.`)
        } else {
            throw new Error('Insufficient Funds.');
        }
    }
}

class App {
    static main() {
        const account = new BankAccount(200);
        const machine = new VendingMachine();

        machine.buy(account, 'Sprite');
    }
}

App.main();