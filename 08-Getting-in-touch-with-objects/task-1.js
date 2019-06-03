const person = {};

Object.defineProperty(person, 'salary', {
    get() {
        let month = new Date().getMonth();
        let currentDay = new Date().getDate();
        let currentMonthDays = new Date(new Date().getFullYear(), month+1, 0).getDate();

        return currentMonthDays - currentDay > 20 ? 'good salary' : 'bad salary';
    },
})

console.log(person.salary);
