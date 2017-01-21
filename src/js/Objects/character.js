function Character(id) {
    switch(id) {
      case 0:
        this.name = 'agent';
        this.maxHealth = 10;
        this.sounds = ['a-01', 'a-02', 'a-03', 'a-04'];
        //this.sprite = game.add.sprite(-1000,-1000, 'lightBlue');
        this.sprite = game.add.sprite(640, 300, 'agent');
        this.sprite.animations.add('shock');
        this.sprite.animations.play('shock', 1, false);

        break;
      case 1:
        this.name = 'darkBlue';
        this.maxHealth = 15;
        this.sounds = ['b-01', 'b-02', 'b-03', 'b-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'darkBlue');
        break;
      case 2:
        this.name = 'darkGreen';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'darkGreen');
        break;
      case 3:
        this.name = 'darkRed';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'darkRed');
        break;
      case 4:
        this.name = 'lightGreen';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'lightGreen');
        break;
      case 5:
        this.name = 'purple';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'purple');
        break;
      case 6:
        this.name = 'lightRed';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        this.sprite = game.add.sprite(-1000,-1000, 'lightRed');
        break;
      default:
        console.log("ya u don fucked up");
    }
    this.health = this.maxHealth;
    this.sprite.scale.setTo(0.5);
    this.sprite.anchor.setTo(0.5);
}
