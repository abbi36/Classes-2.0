class Pet {
    constructor(species) {
        this.species = species;
    }
    describe() {
        console.log(`This pet is a ${this.species}`);
    }
}

class Dog extends Pet {
    constructor(owner, breed, age, sound) {
        super('dog');
        this.owner = owner;
        this.breed = breed;
        this.age = age;
        this.sound = sound;
    }
    describe() {
        console.log(`The ${this.species} is a ${this.breed} and he is almost ${this.age} years old and still likes to ${this.sound}.`)
    }
}
class Cat extends Pet {
    constructor(owner, breed, age, noise) {
        super('cat');
        this.owner = owner;
        this.breed = breed;
        this.age = age;
        this.noise = noise;
    }
    describe() {
        console.log(`The cat is a ${this.breed} that ${this.noise} and she is ${this.age} years old.`)
    }
}

class App {
    static main() {
        const myPet = new Pet('dog');
        const myDog = new Dog('Abbi', 'saint bernard', 7, 'howl');
        const myCat = new Cat('Abbi', 'tabby', 4, 'purrs');
        myPet.describe();
        myDog.describe();
        myCat.describe();
    }
}

App.main();