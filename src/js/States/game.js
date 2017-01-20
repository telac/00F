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

    this.green.health = 5;
    this.lightBlue.health = 10;
    this.darkBlue.health = 15;


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
    console.log("deal damage to:" + this.eelPosition);
  }

}
