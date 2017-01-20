function Character(id) {
    switch(id) {
      case 0:
        this.name = 'green';
        this.maxHealth = 10;

        break;
      case 1:
        this.name = 'darkBlue';
        this.maxHealth = 15;
        break;
      case 2:
        this.name = 'lightBlue';
        this.maxHealth = 20;
        break;
      default:
        console.log("ya u don fucked up");
    }
    this.health = this.maxHealth;
}
