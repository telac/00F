function Fish() {
    this.cr();
}

Fish.prototype.tpToMid = function() {
    this.sprite.x = 1600 * Math.random() + 200;
}

Fish.prototype.move = function() {
    if (this.direction == 'right') {
      this.sprite.x += this.size * 10;
      if (this.sprite.x > 1400) {
        this.cr();
      }
    } else {
      this.sprite.x -= this.size * 10;
      if (this.sprite.x < -200) {
        this.cr();
      }
    }

}

Fish.prototype.cr = function() {
  this.direction = (Math.random() >= 0.5 ? 'left' : 'right');
  this.name = (Math.random() >= 0.5 ? 'fish1' : 'fish2');
  this.size = 0.1 + Math.random() / 3;
  if (this.sprite) this.sprite.destroy();
  if (this.direction == 'right') {
    this.sprite = game.add.sprite(-200, Math.random() * 400, this.name);
    this.sprite.scale.setTo(-this.size, this.size);
  } else {
    this.sprite = game.add.sprite(1400, Math.random() * 400, this.name);
    this.sprite.scale.setTo(this.size);
  }
  this.sprite.anchor.setTo(0.5);
  this.tween = game.add.tween(this.sprite);
  this.tween.to({y: '+20'}, 800, Phaser.Easing.Sinusoidal.InOut, true, delay = 0, repeat = -1, yoyo = true);
}
