// Basic Types :-
// Number:-
let num: number = 1234_567_8910;
console.log(num);

// Array, String, Undefined
let numArray: number[] = [1,2,3,4,5];
let stringArray: string[] = ["Yash","Nisha","Sunita","Sachida","Vaanya","Ekaksh"];
let val: undefined = undefined; // if i am giving the value of variable as undefined so i couldn't assign any number or string to it i have ot give it a undefined.

// Object and object Manipulation
let obj: Object = {
    firstName:"Yash",
    lastName:"Singh",
    age:22
}
// Also:-
let obj2: {firstName: string , lastName: string, age: number } = {
    firstName:"Yash",
    lastName:"Singh",
    age:22
}
console.log(obj2)
// Make copy for the values inside obj2
let obj3 = {...obj2};
console.log(obj3)
// Redefine the obj2 or add additional parameter:-
let obj1 = {...obj2, phone:678459287945 };
console.log(obj1)


// Any:-
let numVal; //so this a any data type in typeScript as i haven't specified the type , also on hovering it, it is showing us the value as "any";
numVal= 1; // assigned the type as number;
numVal= "Yash Singh"; // assigned the type as string;

function testAnyType(val: any){
    console.log(val);
}


// Tuple :-
let arr: [number, string] = [10, "Yash"];
let coOrdinates3D: [number, number, number] = [10, 5, 8]; // (x,y,z) axis


// Enum
enum Color { Red, Green, Blue };
console.log(Color.Blue) // 2 as we did't have given any values to assigned variable it is returning us the Index Number

enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
}
console.log(Color.Blue) // blue



// Unknown Type:-
let notSure: unknown = 'a';
if(typeof(notSure) === 'number'){
    notSure.toFixed(2);
}else if(typeof(notSure) === 'string'){
    notSure.length;
}




// Never Type:-
function infiniteLoop(): never {
    while(true){
        console.log(1);
    }
}
infiniteLoop() // infinite loop prints only 1 infinite times;
// Also used to throw error like:-
function throwError( message: string ): never {
    throw new Error(message);
}
throwError('Something Went Wrong') //Something Went Wrong



// Type inference & assertions
// Inference
let username = "YASH"; // TypeScript infers the type as string
// Assertion
let someValue: any = "Hello World";
let strLength: number = (someValue as string).length; // as is a keyword used to use the assertion type {here someValue is converted to string and then we find the length of it and saved in in a variable strLength.}
console.log(strLength); // 11



// Union Types:-
let id: number | string | boolean;
id = 'Yash';
id = 34;
id = true;




// Interface (doesn't generates the code it used just for type checking)
interface Person {
    name: string,
    age: number,
    greet(): void,
}
// UseCase :-
let person: Person = {
    name: "Yash",
    age: 23,
    greet(){
        console.log("Hello Yash");
    }
}
person.greet(); // Hello Yash


// Interface with Function types:-
interface MathOP{
    (a:number, b:number): number;
}
const add: MathOP = (x,y) => x+y;
const subtract: MathOP = (x,y) => x-y;
console.log(add(4,6)); //10
console.log(subtract(6,4)); //2




// Type Alias:-
type = AliasName: typeDefination; //syntax
type UserID = string;
let userID: UserID = "Yash";
type Person = {
    name: string,
    age: number,
}
let person: Person = {
    name:"Yash",
    age:22,
}
console.log(person.name); // Yash

type ID = string | number;
let userid1: 'Yash';
let orderid: 345;
interface User {
    name: string,
    phone: number,
}
interface Customer extends User { // in Interface Type we can call one interface in another.
    address: string,
}
let myCustomer: Customer = {
    name: "Yash",
    phone: 7877668465,
    address: "Delhi",
}

// => lets do same with type
type Vehicle = {
    make: string,
    model: string,
}
type car = Vehicle & {  // & -> Intersection Types;
    isElectric: boolean,
}
let myCar: car = {
    isElectric: true,
    make: "TATA",
    model: "C300DL1",
}
