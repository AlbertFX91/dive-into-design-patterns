import ProductA from "./productA";

export default class ConcreteProductA1 implements ProductA {
    getName(): string {
        return "My concrete product A";
    }

}