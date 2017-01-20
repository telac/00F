var Loading = function () {};

Loading.prototype = {

    loadScripts: function () {
        game.load.script("MenuScript", "js/States/menu.js");
        game.load.script("GameScript", "js/States/game.js");
        game.load.script("TutorialScript", "js/States/tutorial.js");
        game.load.script("VictoryScript", "js/States/victory.js");
    },

    loadImages: function () {
        // Backgrounds

        game.load.image('background', 'content/SCENE1.png');
        game.load.image("winscreen", "content/winscreen.png");
        game.load.image("menuscreen", "content/menu.png");
        game.load.image("tutorial-1", "content/tutorial.png");

        game.load.image("goaty", "content/goaty-small.png");
        game.load.image("grammi", "content/grammi.png");
        game.load.image("enter-key", "content/enter-key-small.png");

        // Characters
        game.load.image("eel", "content/img/characters/eel.png");
        game.load.image("light-blue", "content/img/characters/blue.png");
        game.load.image("dark-blue", "content/img/characters/darkblue.png");
        game.load.image("green", "content/img/characters/green.png");

    },

    loadSpritesheets: function() {
        game.load.spritesheet("playermini", "content/sprite.png", 150, 150, 3);
    },

    loadFonts: function () {
    },

    init: function () {
    },

    // Preload game assets
    preload: function () {
        this.background = game.add.sprite(0, 0, 'loadingscreen');
        game.load.onFileComplete.add(this.loadFileComplete, this);
        this.loadScripts();
        this.loadImages();
        this.loadSpritesheets();
        this.loadFonts();
    },

    addGameStates: function () {
        game.state.add("Menu", Menu);
        game.state.add("Tutorial", Tutorial);
        game.state.add("Game", Game);
        game.state.add("Victory", Victory);
    },

    create: function() {
        this.addGameStates();
        window.setTimeout(function() {
            game.state.start("Game");
            // game.state.start("Menu");
        }, 1000);
    },

    loadFileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        var scaler = 2.0;
        var totalNumberOfFlames = 5;
        var numberOfFlames = Math.floor(totalNumberOfFlames * progress / 100.0);
        var loadingSprite = game.add.sprite(0, 0, "loadingbar");
        loadingSprite.x = game.world.centerX + scaler * loadingSprite.width * (numberOfFlames - totalNumberOfFlames / 2.0);
        loadingSprite.y = game.world.centerY;
        loadingSprite.anchor.setTo(0.5, 0.5);
        loadingSprite.scale.setTo(scaler, scaler);
        loadingSprite.smoothed = false;
    },
}
