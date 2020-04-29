class Weapone{
    constructor(name,attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.normalDurability = durability;
        this.range = range;
    }
    takeDamage(damage){
        this.durability =  this.durability - damage;
        if (this.durability < 0){
          this.durability = 0;
        }
    }
    getDamage(){
      if ((this.normalDurability / 100 * 30) <= this.durability) {
        return this.attack;
      }
      else if (this.durability == 0){
        return this.attack = 0;
      }
      else if ((this.normalDurability / 100 * 30) > this.durability) {
        return this.attack / 2 ; 
      }
    }
    isBroken() {
      return this.durability <= 0;
  }
}
let Arm = new Weapone("Рука", 1, Infinity, 1);
let Bow = new Weapone("Лук", 10, 200, 3);
let Sword = new Weapone("Меч", 25, 500, 1);
let Knife = new Weapone("Нож", 5, 300, 1);
let Staff = new Weapone("Посох", 8, 300, 2);

function enhancedBow (name,attack, range){
  this.name = name;
  this.prototypeName = "bow"
  this.attack = attack;
  this.range = range;
}
enhancedBow.prototype = Bow;

let longBow = new enhancedBow("Длинный лук", 15, 4);

function enhancedSword (name,attack, durability){
  this.name = name;
  this.prototypeName = "sword"
  this.attack = attack;
  this.durability = durability;
}
enhancedSword.prototype = Sword;

let axe = new enhancedSword("Секира", 27, 800);


function enhancedStaff (name,attack, range){
  this.name = name;
  this.prototypeName = "staff"
  this.attack = attack;
  this.range = range;
}
enhancedStaff.prototype = Staff;

let stormStaff = new enhancedStaff("Посох Бури", 10, 3);













