function CoffeeMachine(power) {
    this.waterAmount = 0;
    const WATER_HEAT_CAPACITY = 4200;
    let timerId = void 0;
    let self = this;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Coffee is ready');
        ready = true;
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

let coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.stop();
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop(); // coffee isn't ready