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
// console.log(new_Person.greet()); // Hello, my name is Yash & I am 22 yrs old


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
class Animal{
    constructor(public name: string){}
    makeSound(): void{
        console.log("Some Generic Sound...."); // Some Generic Sound.... { if function containing console-2 is not written then this one prints } i.e console-1
    }
}
class Dog extends Animal{
    constructor(name: string){
        super(name);
    }
    makeSound(): void {
        console.log("Bark"); // Bark {This will call first} i.e console-2
    }
}
const dog = new Dog("Puppy");
// dog.makeSound();



// Abstract Class:-
abstract class Shape{
    abstract getArea(): number;
    printArea(): void {
        console.log(`This area is ${this.getArea()}`)
    }
}
class Rectangle extends Shape {
    constructor(private width: number , private height: number){
        super();
    }
    getArea(): number {
        return this.width * this.height;
    }
}
const rect = new Rectangle(5,8);
// rect.printArea();






// Setters And Getters (Imp)
class Circle{
    private _radius: number;
    constructor(radius: number){
        this._radius = radius;
    }
    get radius():number{
        return this._radius;
    }
    set radius(value:number){
        if(value <= 0){
            throw new Error("Radius must be positive and a Non Zero");
        }
        this._radius = value;
    }
}

const circle = new Circle(10);
console.log(circle.radius); // 10
circle.radius = 15;
console.log(circle.radius);  // 15
