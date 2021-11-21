import Entity from "../entity";

export default class Skull implements Entity {
    public emoji(): string {
        return '💀'
    }
}