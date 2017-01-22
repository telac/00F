function Character(id) {
    this.cage = game.add.sprite(-1000,-1000, 'cage');
    this.cage.scale.setTo(0.5);
    this.cage.anchor.setTo(0.5,0.5);
    switch(id) {
      case 0:
        this.name = 'agent';
        this.maxHealth = 10;
        this.sounds = ['6-01', '6-02', '6-03', '6-04', '6-05', '6-06', '6-07', '6-08', '6-09', '6-10', '6-11', '6-12', '6-13', '6-14', '6-15', '6-16', '6-17', '6-18', '6-19', '6-20'];
        this.sprite = game.add.sprite(640, 300, 'agent');
        this.sprite.animations.add('shock');
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.5);
        break;
      case 1:
        this.name = 'teen';
        this.maxHealth = 15;
        this.sounds = ['5-01', '5-02', '5-03', '5-04', '5-05', '5-06', '5-07', '5-08', '5-09', '5-10', '5-11', '5-12', '5-13', '5-14', '5-15', '5-16', '5-17', '5-18', '5-19', '5-20'];
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
        this.name = 'president';
        this.maxHealth = 20;
        this.sounds = ['1-01', '1-02', '1-03', '1-04', '1-05', '1-06', '1-07', '1-08', '1-09', '1-10', '1-11', '1-12', '1-13', '1-14', '1-15', '1-16', '1-17', '1-18', '1-19', '1-20'];
        this.sprite = game.add.sprite(640, 300, 'president');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.5);
        break;
      case 4:
        this.name = 'eskimo';
        this.maxHealth = 20;
        this.sounds = ['2-01', '2-02', '2-03', '2-04', '2-05', '2-06', '2-07', '2-08', '2-09', '2-10', '2-11', '2-12', '2-13', '2-14', '2-15', '2-16', '2-17', '2-18', '2-19', '2-20'] ;
        this.sprite = game.add.sprite(640, 300, 'eskimo');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.65);
        break;
      case 5:
        this.name = 'granny';
        this.maxHealth = 20;
        this.sounds = ['4-01', '4-02', '4-03', '4-04', '4-05', '4-06', '4-07', '4-08', '4-09', '4-10', '4-11', '4-12', '4-13', '4-14', '4-15', '4-16', '4-17', '4-18', '4-19', '4-20'];
        this.sprite = game.add.sprite(640, 300, 'granny');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.2);
        break;
      case 6:
        this.name = 'robot'; // makerobotsounds
        this.maxHealth = 20;
        this.sounds = ['a-01', 'a-02', 'a-03', 'a-04'];
        this.sprite = game.add.sprite(640, 300, 'robot');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.75);
        break;
      default:
        console.log("ya u don fucked up");
    }
    this.health = this.maxHealth;
    this.alive = true;
    this.heartRate = 60;
    this.sprite.anchor.setTo(0.5);
}
