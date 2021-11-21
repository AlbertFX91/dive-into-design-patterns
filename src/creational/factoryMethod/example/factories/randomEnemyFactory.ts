import EnemyFactory from "../enemyFactory";
import Invader from "../entities/invader";
import Skull from "../entities/skull";
import Zombie from "../entities/zombie";
import Entity from "../entity";

export default class RandomEnemyFactory extends EnemyFactory {
    createEnemy(): Entity {
        const enemiesTypes: any[] = [Zombie, Skull, Invader];
        const randomIndex: number = Math.floor(Math.random() * enemiesTypes.length) 
        const typeSelected = enemiesTypes[randomIndex];
        const enemy: Entity = new typeSelected() as Entity;
        return enemy;
    }
}