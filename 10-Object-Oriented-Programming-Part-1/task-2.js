function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
    const WATER_HEAT_CAPACITY = capacity;
    const _power = power;
    let timerId = void 0;
    let self = this;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / _power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive.");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.getPower = function () {
        return _power;
    };

    function onReady() {
        console.log('Coffee is ready');
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function () {
        if (typeof timerId !== 'undefined') {
            clearTimeout(timerId);
            timerId = void 0;
            console.log(`coffee isn't ready`)
        }
    }
}

let coffeeMachine = new CoffeeMachine(50000, 4200);
coffeeMachine.setWaterAmount(200);
coffeeMachine.run();
// coffeeMachine.stop(); // coffee isn't ready