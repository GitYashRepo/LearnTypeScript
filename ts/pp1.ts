/*
Q1- Write a TypeScript function to calculate the factorial of a number with proper type annotations.
eg- 4*3*2*1 = 24
*/
function factorial(num: number): number{
    if(num === 0 || num === 1) return 1;
    return num * factorial(num-1);
}
// console.log(factorial(4)) // 24
// console.log(factorial(5)) // 120

/*
Q2- Define a function that accepts a user Object with name, age & email and return the formatted string.
*/
interface UserData{
    name: string,
    age: number,
    email: string,
}
function formatUser(user: UserData): string{
    return `User: ${user.name} Age:${user.age} Email: ${user.email}`;
}
const user: UserData = {
    name:"Yash",
    age: 22,
    email: "singhyash3012@gmail.com",
}
// console.log(formatUser(user)); // User: Yash Age:22 Email: singhyash3012@gmail.com



/*
Q3- Calculate Total Price: Write a TypeScript function that calculates the total Price of an array of objects. Each Product has Price and Quantity.
*/
interface Product{
    price:number,
    quantity:number,
}
function calcTotal(products: Product[]): number{
    return products.reduce((total, product)=> total + product.price * product.quantity, 0);
}
let cart: Product[] = [
    {price: 300, quantity: 4},
    {price: 800, quantity: 9},
]
// console.log(calcTotal(cart)); // 8400





/*
Q4- Define a Union type for a Vehicle that can Either be a car or a bike with different properties.Write a function to log details based on the vehicle type.
*/
type CarData ={
    type: 'car',
    make: string,
    model: string,
    year: number,
}
type BikeData ={
    type: 'bike',
    brand: string,
    cc: number,
}
type VehicleData = BikeData | CarData;
function getvehicleDetails(vehicle: VehicleData){
    if(vehicle.type === 'car'){
        console.log(`CAR: ${vehicle.make} ${vehicle.model} Year:${vehicle.year}`);
    }else if(vehicle.type === 'bike'){
        console.log(`BIKE: ${vehicle.brand} CC: ${vehicle.cc}`);
    }
}
let myCarDet: VehicleData = {
    type: 'car',
    make: "Tesla",
    model: "Model 2",
    year: 2016
}
let myBikeDet: VehicleData = {
    type: 'bike',
    brand: "JAWA",
    cc: 350,
}
getvehicleDetails(myCarDet); // CAR: Tesla Model 2 Year:2016
getvehicleDetails(myBikeDet); // BIKE: JAWA CC: 350
