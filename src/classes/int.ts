//i.Classes are used to create objects that have properties and methods.
//example
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name as string;
    this.age = age;
  }
  //Classes can have properties and methods.
  //example
  //method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
