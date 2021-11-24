
import AbstractFactory from "./factory/abstractFactory";

export default class Client {
    private factory: AbstractFactory;
    constructor(factory: AbstractFactory) {
        this.factory = factory;
    }
    public operation(): void {
        console.log(this.factory.createProductA().getName());
        console.log(this.factory.createProductB().getStyle());
    }
}