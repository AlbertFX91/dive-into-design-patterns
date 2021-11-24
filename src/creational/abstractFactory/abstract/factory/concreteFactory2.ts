import ConcreteProductB2 from "../product/concreteProductB2";
import ConcreteProductA2 from "../product/concreteProductA2";
import ProductA from "../product/productA";
import ProductB from "../product/productB";
import abstractFactory from "./abstractFactory";

export default class ConcreteFactory2 implements abstractFactory {
    createProductA(): ProductA {
        return new ConcreteProductA2();
    }
    createProductB(): ProductB {
        return new ConcreteProductB2();
    }

}