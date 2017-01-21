var Victory = function () {};

Victory.prototype = {
    init: function() {

    },

    preload: function() {

    },

    create: function() {
        // Setting world alpha doesn't seem to work if done
        // immediately after tweening. Needs a short delay.
        window.setTimeout(function() {
            game.world.alpha = 1.0;
        }, 10);

        if (playerWon) {
          this.background = game.add.sprite(0, 0, "winscreen");
        } else {
          this.background = game.add.sprite(0, 0, "losescreen");
        }
        this.background.scale.setTo(1280/this.background.width, 720/this.background.height);


        // Enter key sprite
        this.enterKeySprite = game.add.sprite(720, 510, 'enter-key');
        game.add.tween(this.enterKeySprite).
            to({y: '+10'}, 800, Phaser.Easing.Sinusoidal.InOut, true, delay = 0, repeat = -1, yoyo = true);

        var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        enterkey.onDown.add(this.backToMenu, this);

        this.buildingsBack = [];
        var x = 100;
        while (x < 1130) {
          var num = Math.round(Math.random()*2);
          if (num == 0) {
            var building = game.add.sprite(x, 720, 'sky1');
          } else if (num == 1) {
            var building = game.add.sprite(x, 720, 'sky2');
          } else {
            var building = game.add.sprite(x, 720, 'sky3');
          }
          building.anchor.setTo(0, 1);
          if (Math.random() < 0.5) {
            building.scale.setTo(1, 0.7 + Math.random()*3/10);
            x += building.width;
          } else {
            building.scale.setTo(-1, 0.7 + Math.random()*3/10);
            building.x -= building.width;
            x -= building.width;
          }
          building.tint = 0x444444 + Math.random()/10 * 0x020202;
          x += Math.round(Math.random()*5) + 5;
          this.buildingsBack.push(building);
        }

        this.wave = game.add.sprite(0, 370, 'wave');
        this.wave.anchor.setTo(0.5);

        this.buildingsFront = [];
        x = 200;
        while (x < 1030) {
          var num = Math.round(Math.random()*2);
          if (num == 0) {
            var building = game.add.sprite(x, 720, 'sky1');
          } else if (num == 1) {
            var building = game.add.sprite(x, 720, 'sky2');
          } else {
            var building = game.add.sprite(x, 720, 'sky3');
          }
          building.anchor.setTo(0, 1);
          if (Math.random() < 0.5) {
            building.scale.setTo(0.8, 0.5 + Math.random()*3/10);
            x += building.width;
          } else {
            building.scale.setTo(-0.8, 0.5 + Math.random()*3/10);
            building.x -= building.width;
            x -= building.width;
          }
          building.tint = 0x777777 + Math.random()/10 * 0x020202;
          x += Math.round(Math.random()*5) + 5;
          this.buildingsFront.push(building);
        }

        this.x = 0;
    },

    update: function() {
          this.wave.x = this.x;
          this.x++;
    },

    backToMenu: function() {
        game.add
            .tween(game.world).to({alpha: 0.0}, 1000, Phaser.Easing.Linear.Out, true)
            .onComplete.add(function() {
                game.state.start("Menu");
            }, this);
    },
};
