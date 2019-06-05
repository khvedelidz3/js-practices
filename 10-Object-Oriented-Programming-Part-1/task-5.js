function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
    let WATER_HEAT_CAPACITY = capacity;
    const _power = power;
    let timerId = null;
    let status = false;
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

    this.addWater = function (amount) {
        this.setWaterAmount(amount + waterAmount)
    }

    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.getPower = function () {
        return _power;
    };

    function onReady() {
        console.log('Coffee is ready');
        status = false;
    }

    this.setOnReady = function (func) {
        onReady = func;
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
        status = true;
    };

    this.isRunning = function () {
        return status;
    }

    this.stop = function () {
        clearTimeout(timerId);
        status = false;
        console.log(`coffee isn't ready`)
    }
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

// coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function() {
	console.log('After: ' + coffeeMachine.isRunning()); // After: false
});

coffeeMachine.run();