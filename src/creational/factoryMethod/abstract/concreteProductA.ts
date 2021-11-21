import Product from "./product";

export default class ConcreteProductA implements Product {
    doStuff(): void {
        console.log('🚀');
    }    
}