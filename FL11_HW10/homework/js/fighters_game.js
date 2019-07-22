const Fighter = function (obj) {

  let wins = 0;
  let losses = 0;

  this.getName = function () {
    return obj.name
  };

  this.getDamage = function () {
    return obj.damage
  };

  this.getAgility = function () {
    return obj.agility
  };

  this.getHealth = function () {
    return obj.hp
  };

  this.attack = function (fighter) {
    let maxLength = 100;
    let maxNumbRandom = 101;
    let probabilityOfSuccess = maxLength - fighter.getAgility();
    let randomNumber = Math.floor(Math.random() * maxNumbRandom);

    if (randomNumber > probabilityOfSuccess) {

      let hpFighter = fighter.getHealth() - this.getDamage();
      // при виклику функції повторно, hp віднімається знову від 100, ще не встигла зрозуміти, як це виправити :(
      //через це краще функцію battle не запускати
      return this.getName() + ' make ' + this.getDamage() + ' damage to '
          + fighter.getName() + '. ' + fighter.getName() + ' hp : ' + hpFighter;
    } else {
      // losses += 1;
      return `${ this.getName() } attack Missed`;
    }
  };

  this.logCombatHistory = function () {
    return `Name: ${ this.getName() }, Wins: ${ wins }, Losses: ${ losses }`
  };

  this.heal = function (amountOfHealth) {
    let maxHealth = 100;
    let health = this.getHealth() + amountOfHealth;
    if (health > maxHealth) {
      health = maxHealth;
      return health;
    } else {
      return health;
    }
  };

  this.dealDamage = function (amountOfHealth) {
    let health = this.getHealth() - amountOfHealth;

    if (health < 0) {
      health = 0;
      return health;
    } else {
      return health;
    }
  };

  this.addWin = function () {
    wins += 1;
    return wins;
  };

  this.addLoss = function () {
    losses += 1;
    return losses;
  }

};

const battle = function (battler1, battler2) {

  do {
    console.log(battler1.attack(battler2));
    console.log(battler2.attack(battler1));

  } while (battler1.getHealth !== 0 || battler2.getHealth !== 0);
  if (battler1.getHealth() === 0) {
    battler1.addLoss();
    battler2.addWin();
    return `${battler1.getName()} is dead and can't fight!`
  } else {
    battler2.addLoss();
    battler1.addWin();
    return `${battler2.getName()} is dead and can't fight!`
  }
};

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jim', damage: 10, hp: 100, agility: 40});

// let name = myFighter.getName();
// console.log(name); // John
//
// let damage = myFighter.getDamage();
// console.log(damage); // 20
//
// let agility = myFighter.getAgility();
// console.log(agility); // 25
//
// let health = myFighter.getHealth();
// console.log(health); // 100
//
// let getAttack =  myFighter.attack(myFighter2);
// console.log(getAttack);
//
// console.log(myFighter.logCombatHistory()); // Name: John, Wins: 0, Losses: 0
//
// console.log(myFighter.heal(10));
//
// console.log(myFighter.dealDamage(20));
// console.log(myFighter.addWin());
// myFighter.addLoss();

// console.log(battle(myFighter, myFighter2));


