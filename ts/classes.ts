// OOPS Part:-
// Class
class Person{
    name: string;
    age: number;
    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    };
    greet(): string{
        return `Hello, my name is ${this.name} & I am ${this.age} yrs old`;
    }
}
const new_Person = new Person("Yash", 22);
console.log(new_Person.greet());


// Note:- method and functions are same things
/*
Access Modifiers (Public , Private, Protected)
Public - Accessible from anywhere. This is default if no modifier is specified.
Private - Accessible only within the class.
Protected - Accessible within the class and its subclasses.
*/
class Car1{
    public make: string;
    private model: string;
    protected year: number;

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getModel():string{
        return this.model; // here it is accessible as it in used inside the Car1 class
    }
}

const newCar = new Car1("Tesla", "Model 2", 2016);
// console.log(newCar.year); // not accessible
// console.log(newCar.model); // not accessible
// console.log(newCar.getModel()); // Model 2




// Inheritance

