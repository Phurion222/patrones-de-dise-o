class Person {
    constructor(name, lastaname, age, country, city, habiies) {
        this.name = name;
        this.lastaname = lastaname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.habiies = habiies;
    }

    getFullName() {
        return `${this.name} ${this.lastaname}`;
    }
}

class PersonBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.name = "";
        this.lastaname = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.habiies = [];
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setLastaname(lastaname) {
        this.lastaname = lastaname;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setCountry(country) {
        this.country = country;
        return this;
    }

    setCity(city) {
        this.city = city;
        return this;
    }

    addHobby(hobby) {
        this.habiies.push(hobby);
        return this;
    }

    build() {
        const person = new Person(this.name, this.lastaname, this.age, this.country, this.city, this.habiies);
        this.reset();
        return person;
    }
}

const personBuilder = new PersonBuilder();
const carlos = personBuilder.setName("Carlos").setLastaname("Escobar").setAge(31).addHobby("Jugar Boliche").build();
console.log(carlos); // Output: Carlos Escobar

const juan = personBuilder.setName("Juan").build();
console.log(juan); // Output: Juan