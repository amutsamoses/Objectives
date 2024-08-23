//Basic types in TypeScript
//TypeScript is a statically typed language, which means that the type of a variable is known at compile time.

//we will see the following types:
//Interfaces, Classes, and functions are the building blocks of TypeScript.
//How to work with the DOM and Typescript
//Generic types
//How to use namespaces
//How to merge declarations
//How to use an ambient Namespace to import an external library
//Basic nominal typing with Typescript

//1. basic types in TypeScript
//boolean
let isDone: boolean = false;
//number
let decimal: number = 6;
//string
let color: string = "blue";
//array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; //Array<number>
//tuple
let x: [string, number];
x = ["hello", 10]; // OK
//x = [10, "hello"]; // Error
//enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//void
function warnUser(): void {
  console.log("This is my warning message");
}
//null and undefined
let u: undefined = undefined;
let n: null = null;
//never
// Function returning never must not have a reachable end point i.e must have an unreachable end point
//reachable end point means a point where the function can return a value
//unreachable end point means a point where the function can't return a value
function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}
//object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
let obj: object = { name: "John", age: 30 };
//Type assertions
//Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
//or
let strLength2: number = (<string>someValue).length;

//2. Interfaces
//Interfaces are used to define contracts in your code and are a way to define custom types.
//they define the structure that an object must have.
interface LabelledValue {
  size: number;
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" }; //{size: 10, label: "Size 10 Object"} is called object literal since it is an object that has properties and values
printLabel(myObj); //and here we pass the object to the function printLabel

//Optional properties
//Interfaces can have optional properties, marked with a ?.
//This allows for flexibility in the properties you pass to an interface.
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

//Readonly properties
//Some properties should only be modifiable when an object is first created.
//You can specify this by putting readonly before the name of the property.
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!

//3. Classes
//i.Classes are used to create objects that have properties and methods.
//Classes can be extended and can implement interfaces.
//Classes can have a constructor method that is called when a new object is created.
//Classes can have properties and methods.
//Classes can have access modifiers that define the visibility of the properties and methods.
//Classes can be extended using the extends keyword.
//Classes can implement interfaces using the implements keyword.
//Classes can have static properties and methods.
//Classes can have abstract properties and methods.
//Classes can have getter and setter properties.
//now lets demonstrate the use of classes in TypeScript using the above points

//4. Genereic types
//Generics are a way to create reusable components in TypeScript.
//Generics allow you to define the type of a class, interface, or method at runtime.
//Generics are used to create classes, interfaces, and methods that work with any data type.
//example of generics
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString"); // type of output will be 'string'

//5. Namespaces
//Namespaces are used to organize code in a way that prevents naming conflicts.
//Namespaces can be nested inside other namespaces.
//Namespaces can be split across multiple files.
//Namespaces can be used to create a global object that can be accessed from anywhere in your code.
//Namespaces can be used to create a module-like structure in TypeScript.
//provide a way to group related interfaces, classes, and functions.
//example of namespaces
namespace Maths {
  export function add(x: number, y: number): number {
    return x + y;
  }
  export function subtract(x: number, y: number): number {
    return x - y;
  }
}
//to use the namespace we can do the following
let sum = Maths.add(10, 5);
let difference = Maths.subtract(10, 5);

//example 2:
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && /^[0-9]+$/.test(s);
    }
  }
}

let validator = new Validation.ZipCodeValidator(); //creates an instance of the ZipCodeValidator class
console.log(validator.isAcceptable("12345")); // true

//6. Merging declarations
//Merging declarations is a way to combine multiple declarations of the same entity in TypeScript.
//Merging declarations can be used to extend interfaces, classes, functions, and enums.
//Merging declarations can be used to add properties and methods to existing entities.
//Merging declarations can be used to add new functionality to existing entities.
//example of merging declarations
interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 };
//example 2:
class Animal {
  name!: string;
}
class Animals {
  type: string | undefined;
}
let cat = new Animal();
cat.name = "Tom";
let dog = new Animals();
dog.type = "Labrador";

//7. How to use an ambient Namespace to import an external library
//Ambient namespaces are used to import external libraries into your TypeScript code.
//Ambient namespaces are used to define the structure, provide type information,
//and  intellisense of external libraries.
//Ambient declarations allow TypeScript to understand the shape of code written elsewhere.
//example of ambient namespace
declare namespace jQuery {
  function ajax(url: string, settings: any): void;
}
//to use the ambient namespace we can do the following
jQuery.ajax("/api/get_user", { method: "GET" });

//8. Basic nominal typing with Typescript
//Nominal typing is a way to create distinct types in TypeScript.
//Nominal typing allows you to create types that are based on their name, not their structure.
//Nominal typing can be used to create types that are not compatible with other types.
//example of nominal typing
type USD = number;
type EUR = number;
let usd: USD = 20;
let eur: EUR = 30;
//usd = eur; // error: Type 'EUR' is not assignable to type 'USD'.
//example 2:
type Nominal<T, Name extends string> = T & { __brand: Name };
type USD2 = Nominal<number, "USD">;
type EUR2 = Nominal<number, "EUR">;

let price: USD2 = 20 as USD2;
let cost: EUR2 = 30 as EUR2; // error: Type 'USD2' is not assignable to type 'EUR2'.

//9. How to work with the DOM and Typescript
//TypeScript can be used to work with the DOM in the same way as JavaScript.
//TypeScript provides type definitions for the DOM API.
//TypeScript can be used to create interactive web applications.
//example of working with the DOM in TypeScript
let element = document.createElement("div");
element.textContent = "Hello, World!";
document.body.appendChild(element);

//how to set up .eslintrc.js file
