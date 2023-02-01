// delay the code from running for 2 seconds to allow the background image to load
setTimeout(function()
{
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const getPlayerName = () =>
  {
    let name = prompt("What is your robot's name?");

    while (!name) 
    {
      name = prompt("What is your robot's name?");
    }

    console.log(`Your robot's name is ${name}`);
    return name;
  };

  const playerInfo = 
  {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    
    reset: function() 
    {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }, 

    refillHealth: function() 
    {
      if (this.money >= 7) 
      {
        window.alert("Refilling player's health by 50 for 7 dollars.");
        this.health += 50;
        this.money -= 7;
      } 
      else 
      {
        window.alert("You don't have enough money!");
      }
    },

    upgradeAttack: function() 
    {
      if (this.money >= 7) 
      {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else 
      {
        window.alert("You don't have enough money!");
      }
    },

    plusUltra: function()
    {
      if (this.money >= 50)
      {
        window.alert("You now push past your limits!")
        this.attack += 1000000;
        this.health += 200;
        this.money -= 50;
      }
      else 
      {
        window.alert("You don't have enough money!");
      }
    }
  };

  const enemyInfo = [
    {
      name: "Metro",
      attack: randomNumber(4, 8),
      health: 40,
      weight: "Lightweight",
    },

    {
      name: "Twin Cities",
      attack: randomNumber(8, 12),
      health: 70,
      weight: "Middleweight",
    },

    {
      name: "Zeus",
      attack: randomNumber(12, 18),
      health: 100,
      weight: "Heavyweight",
    }
  ];

  const resetEnemyHealth = () =>
  {
    const enemyDefaultHp = [40, 70, 100];
    
    for (let i = 0; i < enemyInfo.length; i++)
    {
      enemyInfo[i].health = enemyDefaultHp[i];
    }
  };


  const fightOrSkip = () => 
  {
    let promptFight = window.prompt('Would you like to FIGHT or SKIP [20 gold] this battle? Enter "FIGHT" or "SKIP" to choose.');

    switch (true) 
    {
      case promptFight === "" || promptFight === null:
          window.alert("You need to fill in the form! Please try again.");
          return fightOrSkip();
      
      case promptFight.toLowerCase() === "skip":
          if (playerInfo.money < 20) 
          {
            window.alert("You don't have enough money! The fight goes on!");
            return false;
          }

          const confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");

          if (confirmSkip) 
          {
            window.alert(playerInfo.name + " has decided to skip this fight. What a loser!");
            playerInfo.money = Math.max(0, playerInfo.money - 20);
            return true;
          }
          break;
      
      case promptFight.toLowerCase() === "fight":
          return false;
      
      default:
          window.alert("Can you not spell?");
          return fightOrSkip();  
    }
  }

  // fight function (now with parameter for enemy's name)
  const fight = (enemy) =>
  {
    alert(`Player Info:\nHealth: ${playerInfo.health} \nAttack: ${playerInfo.attack} \nGold: ${playerInfo.money} \n\nEnemy Info:\nName: ${enemy.name} \nHealth: ${enemy.health} \nWeightclass: ${enemy.weight}`);

    if(fightOrSkip()) return;

    while (playerInfo.health > 0 && enemy.health > 0) 
    {
      if (playerInfo.attack > 500)
      {
        window.alert("You stand tall, your gears whirring to life as you focus all of your energy into your fist. A bright glow emitts from your clenched hand, sparks flying as your gears accelerate past their limits as you prepare to strike. With a fierce yell, you launch yourself at your enemy, punching them with all your might.");
        window.alert(`${enemy.name} was sent flying`);
        break;
      }
      else
      {
        let damagePlayer = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        if (Math.random() <= 0.1)
        {
          damagePlayer *= 2;
          window.alert(`${playerInfo.name} hits a critical strike!!!`)
        }

        enemy.health = Math.max(0, enemy.health - damagePlayer);

        if (enemy.health <= 0) 
        {
          window.alert(`${enemy.name} has died!`);
          playerInfo.money = playerInfo.money + 20;
          break;
        } 
        else 
        {
          window.alert(`${enemy.name} took ${damagePlayer} damage! ${enemy.name} still has ${enemy.health} health left.`);
        }
        
        let damageEnemy = randomNumber(enemy.attack - 3, enemy.attack);

        if (Math.random() <= 0.1)
        {
          damageEnemy *= 2;
          window.alert(`${enemy.name} hits a critical strike!!!`)
        }

        playerInfo.health = Math.max(0, playerInfo.health - damageEnemy);

        if (playerInfo.health <= 0) 
        {
          window.alert(`${playerInfo.name} has died!`);
          break;
        } 
        else 
        {
          window.alert(`${playerInfo.name} took ${damageEnemy} damage! ${playerInfo.name} still has ${playerInfo.health} health left.`);
        }
      }
    }
  };

  const startGame = () => 
  {
    playerInfo.reset();

    for (let i = 0; i < enemyInfo.length; i++) 
    {
      if (playerInfo.health > 0) 
      {
        window.alert(`Welcome to Robot Gladiators! Round ${(i + 1)}`);

        let pickedEnemyObj = enemyInfo[i];

        fight(pickedEnemyObj);

        if (playerInfo.health > 0 && i < enemyInfo.length - 1) 
        {
          alert(`Player Info:\nHealth: ${playerInfo.health}/100 \nAttack: ${playerInfo.attack} \nGold: ${playerInfo.money}`);
          let storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
          if (storeConfirm) 
          {
            shop();
          }
        }
      }
      else 
      {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    endGame();
  };

  const endGame = () =>
  {
    window.alert("The game has now ended. Let's see how you did!");

    if (playerInfo.health > 0) 
    {
      window.alert(`Great job, you've survived the game! You now have a score of ${playerInfo.money}.`);
    } 
    else 
    {
      window.alert("You've lost your robot in battle!");
    }

    const playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) 
    {
      resetEnemyHealth();
      startGame();
    } 
    else 
    {
      window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
  };

  const shop = () =>
  {
    let shopOptionPrompt = window.prompt(
      'Please type a number to make a choice. \n1 to REFILL your health by 50  [7 gold] \n2 to UPGRADE your attack  [7 gold] \n3 to PLUS ULTRA  [50 gold] \n4 to LEAVE the store'
    );

    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch (shopOptionPrompt) 
    {
      case 1:
        playerInfo.refillHealth();
        break;

      case 2:
        playerInfo.upgradeAttack();
        break;

      case 3:
        playerInfo.plusUltra();
        break;

      case 4:
        window.alert("Leaving the store.");
        break;

      default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
    }
  };

  startGame();

}, 1000);