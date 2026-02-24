// similar to interfaces we have something claled as types in typescript

type Point = {
    x:number;
    y:number;
};

let point: Point = {x:10,y:20};

// type aliases for Primitives (its not just for objects)

type ID = string | number; // this property is called as union in typescript. more on it later

// in short ID could be string and it could be number as well

let userId: ID = "Abhinay";
let productId: ID = 123;
// let adminID: ID = true; error type boolean is not assignable to ID

