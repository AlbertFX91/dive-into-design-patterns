import ProductB from "./productB";

export default class ConcreteProductB1 implements ProductB {
    getStyle(): string {
        return "ConcreteProductB style"
    }
}