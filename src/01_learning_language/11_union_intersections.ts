// Union types (OR)

type Status = "pending" | "approved" | "rejected" ;

function setStatus(status : Status) : void{
    console.log(`Status set to, ${status}`);
}

setStatus("approved"); // we get 3 options to select value from

// that is the power of something like union types in typescript

// Intersection types (AND)

interface Colorful {
    color: string;
};

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

let myCircle:ColorfulCircle = {
    color: "Red",
    radius: 10
};