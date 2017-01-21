function Character(id) {
    this.cage = game.add.sprite(-1000,-1000, 'cage');
    this.cage.scale.setTo(0.5);
    this.cage.anchor.setTo(0.5,0.5);
    switch(id) {
      case 0:
        this.name = 'agent';
        this.maxHealth = 10;
        this.sounds = ['a-01', 'a-02', 'a-03', 'a-04']; //replace with 6-nn
        this.sprite = game.add.sprite(640, 300, 'agent');
        this.sprite.animations.add('shock');
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.5);
        break;
      case 1:
        this.name = 'teen';
        this.maxHealth = 15;
        this.sounds = ['1-01', '1-02', '1-03', '1-04', '1-05', '1-06', '1-07', '1-08', '1-09', '1-10', '1-11', '1-12', '1-13', '1-14', '1-15', '1-16', '1-17', '1-18', '1-19', '1-20'];
        this.sprite = game.add.sprite(640, 300, 'teen');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.1);
        break;
      case 2:
        this.name = 'scientist';
        this.maxHealth = 20;
        this.sounds = ['3-01', '3-02', '3-03', '3-04', '3-05', '3-06', '3-07', '3-08', '3-09', '3-10', '3-11', '3-12', '3-13', '3-14', '3-15', '3-16', '3-17', '3-18', '3-19', '3-20'];
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
    this.heartRate = 60;
    this.sprite.anchor.setTo(0.5);

}
