class Worker {
    constructor(name, surname, rate, days) {
        let _name = name;
        let _surname = surname;
        let _rate = rate;
        let _days = days;

        this.getName = function () {
            return _name;
        }

        this.getSurname = function () {
            return _surname;
        }

        this.getRate = function () {
            return _rate;
        }

        this.getDays = function () {
            return _days;
        }

        this.getSalary = function () {
            return _rate * _days;
        }
    }
}

let worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getName()); // print 'John'
console.log(worker.getSurname()); // print 'Smith'
console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31