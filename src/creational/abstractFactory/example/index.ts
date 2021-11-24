import Dungeon from "./dungeon";
import FireEnemyFactory from "./factory/fireEnemyFactory";
import SnowEnemyFactory from "./factory/snowEnemyFactory";

const fireDungeon: Dungeon = new Dungeon(new FireEnemyFactory());
fireDungeon.generateEnemies();

const snowDungeon: Dungeon = new Dungeon(new SnowEnemyFactory());
snowDungeon.generateEnemies();