let someValue:unknown = "Subscribe to Rocketman!";

// let strLength:number = someValue.length; --ERROR - somevalue is of type unknown

let strLength:number = (someValue as string).length;

//OR

let str2Length:number = (<string>someValue).length; 

// both ways we can convert to string and we get access to all string methods