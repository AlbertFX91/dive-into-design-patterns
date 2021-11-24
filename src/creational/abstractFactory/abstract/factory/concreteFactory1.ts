import ConcreteProductB1 from "../product/concreteProductB1";
import ConcreteProductA1 from "../product/concreteProductA1";
import ProductA from "../product/productA";
import ProductB from "../product/productB";
import abstractFactory from "./abstractFactory";

export default class ConcreteFactory1 implements abstractFactory {
    createProductA(): ProductA {
        return new ConcreteProductA1();
    }
    createProductB(): ProductB {
        return new ConcreteProductB1();
    }

}