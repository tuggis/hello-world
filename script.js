console.log("Hello");

class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}

let person = new Person("Peter", 55);

console.log(person);

let persons = [new Person("Petter",44), new Person("Nils",44)]