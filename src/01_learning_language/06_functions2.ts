

// Basic function with types
function add (a:number ,b:number):number{
    return a+b;
}

// optional parameters
// function greet(name: string, greeting:string):string{
//     return `Hello, ${name}`;
// }
function greet(name:string, greeting?:string):string{
    if(greeting){
        return `${greeting}, ${name}`;
    }
    return `Hello, ${name}`;
}

// default parameters
function multiply(a:number, b:number =1):number{
    return a*b;
}

// rest parameters
function sum(...numbers:number[]):number{
    return numbers.reduce((total,n)=>total+n,0);
}

//arrow functions
const divide = (a:number, b:number):number => a/b;

// function types
// we can define the function types as well
let calculate : (x:number, y:number) => number;
calculate = sum;



