import Entity from "./entity";

export default abstract class EnemyFactory {
    abstract createEnemy(): Entity;

    createEnemies(size: number = 10): Entity[] {
        return Array(size).fill(0).map(() => this.createEnemy());
    }
}