var Loading = function () {};

Loading.prototype = {

    loadScripts: function () {
        game.load.script("MenuScript", "js/States/menu.js");
        game.load.script("GameScript", "js/States/game.js");
        game.load.script("TutorialScript", "js/States/tutorial.js");
        game.load.script("VictoryScript", "js/States/victory.js");

        game.load.script("character", "js/Objects/character.js");
    },

    loadImages: function () {
        // Backgrounds
        game.load.image('background', 'content/img/backgrounds/vesitausta.png');
        game.load.image("winscreen", "content/winscreen.png");
        game.load.image("losescreen", "content/ulose.png");
        game.load.image("menuscreen", "content/menu.png");
        game.load.image("tutorial-1", "content/tutorial.png");

        game.load.image("goaty", "content/goaty-small.png");
        game.load.image("grammi", "content/grammi.png");
        game.load.image("enter-key", "content/enter-key-small.png");

        // Characters
        game.load.spritesheet("eel", "content/img/characters/eelSheet.png",520,520,2);
        game.load.image("lightBlue", "content/img/characters/blue.png");
        game.load.image("darkBlue", "content/img/characters/darkblue.png");
        game.load.image("darkGreen", "content/img/characters/darkgreen.png");
        game.load.image("darkRed", "content/img/characters/darkred.png");
        game.load.image("lightGreen", "content/img/characters/green.png");
        game.load.image("purple", "content/img/characters/purple.png");
        game.load.image("lightRed", "content/img/characters/red.png");

        // Buttons
        game.load.image("shock", "content/img/buttons/electrify1.png");
        game.load.image("left", "content/img/buttons/left.png");
        game.load.image("right", "content/img/buttons/right.png");
        game.load.image("target", "content/img/buttons/target.png");
        game.load.image("microfoni", "content/img/buttons/microfoni.png");

    },

    loadSpritesheets: function() {
        game.load.spritesheet("playermini", "content/sprite.png", 150, 150, 3);
    },

    loadAudio: function() {
        game.load.audio('a-01', 'content/audio/a-01.wav');
        game.load.audio('a-02', 'content/audio/a-02.wav');
        game.load.audio('a-03', 'content/audio/a-03.wav');
        game.load.audio('a-04', 'content/audio/a-04.wav');

        game.load.audio('b-01', 'content/audio/b-01.wav');
        game.load.audio('b-02', 'content/audio/b-02.wav');
        game.load.audio('b-03', 'content/audio/b-03.wav');
        game.load.audio('b-04', 'content/audio/b-04.wav');

        game.load.audio('c-01', 'content/audio/c-01.wav');
        game.load.audio('c-02', 'content/audio/c-02.wav');
        game.load.audio('c-03', 'content/audio/c-03.wav');
        game.load.audio('c-04', 'content/audio/c-04.wav');
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
        this.loadAudio();
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
