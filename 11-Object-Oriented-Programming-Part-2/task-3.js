function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

// Create two hamsters and feed the first
let speedy = new Hamster();
let lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

lazy.found('test1');
lazy.found('test2');
lazy.found('test3');

console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 2 (!??)
