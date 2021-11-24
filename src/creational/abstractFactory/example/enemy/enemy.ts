export default interface Enemy {
    // Enemy element type: sand, fire, water
    getElemType(): string;
    getRepresentation(): string;
}