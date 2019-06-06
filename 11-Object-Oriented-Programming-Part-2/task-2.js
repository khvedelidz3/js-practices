CoffeeMachine.prototype.getTimeToBoil = function() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
}

CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        console.log('Coffee is ready!');
    }, getTimeToBoil());
}

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    waterAmount = amount;
}

function CoffeeMachine(power) {
	let waterAmount = 0;
    const WATER_HEAT_CAPACITY = 4200;
	
    // function getTimeToBoil() {
	// 	return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	// }
  	
    // this.run = function() {
    // 	setTimeout(function() {
	// 		console.log('Coffee is ready!');
    // 	}, getTimeToBoil());
	// };
	// this.setWaterAmount = function(amount) {
	// 	waterAmount = amount;
	// };
}

let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();