import enemyBoss from "../enemy/enemyBoss";
import enemyMinion from "../enemy/enemyMinion";
import FireEnemyBoss from "../enemy/fire/fireEnemyBoss";
import FireEnemyMinion from "../enemy/fire/fireEnemyMinion";
import EnemyFactory from "./enemyFactory";

export default class FireEnemyFactory implements EnemyFactory {
    createMinion(): enemyMinion {
        return new FireEnemyMinion();
    }
    createBoss(): enemyBoss {
        return new FireEnemyBoss();
    }
}