import Product from "./product";

export default abstract class Creator {
    abstract createProduct(): Product;
    
    public someOperation() {
        const p: Product = this.createProduct();
        p.doStuff();
    }
}