function Character(id) {
    switch(id) {
      case 0:
        this.name = 'green';
        this.maxHealth = 10;
        this.sounds = ['a-01', 'a-02', 'a-03', 'a-04'];
        break;
      case 1:
        this.name = 'darkBlue';
        this.maxHealth = 15;
        this.sounds = ['b-01', 'b-02', 'b-03', 'b-04'];
        break;
      case 2:
        this.name = 'lightBlue';
        this.maxHealth = 20;
        this.sounds = ['c-01', 'c-02', 'c-03', 'c-04'];
        break;
      default:
        console.log("ya u don fucked up");
    }
    this.health = this.maxHealth;
}
