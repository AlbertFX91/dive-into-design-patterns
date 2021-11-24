import enemyBoss from "../enemy/enemyBoss";
import enemyMinion from "../enemy/enemyMinion";
import SnowEnemyBoss from "../enemy/snow/snowEnemyBoss";
import SnowEnemyMinion from "../enemy/snow/snowEnemyMinion";
import EnemyFactory from "./enemyFactory";

export default class SnowEnemyFactory implements EnemyFactory {
    createMinion(): enemyMinion {
        return new SnowEnemyMinion();
    }
    createBoss(): enemyBoss {
        return new SnowEnemyBoss();
    }
}