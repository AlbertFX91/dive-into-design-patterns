import EnemyBoss from "../enemy/enemyBoss";
import EnemyMinion from "../enemy/enemyMinion";

export default interface EnemyFactory {
    createMinion(): EnemyMinion;
    createBoss(): EnemyBoss;
}