var Game = function () {};

Game.prototype = {
  create: function() {
    window.setTimeout(function() {
        game.world.alpha = 1.0;
    }, 10);

    this.background = game.add.sprite(0, 0, 'background');

    this.eel = game.add.sprite(300,120, 'eel');
    this.eel.scale.setTo(0.3, 0.3);
    this.eelPosition = 2;

    //the victims of interrogative committee
    this.lightBlue = game.add.sprite(100,200, 'lightBlue');
    this.darkBlue = game.add.sprite(300,200, 'darkBlue');
    this.green = game.add.sprite(500,200, 'green');

    this.maxCharacters = 3;
    this.characters = [];
    for (var i = 0; i <= 2; i++) {
      this.characters.push(i);
    }

    this.characters = this.shuffle(this.characters);
    for (var i = 0; i <= 0; i++) {
      this.characters.pop();
    }
    //console.log(this.characters);

    //scales
    this.lightBlue.scale.setTo(0.5, 0.5);
    this.darkBlue.scale.setTo(0.5, 0.5);
    this.green.scale.setTo(0.5, 0.5);


    this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    // actions for leftKey and rightKey
    this.leftKey.onDown.add(this.eelLeft, this);
    this.rightKey.onDown.add(this.eelRight, this);
    this.downKey.onDown.add(this.dealDamage)
  },

  update: function() {
    this.eel.x = 100 + this.eelPosition * 200;

    if (this.enterKey.isDown) {
      game.state.start("Victory");
    }

  },

  eelLeft : function() {
    this.eelPosition--;
    if (this.eelPosition < 0)
      this.eelPosition = 0;
  },
  eelRight : function() {
    this.eelPosition++;
    if (this.eelPosition > 2)
      this.eelPosition = 2;
  },
  dealDamage : function() {
    game.sound.play('a-01');
    console.log("deal damage to:" + this.eelPosition);
  },

  shuffle : function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;

  }

}
