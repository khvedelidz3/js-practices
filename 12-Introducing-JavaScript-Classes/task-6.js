class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student extends  User{
    constructor(name, surname, year) {
        super(name, surname)

        this.year = year;
    }

    getCourse() {
        return new Date().getFullYear() - this.year;
    }
}

let student = new Student('John', 'Smith', 2015);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2015
console.log(student.getCourse()); // print 4 - fourth course, because current year 2019


