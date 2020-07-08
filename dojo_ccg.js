class Card {
    constructor(name, cost) {
        this.name= name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if (target instanceof Unit) {
            //reduce target res by power
            target.res -= this.power;
            console.log(`${target.name} was attacked by ${this.name} and lost ${this.power} resilience`)
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

    showStats() {
        console.log(`${this.name} has ${this.power} power and ${this.res} resilience`);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            // implement card text here
            this.stat == "power" ? target.power += this.magnitude : target.res += this.magnitude;
            console.log(`${this.name} was played on ${target.name} to ${this.text}`);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const ninjaRed = new Unit("Red Belt Ninja", 3, 3, 4);
const ninjaBlack = new Unit("Black Belt Ninja", 4, 5, 4);
const algoEffect = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
const promiseEffect = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
const pairEffect = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

ninjaRed.showStats();
ninjaBlack.showStats();
algoEffect.play(ninjaRed);
promiseEffect.play(ninjaRed);
pairEffect.play(ninjaRed);
ninjaRed.attack(ninjaBlack);
ninjaRed.showStats();
ninjaBlack.showStats();

