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
}
