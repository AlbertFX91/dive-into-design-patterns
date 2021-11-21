import EnemyFactory from "./enemyFactory"
import Entity from "./entity"
import RandomEnemyFactory from "./factories/randomEnemyFactory"
import ZombieFactory from "./factories/zombieFactory"

const printEntitiesEmojis = (entity: Entity[]) => {
    console.log(entity.map((entity) => entity.emoji()));
}

printEntitiesEmojis(new ZombieFactory().createEnemies())
printEntitiesEmojis(new RandomEnemyFactory().createEnemies())