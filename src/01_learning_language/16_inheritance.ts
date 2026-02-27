class Employee {
    constructor(
        private id: number,
        public name: string,
        protected department: string,
    ){}

    getDetails(): string {
        return `${this.name} works in ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        department: string,
        private teamSize: number,
    ){
        super(id, name, department);
    }

    getTeamInfo(): string {
        return `${this.name} manages ${this.teamSize} people.`;
    }
}

const m = new Manager(1, "Abhinay", "Tech", 5);

console.log(m.getDetails());
console.log(m.getTeamInfo());