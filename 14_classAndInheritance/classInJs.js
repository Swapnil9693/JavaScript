class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to introduce the person
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Method to simulate a birthday
    haveBirthday() {
        this.age += 1;
        console.log(`It's my birthday! I am now ${this.age} years old.`);
    }
}

// Creating an instance of the Person class
const person1 = new Person("John", 30);

// Calling methods on the instance
person1.introduce();       // Output: Hi, my name is John and I am 30 years old.
person1.haveBirthday();    // Output: It's my birthday! I am now 31 years old.
