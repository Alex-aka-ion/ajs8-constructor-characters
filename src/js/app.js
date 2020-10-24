// TODO: write your code here

import Bowman from './Bowman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';

const bowerman = new Bowman('b1');
const daemon = new Daemon('d2');
const magician = new Magician('m3');
const swordsman = new Swordsman('s4');
const undead = new Undead('u5');
const zombie = new Zombie('z6');

console.log(bowerman);
bowerman.damage(10);
console.log(bowerman);
bowerman.levelUp();
console.log(bowerman);
bowerman.damage(5);
console.log(bowerman);
bowerman.damage(500);
console.log(bowerman);

daemon.levelUp();
magician.levelUp();
swordsman.levelUp();
undead.levelUp();
zombie.levelUp();
