import ConcreteProductB from "./concreteProductB";
import Creator from "./creator";
import product from "./product";

export default class ConcreteCreatorB extends Creator {
    createProduct(): product {
        return new ConcreteProductB();
    }

}