// delay the code from running for 2 seconds to allow the background image to load
setTimeout(function()
{
  // function to generate a random numeric value
<<<<<<< HEAD
  const randomNumber = (min, max) =>
=======
  const randomNumber = function(min, max) 
>>>>>>> 2afbbb5db1ec5c3cc29bdfc95203760c68c8d92d
  {
    const value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
  };

  // function to set name
<<<<<<< HEAD
  const getPlayerName = () =>
=======
  const getPlayerName = function() 
>>>>>>> 2afbbb5db1ec5c3cc29bdfc95203760c68c8d92d
  {
    let name = "";

    while (name === "" || name === null) 
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
      resetHealth: function() 
      {
        this.health = 40;
      }
    },
    {
      name: "Twin Cities",
      attack: randomNumber(8, 12),
      health: 70,
      weight: "Middleweight",
      resetHealth: function() 
      {
        this.health = 70;
      }
    },
    {
      name: "Zeus",
      attack: randomNumber(12, 18),
      health: 100,
      weight: "Heavyweight",
      resetHealth: function() 
      {
        this.health = 100;
      }
    }
  ];

<<<<<<< HEAD
  const fightOrSkip = () => 
=======
  const fightOrSkip = function() 
>>>>>>> 2afbbb5db1ec5c3cc29bdfc95203760c68c8d92d
  {
    // ask player if they'd like to fight or skip using fightOrSkip function
    let promptFight = window.prompt('Would you like to FIGHT or SKIP [20 gold] this battle? Enter "FIGHT" or "SKIP" to choose.');

<<<<<<< HEAD
    // check for different user input, make everything lowercase to eliminate case sensitive complications
    switch (true) 
    {
      // resturn user to start of function if they input nothing
      case promptFight === "" || promptFight === null:
          window.alert("You need to fill in the form! Please try again.");
          return fightOrSkip();
      
      // if user input "skip" check if they have over 20 gold if not keep fighting
      case promptFight.toLowerCase() === "skip":
          if (playerInfo.money >= 20) 
          {
            const confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");
            if (confirmSkip) 
            {
              window.alert(playerInfo.name + " has decided to skip this fight. What a loser!");
              // remove 20 "money" from the player
              playerInfo.money = Math.max(0, playerInfo.money - 20);
              return true;
            }
          } 
          else 
          {
            window.alert("You don't have enough money! The fight goes on!");
            return false;
          }
          break;
      
      // if user input "fight" return false and continue the fight
      case promptFight.toLowerCase() === "fight":
          return false;
      
      // catch any other cases the user can input and return them to the start of the function
      default:
          window.alert("Can you not spell?");
          return fightOrSkip();  
    }
  }

  // fight function (now with parameter for enemy's name)
  const fight = (enemy) =>
  {
    alert(`Player Info:\nHealth: ${playerInfo.health} \nAttack: ${playerInfo.attack} \nGold: ${playerInfo.money} \n\nEnemy Info:\nName: ${enemy.name} \nHealth: ${enemy.health} \nWeightclass: ${enemy.weight}`);

    while (playerInfo.health > 0 && enemy.health > 0) 
    {
      if (fightOrSkip()) 
      {
        // if true, leave fight by breaking loop
        break;
      }
      else
      {
        if (playerInfo.attack > 500)
        {
=======
    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) 
    {
      window.alert("You need to fill in the form! Please try again.");
      return fightOrSkip();
    }

    // set the user input to be all lowercase
    promptFight = promptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") 
    {
      // check if the player has enough money to skip, if not fight continues
      if (playerInfo.money >= 20)
      {
        // confirm player wants to skip
        const confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");

        // if yes (true), leave fight
        if (confirmSkip) 
        {
          window.alert(playerInfo.name + " has decided to skip this fight. What a loser!");
          // subtract money from playerMoney for skipping, but don't let them go into the negative
          playerInfo.money = Math.max(0, playerInfo.money - 20);

          // return true if player wants to leave
          return true;
        }
      }
      else 
      {
        window.alert("You don't have enough money! The fight goes on!");
        return false;
      }
    }
    // if player picks fight return false
    else if (promptFight === "fight")
    {
      return false;
    }
    // catch all other user error cases and return to start of function
    else
    {
        window.alert("Can you not spell?");
        return fightOrSkip();
    }
  }

  // fight function (now with parameter for enemy's name)
  const fight = function(enemy)
  {
    alert(`Player Info:\nHealth: ${playerInfo.health} \nAttack: ${playerInfo.attack} \nGold: ${playerInfo.money} \n\nEnemy Info:\nName: ${enemy.name} \nHealth: ${enemy.health} \nWeightclass: ${enemy.weight}`);

    while (playerInfo.health > 0 && enemy.health > 0) 
    {
      if (fightOrSkip()) 
      {
        // if true, leave fight by breaking loop
        break;
      }
      else
      {
        if (playerInfo.attack > 500)
        {
>>>>>>> 2afbbb5db1ec5c3cc29bdfc95203760c68c8d92d
          window.alert("You stand tall, your gears whirring to life as you focus all of your energy into your fist. A bright glow emitts from your clenched hand, sparks flying as your gears accelerate past their limits as you prepare to strike. With a fierce yell, you launch yourself at your enemy, punching them with all your might.");
          window.alert(`${enemy.name} was sent flying`);
          break;
        }
        else
        {
          // generate random damage value based on player's attack power
          let damagePlayer = randomNumber(playerInfo.attack - 3, playerInfo.attack);

          if (Math.random() <= 0.1)
          {
            damagePlayer *= 2;
            window.alert(`${playerInfo.name} hits a critical strike!!!`)
          }

          // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
          enemy.health = Math.max(0, enemy.health - damagePlayer);

          // check enemy's health
          if (enemy.health <= 0) 
          {
            window.alert(`${enemy.name} has died!`);

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
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

          // remove players's health by subtracting the amount set in the enemy.attack variable
          playerInfo.health = Math.max(0, playerInfo.health - damageEnemy);

          // check player's health
          if (playerInfo.health <= 0) 
          {
            window.alert(`${playerInfo.name} has died!`);
            // leave while() loop if player is dead
            break;
          } 
          else 
          {
            window.alert(`${playerInfo.name} took ${damageEnemy} damage! ${playerInfo.name} still has ${playerInfo.health} health left.`);
          }
        }
      }
    }
  };

  // function to start a new game
<<<<<<< HEAD
  const startGame = () => 
=======
  const startGame = function() 
>>>>>>> 2afbbb5db1ec5c3cc29bdfc95203760c68c8d92d
  {
    // reset player stats
    playerInfo.reset();

    // fight each enemy robot by looping over them and fighting them one at a time
    for (let i = 0; i < enemyInfo.length; i++) 
    {
      // if player is still alive, keep fighting
      if (playerInfo.health > 0) 
      {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert(`Welcome to Robot Gladiators! Round ${(i + 1)}`);

        // pick new enemy to fight based on the index of the enemy.names array
        let pickedEnemyObj = enemyInfo[i];

        // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
        fight(pickedEnemyObj);

        // if player is still alive and we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) 
        {
          alert(`Player Info:\nHealth: ${playerInfo.health}/100 \nAttack: ${playerInfo.attack} \nGold: ${playerInfo.money}`);
          // ask if player wants to use the store before next round
          let storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
          // if yes, take them to the store() function
          if (storeConfirm) 
          {
            shop();
          }
        }
      }

      // if player is not alive, break out of the loop and let endGame function run
      else 
      {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }

    // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
    endGame();
  };

  // function to end the entire game
<<<<<<< HEAD
  const endGame = () =>
=======
  const endGame = function() 
>>>>>>> 2afbbb5db1ec5c3cc29bdfc95203760c68c8d92d
  {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins!
    if (playerInfo.health > 0) 
    {
      window.alert(`Great job, you've survived the game! You now have a score of ${playerInfo.money}.`);
    } 
    else 
    {
      window.alert("You've lost your robot in battle!");
    }

    // ask player if they'd like to play again
    const playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) 
    {
      // reset each enemies health before the next game
      for (let i = 0; i < enemyInfo.length; i++) 
      {
        enemyInfo[i].resetHealth();
      }

      startGame();
    } 
    else 
    {
      window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
  };

  // go to shop between battles function
<<<<<<< HEAD
  const shop = () =>
=======
  const shop = function() 
>>>>>>> 2afbbb5db1ec5c3cc29bdfc95203760c68c8d92d
  {
    // ask player what they'd like to do
    let shopOptionPrompt = window.prompt(
      'Please type a number to make a choice. \n1 to REFILL your health by 50  [7 gold] \n2 to UPGRADE your attack  [7 gold] \n3 to PLUS ULTRA  [50 gold] \n4 to LEAVE the store'
    );

    shopOptionPrompt = parseInt(shopOptionPrompt);

    // use switch case to carry out action
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

  // start first game when page loads
  startGame();

}, 1000);