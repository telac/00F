var Game = function () {};

Game.prototype = {
  create: function() {
    window.setTimeout(function() {
        game.world.alpha = 1.0;
    }, 10);

    this.background = game.add.sprite(0, 0, 'background');
    this.player = game.add.sprite(300,300, 'playermini');
    this.player.animations.add('jump');
    this.player.animations.play('jump', 10, true);

    this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

  },

  update: function() {

    if (this.upKey.isDown) {
        this.player.y--;
    } else if (this.downKey.isDown) {
        this.player.y++;
    }

    if (this.leftKey.isDown) {
        this.player.x--;
    } else if (this.rightKey.isDown) {
        this.player.x++;
    }

    if (this.enterKey.isDown) {
      game.state.start("Victory");
    }

  }
}
