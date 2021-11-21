import Entity from "../entity";

export default class Zombie implements Entity {
    public emoji(): string {
        return '🧟'
    }
}