var Menu = function () {};

Menu.prototype = {

    init: function () {

    },

    preload: function () {
        //Preload assets for the main menu in loading.js
    },

    create: function() {
        window.setTimeout(function() {
            game.world.alpha = 1.0;
        }, 10);

        this.background = game.add.sprite(0, 0, 'menuscreen');
        this.background.scale.setTo(1280/this.background.width, 720/this.background.height);

        this.playButton = game.add.button(1170, 710, 'playButton', this.next, this);
        this.playButton.scale.setTo(2.6);
        this.playButton.anchor.setTo(1);
        this.enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        this.fish1 = new Fish();
        this.fish1.tpToMid();
        this.fish2 = new Fish();
        this.fish2.tpToMid();

        this.title = game.add.text(415, 100, 'lipper ', {font: '60px Orbitron', fill: '#555450', fontStyle: 'italic'});
        game.time.events.add(Phaser.Timer.SECOND * 2, this.changeText, this);
    },

    next: function() {
      game.add
          .tween(game.world).to({alpha: 0.0}, 1000, Phaser.Easing.Linear.Out, true)
          .onComplete.add(function() {
              game.state.start("Tutorial");
          }, this);
    },

    update: function() {
        // Pressing the enter key starts the game
        if (this.enterKey.isDown) {
          this.next();
        }
        this.fish1.move();
        this.fish2.move();
    },

    changeText: function() {
      var textlist = ['lipper', 'in', 'urious', 'un', 'uuuuuuu', 'acinorous', 'adoodle', 'amulus', 'antassin', 'arad', 'arouche', 'atiloquent', 'atuous', 'emicide', 'eracious', 'ermi', 'erruginous', 'iddlededee', 'iddle-faddle', 'ierasfer'];
      var newText = textlist[Math.floor(Math.random() * textlist.length)] + ' ';
      while (newText == this.title.text) {
        newText = textlist[Math.floor(Math.random() * textlist.length)] + ' ';
      }
      this.tween = game.add.tween(this.title);
      this.tween.to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, delay = 0, repeat = 0, yoyo = true);
      game.time.events.add(Phaser.Timer.SECOND * 0.5, function() {this.title.setText(newText);}, this);
      this.tween.onComplete.add(function() {game.time.events.add(Phaser.Timer.SECOND * 2, this.changeText, this);}, this);
    }
}
