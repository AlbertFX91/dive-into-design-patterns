import ProductA from "../product/productA";
import ProductB from "../product/productB";

export default interface abstractFactory {
    createProductA(): ProductA;
    createProductB(): ProductB;
}