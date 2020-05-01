class Weapon{
  constructor({name, attack, durability, range} = {name: 'Рука', attack: 1, durability: Infinity, range: 1}) {
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
let arm = new Weapon({
  name: "Рука", 
  attack: 1, 
  durability: Infinity, 
  range: 1
});
let bow = new Weapon({
  name: "Лук", 
  atack: 10, 
  durability: 200, 
  range: 3
});
let sword = new Weapon({
  name: "Меч", 
  attack: 25, 
  durability: 500, 
  range: 1
});
let knife = new Weapon({
  name: "Нож", 
  attack: 5, 
  durability: 300, 
  range: 1
});
let staff = new Weapon({
  name: "Посох", 
  attack: 8, 
  durability: 300, 
  range: 2
});

function enhancedBow (name,attack, range){
this.name = name;
this.prototypeName = "bow"
this.attack = attack;
this.range = range;
}
enhancedBow.prototype = bow;

let longBow = new enhancedBow("Длинный лук", 15, 4);

function enhancedSword (name,attack, durability){
this.name = name;
this.prototypeName = "sword"
this.attack = attack;
this.durability = durability;
}
enhancedSword.prototype = sword;

let axe = new enhancedSword("Секира", 27, 800);


function enhancedStaff (name,attack, range){
this.name = name;
this.prototypeName = "staff"
this.attack = attack;
this.range = range;
}
enhancedStaff.prototype = staff;

let stormStaff = new enhancedStaff("Посох Бури", 10, 3);



class Arm extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1      
    });
  }
}

class Bow extends Weapon {
  constructor() {
    super({
      name: 'Лук',
      attack: 10,
      durability: 200,
      range: 3       
    });
  }
}
class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;  
  }
}

class Sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1
    });
  }  
}
class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.maxDurability = 800;
    this.durability = 800;
  }  
} 

class Knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1
    });
  }  
}

class Staff extends Weapon {
  constructor() {
    super({
      name: 'Посох',
      attack: 8,
      durability: 300,
      range: 2 
    });
  }  
}
class StormStaff extends Staff {
  constructor() {
    super();  
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;      
  }
}



class StudentLog{}; //<-- Для того чтобы работал Test- Runner . Без создания этого класса, первые две задачи он автоматически считает не верными
// так как везде ищет этот класс. 
