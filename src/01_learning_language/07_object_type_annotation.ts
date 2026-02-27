
// object type annotation

let user: {name:string; age:number} = {
    name: "Peter",
    age: 44,
};

// but we dont want to make our code messy.
// better choice is to define an interface

// Interface
interface User{
    name: String;
    age: number;
}

let user2: User = {
    name: "John",
    age: 99,
};

// options properties
interface Usera{
    name: string;
    age: number;
    email ?: string;
};

let user3: Usera = {
    name: "Abraham",
    age: 725,
};

// readonly properties

interface Userb{
    name: string;
    age: number;
    email ?: string;
    readonly id :number;
};

let user4: Userb = {
    name: "Issac",
    age: 400,
    email: "demoemail@gmail.com",
    id : 4
};

// user4.id = 10; -- ERROR - cant assign to id because its a readonly property