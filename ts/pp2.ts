/*
    Q1- Create a Bank Account Class: Write a Bank Account class with the following properties:
    accountNumber: string
    balance: number
    The Class should have methods :
    deposit(amount:number) : void (to add to balance);
    withdraw(amount:number) : void (to subtract from balance);
    getBalance(): number (to return current balance)
*/
class BankAcc{
    private balance: number;
    constructor(public accountNumber: string , initialBalance: number){
        this.balance = initialBalance;
    }
    deposit(amount: number): void{
        this.balance += amount;
    }
    withdraw(amount: number): void{
        if(amount> this.balance){
            throw new Error("Insufficient Balance");
        }
        this.balance -= amount;
    }
    getBalance(): number{
        return this.balance
    }
}
const myAcc = new BankAcc('HJGDHFIAEBI', 50000);
myAcc.deposit(15000);
myAcc.withdraw(47000);
// console.log(myAcc.getBalance()); // 18000



/*
    Q2- Create an Employee Class with inheritance:-
    Define an Employee class with properties name and salary.
    Create a subClass Manager that add a department property.
    Both classes should have a getDetails method to return a string with the Employee's Details
*/
class Employee{
    constructor(
        public name: string,
        public salary: number,
    ){}
    getDetails(): string{
        return `Employee: ${this.name}, Salary: ${this.salary}`;
    }
}
class Manager extends Employee{
    constructor(
        name: string,
        salary: number,
        public department: string,
    ){super(name,salary)}
    getDetails(): string {
        return `Manager: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
    }
}
const emp = new Employee("Yash", 75000);
const mng = new Manager("Yuvraj", 70000, "IT");

// console.log(emp.getDetails()); // Employee: Yash, Salary: 75000
// console.log(mng.getDetails()); // Manager: Yuvraj, Salary: 70000, Department: IT
