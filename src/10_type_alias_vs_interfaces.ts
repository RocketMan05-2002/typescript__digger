
// Type alias vs Interfaces

// 1. interfaces can be extended but type aliases cant be extended

interface Animal {
    name: string;
};

interface Dog extends Animal{
    age: number;
}

let dog: Dog = {
    name: "Buddy",
    age: 5
};

// 2. interfaces can be declared multiple times and will merge into each other

interface Flower{
    name: String;
}

interface Flower{
    isBeautiful: boolean;
}

let lily: Flower = {
    name: "lily",
    isBeautiful: true,
};

// 3. usage
// interfaces are used for object shapes
// type aliases are used for unions/intersections

