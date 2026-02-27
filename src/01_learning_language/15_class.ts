class Person{

    //properties
    private name: string;
    protected age: number;
    public email : string;

    //constructor
    constructor(name:string, age:number, email:string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    //methods
    public introduce():string{
        return `Hi, I'm ${this.name} and I'm ${this.age} years old!`;
    }

    //getters
    public getName():string{
        return this.name;
    }

    //setters
    public setName(name:string):void{
        this.name = name;
    }
}

// now this all can be written shortly as well

class Employee {
    constructor(
        private id: number,
        public name: string,
        protected department: string,
    ){};

    getDetails():string{
        return `${this.name} works in ${this.department} department`;
    }
}

let abhinay = new Employee(101,"Abhinay","Tech");
console.log(abhinay.getDetails());

class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        department: string,
        private teamSize: number,
    ){
        super(id,name,department);
    }

    getTeamInfo(): string{
        return `${this.name} manages ${this.teamSize} prople.`;
    }
}