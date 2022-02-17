class Pet {
    constructor(species) {
        this.species = species;
    }
    describe() {
        console.log(`This pet is a ${this.species}`);
    }
}

class Dog extends Pet {
    constructor(owner, breed, age) {
        super('dog');
        this.owner = owner;
        this.breed = breed;
        this.age = age;
    }
    howls() {
        console.log('This dog howls');
    }
    describe() {
        console.log(`The ${this.species} is a ${this.breed} and he is almost ${this.age} years old.`)
    }
}
class Cat extends Pet {
    constructor(owner, breed, age, noise) {
        super('cat');
        this.owner = owner;
        this.breed = breed;
        this.age = age;
    }

    purrs() {
        console.log('The cat purrs');
    }
    describe() {
        console.log(`The cat is a ${this.breed} and she is ${this.age} years old.`)
    }
}

class App {
    static main() {
        const myPet = new Pet('dog');
        const myDog = new Dog('Abbi', 'saint bernard', 7);
        const myCat = new Cat('Abbi', 'tabby', 4);
        myPet.describe();
        myDog.describe();
        myDog.howls();
        myCat.describe();
        myCat.purrs();
    }
}

App.main();