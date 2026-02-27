
// interface with methods

interface Product {
    name: string;
    price: number;
    getDiscount(percent:number):number;
};

let laptop: Product = {
    name: "Macbook Pro",
    price: 2000,
    getDiscount(percentage :number):number{
        return this.price * (percentage/100);
    }
}