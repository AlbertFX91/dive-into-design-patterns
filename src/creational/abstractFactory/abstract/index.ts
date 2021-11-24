import Client from "./client";
import ConcreteFactory1 from "./factory/concreteFactory1";
import ConcreteFactory2 from "./factory/concreteFactory2";


const client1: Client = new Client(new ConcreteFactory1());
const client2: Client = new Client(new ConcreteFactory2());

client1.operation();
client2.operation();