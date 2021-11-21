import ConcreteProductA from "./concreteProductA";
import Creator from "./creator";
import product from "./product";

export default class ConcreteCreatorA extends Creator {
    createProduct(): product {
        return new ConcreteProductA();
    }

}