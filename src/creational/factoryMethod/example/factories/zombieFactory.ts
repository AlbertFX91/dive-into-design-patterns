import EnemyFactory from "../enemyFactory";
import Zombie from "../entities/zombie";

export default class ZombieFactory extends EnemyFactory {
    createEnemy(): Zombie {
        return new Zombie();
    }
}