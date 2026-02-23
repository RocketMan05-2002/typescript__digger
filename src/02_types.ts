// primitives

let username: string = "Abhi";
let age: number = 23;
let isAdmin: boolean = true;

// arrays

let numbers: number[] = [1,2,3,4];
// let numbers: number[] = [1,2,3,"Hi"]; // -- ERROR. Type String is not assignable to the type "Number".

let names: string[] = ["Abhinay", "Pabish" ,"Queen"];
let person: [string, number] = ["Abhinay",23]; // -- TUPLE

enum Color{
    Red,
    Blue,
    Green
};

// ERROR - TypeScript enum is not supported in strip-only mode

let favoriteColor: Color = Color.Blue; // --ENUMERATION
console.log(favoriteColor);

// Any (avoid when possible)
let randomValue: any = 10;
randomValue = "Abhinay";
randomValue = true;

//Unknown
let userInput : unknown;
userInput = 5;
userInput = "Text";