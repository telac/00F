var Tutorial = function () {};

Tutorial.prototype = {
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

        this.pageNames = [
            'tutorial-1',
        ];
        this.currentPage = 0;
        this.setImage(this.pageNames[0]);

        this.enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.enterKey.onDown.add(function() {
            this.currentPage += 1;
            if (this.currentPage >= this.pageNames.length) {
                // Move to Game state after last tutorial
                this.startGame();
                return;
            }
            this.setImage(this.pageNames[this.currentPage]);
        }, this);

        this.escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        this.escKey.onDown.add(function() {
            this.startGame();
            return;
        }, this);

        this.enterKeySprite = game.add.sprite(720, 510, 'enter-key');
        game.add.tween(this.enterKeySprite).
            to({y: '+10'}, 800, Phaser.Easing.Sinusoidal.InOut, true, delay = 0, repeat = -1, yoyo = true);

        game.input.keyboard.addKeyCapture([Phaser.Keyboard.ENTER, Phaser.Keyboard.ESC]);
    },

    update: function() {
        this.enterKeySprite.bringToTop();
    },

    setImage: function(imageName) {
        // Destroy old sprite
        if (this.currentSprite != null) {
            this.currentSprite.destroy();
        }
        this.currentSprite = game.add.sprite(0, 0, imageName);
        this.currentSprite.smoothed = false;
    },

    startGame: function() {
        game.add
            .tween(game.world).to({alpha: 0.0}, 1000, Phaser.Easing.Linear.Out, true)
            .onComplete.add(function() {
                game.state.start("Game");
            }, this);
    },
};
