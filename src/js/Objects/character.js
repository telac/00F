function Character(id) {
    this.cage = game.add.sprite(-1000,-1000, 'cage');
    this.cage.scale.setTo(0.5);
    this.cage.anchor.setTo(0.5,0.5);
    switch(id) {
      case 0:
        this.name = 'agent';
        this.maxHealth = 10;
        this.sounds = ['a-01', 'a-02', 'a-03', 'a-04'];
        this.sprite = game.add.sprite(640, 300, 'agent');
        this.sprite.animations.add('shock');
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.5);
        break;
      case 1:
        this.name = 'teen';
        this.maxHealth = 15;
        this.sounds = ['b-01', 'b-02', 'b-03', 'b-04'];
        this.sprite = game.add.sprite(640, 300, 'teen');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.1);
        break;
      case 2:
        this.name = 'scientist';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(640, 300, 'scientist');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.1);
        break;
      case 3:
        this.name = 'darkRed';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'darkRed');
        this.sprite.scale.setTo(0.5);
        break;
      case 4:
        this.name = 'lightGreen';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'lightGreen');
        this.sprite.scale.setTo(0.5);
        break;
      case 5:
        this.name = 'purple';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'purple');
        this.sprite.scale.setTo(0.5);
        break;
      case 6:
        this.name = 'lightRed';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'lightRed');
        this.sprite.scale.setTo(0.5);
        break;
      default:
        console.log("ya u don fucked up");
    }
    this.health = this.maxHealth;
    this.alive = true;
    this.sprite.anchor.setTo(0.5);

}
