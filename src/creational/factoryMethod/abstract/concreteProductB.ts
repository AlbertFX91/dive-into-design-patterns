import Product from "./product";

export default class ConcreteProductB implements Product {
    doStuff(): void {
        console.log("🌲")
    }
}