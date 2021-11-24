import Enemy from "./enemy/enemy";
import EnemyFactory from "./factory/enemyFactory";

export default class Dungeon {
    private factory: EnemyFactory;
    
    constructor(factory: EnemyFactory) {
        this.factory = factory;
    }

    generateEnemies(): void {
        const enemies: Enemy[] = [this.factory.createMinion(), this.factory.createBoss(), this.factory.createMinion()]
        console.log(enemies.map((enemy: Enemy) => enemy.getRepresentation()))
    }
}