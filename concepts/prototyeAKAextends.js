const c = console.log.bind(console)

function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
}

var person = new Person("John Doe");
c(person.getName())