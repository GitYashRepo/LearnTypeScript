// Syntax
// Regular Function
function addNum(a:number , b:number):number {
    return a+b;
}
// console.log(addNum(4,6)); //10



// Optional and Default Parameter;
function greet(username: string, greeting: string): string{
    return `${greeting} ${username}`;
}
// console.log(greet("Yash","Hello")); // Hello Yash // notice the values i have given is in reverse order.
// Making the Above function Optional :-
function greetOpt(user: string, greet?:string): string{
    return `${greet ? greet : ''} ${user}`
}
// console.log(greetOpt("Yash", "Hello")); // Yash  after giving the greet value result is --> Hello Yash




//  Function Overloading:-  => We can define multiple function with same variable names known as function overwriting.
function getLength(value:string): number;
function getLength(value: any[]): number;
function getLength(value: any): number{
    return value.length;
}
// console.log(getLength("Yash Singh")); // 10
// console.log(getLength([2,5,6,7,5])); // 5




// Rest Parameter:- => allows a function to accept indefinate number of arguiments as an array format;
function sum(...numbers: number[]): number{
    return numbers.reduce((total, num)=>{
        return total + num;
    }, 0)
}
console.log(sum(1,2,3,4,5,6,7,8,9,10)); // 55
// Indepth Example:-
function greet1(greet: string, ...name: string[]): void{
    name.forEach((name)=>{
        console.log(`${greet} ${name}`); // Hello Yash   Hello Yuvraj    Hello Vishal
    })
}
greet1("Hello", "Yash", "Yuvraj", "Vishal");
