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
        this.maxHealth = 15;
        this.sounds = ['3-01', '3-02', '3-03', '3-04', '3-05', '3-06', '3-07', '3-08', '3-09', '3-10', '3-11', '3-12', '3-13', '3-14', '3-15', '3-16', '3-17', '3-18', '3-19', '3-20'];
        this.sprite = game.add.sprite(640, 300, 'scientist');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.1);
        break;
      case 3:
        this.name = 'president';
        this.maxHealth = 20;
        this.sounds = ['9-01', '9-02', '9-03', '9-04', '9-05', '9-06', '9-07', '9-08', '9-09', '9-10', '9-11', '9-12', '9-13', '9-14', '9-15', '9-16', '9-17', '9-18', '9-19', '9-20'];
        this.sprite = game.add.sprite(640, 300, 'president');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.5);
        break;
      case 4:
        this.name = 'eskimo';
        this.maxHealth = 25;
        this.sounds = ['2-01', '2-02', '2-03', '2-04', '2-05', '2-06', '2-07', '2-08', '2-09', '2-10', '2-11', '2-12', '2-13', '2-14', '2-15', '2-16', '2-17', '2-18', '2-19', '2-20'] ;
        this.sprite = game.add.sprite(640, 300, 'eskimo');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.65);
        break;
      case 5:
        this.name = 'granny';
        this.maxHealth = 5;
        this.sounds = ['4-01', '4-02', '4-03', '4-04', '4-05', '4-06', '4-07', '4-08', '4-09', '4-10', '4-11', '4-12', '4-13', '4-14', '4-15', '4-16', '4-17', '4-18', '4-19', '4-20'];
        this.sprite = game.add.sprite(640, 300, 'granny');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.2);
        break;
      case 6:
        this.name = 'robot';
        this.maxHealth = 8;
        this.sounds = ['8-01', '8-02', '8-03', '8-04', '8-05', '8-06', '8-07', '8-08', '8-09', '8-10', '8-11', '8-12', '8-13', '8-14', '8-15', '8-16', '8-17', '8-18', '8-19', '8-20'];
        this.sprite = game.add.sprite(640, 300, 'robot');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.75);
        break;
      case 7:
        this.name = 'chimp';
        this.maxHealth = 14;
        this.sounds = ['7-01', '7-02', '7-03', '7-04', '7-05', '7-06', '7-07', '7-07', '7-09', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19', '7-20'];
        this.sprite = game.add.sprite(640, 300, 'chimp');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.75);
        break;
      case 8:
        this.name = 'biologist';
        this.maxHealth = 13;
        this.sounds = ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12', '10-13', '10-14', '10-15', '10-16', '10-17', '10-18', '10-19', '10-20'];
        this.sprite = game.add.sprite(640, 300, 'robot');
        this.sprite.animations.add('shock', [1, 0]);
        this.sprite.animations.play('shock', 1, false);
        this.sprite.scale.setTo(0.6);
        break;
      default:
        console.log("ya u don fucked up");
    }
    this.health = this.maxHealth;
    this.alive = true;
    this.heartRate = 60;
    this.sprite.anchor.setTo(0.5);
}
