var Game = function () {};

var playerWon = false;
var chosenAlive = true;
Game.prototype = {
  create: function() {
    window.setTimeout(function() {
        game.world.alpha = 1.0;
    }, 10);
    playerWon = false;
    chosenAlive = true;
    this.sadistValue = -90;
    this.background = game.add.sprite(0, 0, 'background');
    this.background.scale.setTo(1280/this.background.width, 720/this.background.height);

    this.bmd = game.add.bitmapData(game.width, game.height);
  	this.bmd.addToWorld();
  	//	Disables anti-aliasing when we draw sprites to the BitmapData
  	this.bmd.smoothed = true;


    this.prisonPosition = 2;

    this.console = game.add.sprite(0, 0, 'console');
    this.console.scale.setTo(1280/this.console.width, 720/this.console.height);

    this.fishes = [];
    for (var i = 0; i <= 29; i++) {
      this.fishes.push(new Fish());
      this.fishes[i].tpToMid();
    }

    //cage for the characters

    //the victims of interrogative committee
    this.characters = [];
    for (var i = 0; i <= 6; i++) {
      this.characters.push(new Character(i));
    }

    this.characters = this.shuffle(this.characters);
    for (var i = 0; i <= 1; i++) {
      this.rm = this.characters.pop();
      this.rm.sprite.x = -1000;
      this.rm.sprite.y = -1000;
    }

    for (var i = 0; i <= 4; i++) {
      this.characters[i].sounds = this.shuffle(this.characters[i].sounds);
      this.characters[i].sprite.x = 120 + i*140;
      this.characters[i].sprite.y = 300;
      this.characters[i].cage.y = 200;
    }

    this.guilty = this.characters[Math.floor(Math.random() * this.characters.length)];
    console.log("guilty: " + this.guilty.name);
    this.theSound = this.guilty.sounds.pop();

    for (var i = 0; i <= 4; i++) {
      if (this.characters[i].name != this.guilty.name) {
        this.characters[i].sounds.pop();
        this.characters[i].sprite.x = +640 + (i)*640 - this.prisonPosition * 640;
      }
    }
    //console.log(this.characters);
    //salamaefektit
    this.flashBig = game.add.sprite(600, 180, 'flashBig');
    this.flashBig.scale.setTo(0.5);
    this.flashBig.alpha = 0;
    this.flashSmall = game.add.sprite(600,180,'flashSmall');
    this.flashSmall.scale.setTo(0.5);
    this.flashSmall.scale.setTo(0.5);
    this.flashSmall.alpha = 0;

    // the ankerias
    this.eel = game.add.sprite(640, 120, 'eel');
    this.eel.animations.add('wiggle', [0,0,0,1]);
    this.eel.animations.add('strike', [0,2]);
    this.eel.animations.play('wiggle', 5, true);
    this.eel.scale.setTo(0.3, 0.3);
    this.eel.anchor.setTo(0.5, 0.5);

    //HUD!
    this.electrify = game.add.button(game.world.centerX, 635, 'electrify', this.dealDamage, this, 0,0, 1);
    this.electrify.anchor.setTo(0.5);

    this.leftButton = game.add.button(game.world.centerX - 120, 625, 'direction', this.eelLeft, this,1,1,0);
    this.leftButton.scale.setTo(0.3, 0.3);
    this.leftButton.anchor.setTo(0.5, 0.5);

    this.rightButton = game.add.button(game.world.centerX + 120, 625, 'direction', this.eelRight  , this,1,1,0);
    this.rightButton.scale.setTo(-0.3, 0.3);
    this.rightButton.anchor.setTo(0.5, 0.5);

    this.selectButton = game.add.button(game.world.centerX + 318, 663, 'choose', this.selectTarget, this,0 , 1);
    this.selectButton.scale.setTo(0.5, 0.5);
    this.selectButton.anchor.setTo(0.5, 0.5);

    this.microphoneButton = game.add.button(50, 50, 'microfoni', this.playTheSound, this);
    this.microphoneButton.scale.setTo(0.7);
    this.microphoneButton.anchor.setTo(0.5);

    this.meter = game.add.sprite(175,695, 'meter');
    this.meter.scale.setTo(0.4);
    this.meter.anchor.setTo(0.5, 1);

    this.meterButton = game.add.sprite(140, 665, 'meterButton');
    this.meterButton.scale.setTo(0.5);
    this.orangeLight = game.add.sprite(33, 607, "orangeLight");
    this.orangeLight.scale.setTo(0.45);
    this.orangeLight.anchor.setTo(0.5);

    this.redLight = game.add.sprite(33, 647, "redLight");
    this.redLight.scale.setTo(0.45);
    this.redLight.anchor.setTo(0.5);
    this.redLight.alpha = 0;


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

  backgroundAnimation : function() {
    this.mod = 1200;
    this.angle = Math.sin(this.time.now/this.mod);
    this.angle_y = Math.sin(this.time.now/(this.mod*12));
    this.angle_2 = -Math.cos(this.time.now/this.mod);

    if (this.angle_2 < 0) {
      this.eel.scale.setTo(-0.3, 0.3);
    } else {
      this.eel.scale.setTo(0.3, 0.3);
    }

    this.eel.y  = 90 - 6 * this.angle_y;
    this.eel.x = 640 + 150 * this.angle;

    this.bmd.clear();
    this.bmd.ctx.beginPath();
    this.bmd.ctx.arc(1110, 565, 100, 0, 2*Math.PI, true);
    this.bmd.ctx.fillStyle = '#277309';
    this.bmd.ctx.fill();
    this.bmd.draw(this.characters[this.prisonPosition].sprite, 1110, 650);

    for (var i = 0; i <= 29; i++) {
      this.fishes[i].move();
    }

    this.orangeLight.alpha = Math.sin(this.time.now/250);

  },

  update: function() {
    this.meter.angle = this.sadistValue;
    this.backgroundAnimation();
    for(var i = 0; i <= 4; i++) {
        game.add.tween(this.characters[i].sprite).to({ x: 640 + (i)*640 - this.prisonPosition * 640 }, 50, Phaser.Easing.Linear.InOut, true, 0.1, 1000, true);
        game.add.tween(this.characters[i].cage).to({ x: 640 + (i)*640 - this.prisonPosition * 640 }, 50, Phaser.Easing.Linear.InOut, true, 0.1, 1000, true);
    }

    if (this.enterKey.isDown) {
      this.selectTarget();
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
    this.sadistValue += 2;
    if (this.sadistValue > 85) {
      plauerWon = false;
      game.state.start("Victory");
  }
    game.sound.play(s);
    console.log("deal damage to:" + this.characters[this.prisonPosition].name);
    this.characters[this.prisonPosition].sprite.play('shock', 1, false);
    this.eel.animations.play('strike', 5, false);
    this.flashBig.alpha = 1;
    this.eel.animations.currentAnim.onComplete.add(function() {this.eel.animations.play('wiggle', 5, true); this.flashBig.alpha = 0;},this);
    this.characters[this.prisonPosition].health -= 1;
    if (this.characters[this.prisonPosition].health < 0) {
      this.killCharacter();
    }
  },

  killCharacter : function() {
    this.characters[this.prisonPosition].sprite.loadTexture('rip', 0);
    this.characters[this.prisonPosition].alive = false;
    if (this.characters[this.prisonPosition] == this.guilty) {
      this.guilty.alive = false;
    }
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
    chosenAlive = this.guilty.alive;
    if (this.characters[this.prisonPosition] == this.guilty) {
      playerWon = true;
    }
    game.state.start("Victory");
  },

  playTheSound : function() {
    game.sound.play(this.theSound);
  }

}
