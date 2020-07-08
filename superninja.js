class Ninja {
    constructor(name) {
        this.name = name
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`${this.constructor.name} ${this.name} has ${this.strength} strength, ${this.speed} speed, and ${this.health} health`);
    }

    drinkSake() {
        this.health+=10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();