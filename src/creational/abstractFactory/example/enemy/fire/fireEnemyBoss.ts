import EnemyBoss from "../enemyBoss";

export default class FireEnemyBoss implements EnemyBoss {
    private type: string = "🔥"
    
    getElemType(): string {
        return this.type;
    }
    getRepresentation(): string {
        return `${this.type}😈`
    }

}