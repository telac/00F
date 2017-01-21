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

        // Enter key sprite
        this.keySprite = game.add.sprite(game.world.centerX, 1.5 * game.world.centerY, "enter-key");
        this.keySprite.anchor.set(0.5);
        this.keySprite.scale.setTo(3.0);
        this.keySprite.smoothed = false;
        this.keySpriteTween = game.add.tween(this.keySprite);
        this.keySpriteTween.to({y: '+20'}, 800, Phaser.Easing.Sinusoidal.InOut, true, delay = 0, repeat = -1, yoyo = true);

        this.enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    },

    update: function() {
        // Pressing the enter key starts the game
        if (this.enterKey.isDown) {
            game.add
                .tween(game.world).to({alpha: 0.0}, 1000, Phaser.Easing.Linear.Out, true)
                .onComplete.add(function() {
                    game.state.start("Tutorial");
                }, this);
        }
    },
}
