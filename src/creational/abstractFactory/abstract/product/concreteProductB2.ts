import ProductB from "./productB";

export default class ConcreteProductB2 implements ProductB {
    getStyle(): string {
        return "ConcreteProductB2 style"
    }
}