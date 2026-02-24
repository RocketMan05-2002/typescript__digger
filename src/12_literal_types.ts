//String literal types

let direction : "north" | "south" | "east" | "west";
direction = "north";
console.log(direction);
//direciton is a variable and the mesh of these values is a String literal type

// Numeric literal types

let diceRoll : 1 | 2 | 3 | 4 | 5 | 6 ;
diceRoll = 1;
console.log(diceRoll);
// diceRoll is a variable and the mesh of these values is a Numeric literal type

// usage - Combining with other types

type SuccessResponse = {
    status: "Success";
    data: any;
};

type ErrorResponse = {
    status: "Error";
    message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

// As you know in OR function gives priority to first option and so on.
// so the idea is if we get a api response we'll assign it in apireponse or we'll use errorResponse
// that is how we can use literal types