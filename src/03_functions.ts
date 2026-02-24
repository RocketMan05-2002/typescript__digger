
let message: string = "Hello, Typescript!";
console.log(message);

function subscribe(message: string){
    console.log(message);
}

// function subscribe(message: string): void
// be default takes void as the return type for the function

function fun2(message:string){
    console.log(message);
    return "Hello";
}

// function fun2(message: string): string
// this by default will have the return type to be string

// we can do all this explicitly as well

function fun3(message: string):void{
    console.group(message);
    // return "Hello"; -- ERROR type number is not assignable to the type void
}