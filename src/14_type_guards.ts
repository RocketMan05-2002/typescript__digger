
function processValue(value: string | number){
    if(typeof value === "string"){
        console.log(value.toUpperCase()); // ts automatically gives all string methods
    }
    else{
        console.log(value.toFixed(2)); // ts automatically gives all number methods
    }
}

// instanceof typeguard
class Dog{
    bark(){
        console.log("woof!");
    }
}

class Cat{
    meow(){
        console.log("meow!");
    }
}

function makeSound(animal : Dog | Cat){
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
}

// in this way we can add a typeguard to check what class we're working with.