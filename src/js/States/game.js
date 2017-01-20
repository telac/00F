var Game = function () {};

Game.prototype = {
  create: function() {
    window.setTimeout(function() {
        game.world.alpha = 1.0;
    }, 10);

    this.background = game.add.sprite(0, 0, 'background');

    this.eel = game.add.sprite(400, 120, 'eel');
    this.eel.scale.setTo(0.3, 0.3);
    this.eel.anchor.setTo(0.5, 0.5);
    this.prisonPosition = 2;

    //the victims of interrogative committee
    this.characters = [];
    for (var i = 0; i <= 6; i++) {
      this.characters.push(new Character(i));
    }

    this.characters = this.shuffle(this.characters);
    for (var i = 0; i <= 0; i++) {
      this.rm = this.characters.pop();
      this.rm.sprite.x = -1000;
      this.rm.sprite.y = -1000;
      this.rm = this.characters.pop();
      this.rm.sprite.x = -1000;
      this.rm.sprite.y = -1000;
    }

    for (var i = 0; i <= 4; i++) {
      this.characters[i].sounds = this.shuffle(this.characters[i].sounds);
      this.characters[i].sprite.x = 120 + i*140;
      this.characters[i].sprite.y = 300;
    }

    this.guilty = this.characters[Math.floor(Math.random() * this.characters.length)];
    console.log("guilty: " + this.guilty.name);
    this.theSound = this.guilty.sounds.pop();

    for (var i = 0; i <= 4; i++) {
      if (this.characters[i].name != this.guilty.name) {
        this.characters[i].sounds.pop();
      }
    }
    //console.log(this.characters);

    //scales
    // this.lightBlue.scale.setTo(0.5, 0.5);
    // this.darkBlue.scale.setTo(0.5, 0.5);
    // this.green.scale.setTo(0.5, 0.5);

    //buttons
    this.shock = game.add.button(game.world.centerX, 550, 'shock', this.dealDamage, this);
    this.shock.scale.setTo(0.5, 0.5);
    this.shock.anchor.setTo(0.5, 0.5);

    this.leftButton = game.add.button(game.world.centerX - 100, 550, 'left', this.eelLeft, this);
    this.leftButton.scale.setTo(0.5, 0.5);
    this.leftButton.anchor.setTo(0.5, 0.5);

    this.rightButton = game.add.button(game.world.centerX + 100, 550, 'right', this.eelRight, this);
    this.rightButton.scale.setTo(0.5, 0.5);
    this.rightButton.anchor.setTo(0.5, 0.5);

    this.selectButton = game.add.button(game.world.centerX + 350, 550, 'target', this.selectTarget, this);
    this.selectButton.scale.setTo(0.5, 0.5);
    this.selectButton.anchor.setTo(0.5, 0.5);

    this.microfoneButton = game.add.button(50, 50, 'microfoni', this.playTheSound, this);
    this.microfoneButton.scale.setTo(0.5, 0.5);
    this.microfoneButton.anchor.setTo(0.5, 0.5);

    // button definitions
    this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    // actions for leftKey and rightKey
    this.leftKey.onDown.add(this.eelLeft, this);
    this.rightKey.onDown.add(this.eelRight, this);
    this.downKey.onDown.add(this.dealDamage, this);
  },

  update: function() {
    for(var i = 0; i <= 4; i++) {
        this.characters[i].sprite.x = +400 + (i)*400 - this.prisonPosition * 400;
    }
    //this.eel.x = 120 + this.prisonPosition * 140;

    if (this.enterKey.isDown) {
      game.state.start("Victory");
    }

  },

  eelLeft : function() {
    this.prisonPosition--;
    if (this.prisonPosition < 0)
      this.prisonPosition = 0;
  },
  eelRight : function() {
    this.prisonPosition++;
    if (this.prisonPosition > 4)
      this.prisonPosition = 4;
  },
  dealDamage : function() {
    var s = this.characters[this.prisonPosition].sounds[Math.floor(Math.random() * this.characters[this.prisonPosition].sounds.length)];
    //console.log(s);
    game.sound.play(s);
    console.log("deal damage to:" + this.characters[this.prisonPosition].name);
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
  },

  selectTarget : function() {
    console.log("select target:" + this.characters[this.prisonPosition].name);
  },

  playTheSound : function() {
    game.sound.play(this.theSound);
  }

}
