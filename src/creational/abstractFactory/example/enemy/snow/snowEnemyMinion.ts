import EnemyMinion from "../enemyMinion";

export default class SnowEnemyMinion implements EnemyMinion {
    private type: string = "❄️"
    
    getElemType(): string {
        return this.type;
    }
    getRepresentation(): string {
        return `${this.type} ⛄`
    }

}