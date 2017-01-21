var Loading = function () {};

Loading.prototype = {

    loadScripts: function () {
        game.load.script("MenuScript", "js/States/menu.js");
        game.load.script("GameScript", "js/States/game.js");
        game.load.script("TutorialScript", "js/States/tutorial.js");
        game.load.script("VictoryScript", "js/States/victory.js");

        game.load.script("character", "js/Objects/character.js");
        game.load.script("fish", "js/Objects/fish.js");
    },

    loadImages: function () {
        // Backgrounds
        game.load.image('background', 'content/img/backgrounds/uusivesitausta.png');
        game.load.image("winscreen", "content/winscreen.png");
        game.load.image("chosenWrongAlive", "content/img/backgrounds/chosenwrongalive.png");
        game.load.image("chosenWrongDead", "content/img/backgrounds/chosenwrongdead.png");
        game.load.image("chosenRightDead", "content/img/backgrounds/chosenrightdead.png");
        game.load.image("backgroundOfDoom", "content/img/backgrounds/maisemaDOOM.png");
        game.load.image("menuscreen", "content/img/backgrounds/menu1.png");
        game.load.image("tutorial-1", "content/img/backgrounds/tutorial-1.png");

        game.load.image("enter-key", "content/enter-key-small.png");
        game.load.image('console', 'content/img/buttons/console.png');

        // Characters
        game.load.spritesheet("eel", "content/img/characters/eelSheet.png",520,520,3);
        game.load.image("lightBlue", "content/img/characters/blue.png");
        game.load.image("darkBlue", "content/img/characters/darkblue.png");
        game.load.image("darkGreen", "content/img/characters/darkgreen.png");
        game.load.image("darkRed", "content/img/characters/darkred.png");
        game.load.image("lightGreen", "content/img/characters/green.png");
        game.load.image("purple", "content/img/characters/purple.png");
        game.load.image("lightRed", "content/img/characters/red.png");
        game.load.image("rip", "content/img/characters/characterDead.png");

        //efektit
        game.load.image("cage", "content/img/misc/hakki.png");
        game.load.image("flashBig", "content/img/misc/isoSalama.png");
        game.load.image("flashSmall", "content/img/misc/pikkuSalama.png");
        // tausteoliot ja kalet
        game.load.image("fish1", "content/img/misc/kala1.png");
        game.load.image("fish2", "content/img/misc/kala2.png");

        // Buttons
        game.load.image("microfoni", "content/img/buttons/microfoni.png");
        game.load.image("wave", "content/img/misc/aalto.png");
        game.load.image("sky1", "content/img/misc/skyhouse1.png");
        game.load.image("sky2", "content/img/misc/skyscraper1.png");
        game.load.image("sky3", "content/img/misc/skypiercer1.png");
        game.load.image("meter", "content/img/buttons/mittarikeppi.png")
        game.load.image("meterButton", "content/img/buttons/meterButton.png")
        game.load.image("orangeLight", "content/img/buttons/oranssivalo.png");
        game.load.image("redLight", "content/img/buttons/punainenvalo.png");
        game.load.image("playButton", "content/img/buttons/playnappi.png");

    },

    loadSpritesheets: function() {
        game.load.spritesheet("agent", "content/img/characters/agent01.png", 225, 580, 2);
        game.load.spritesheet("teen", "content/img/characters/teenager.png", 1600, 2899, 2);
        game.load.spritesheet("electrify", "content/img/buttons/electrify.png", 110, 132);
        game.load.spritesheet("choose", "content/img/buttons/terminateSheet.png", 181, 160);
        game.load.spritesheet("direction", "content/img/buttons/direction.png", 358, 360);
        game.load.spritesheet("scientist", "content/img/characters/scientysts.png", 1122, 2920, 2);
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

        game.load.audio('1-01', 'content/audio/CHAR1/CHAR1_01.wav');
        game.load.audio('1-02', 'content/audio/CHAR1/CHAR1_02.wav');
        game.load.audio('1-03', 'content/audio/CHAR1/CHAR1_03.wav');
        game.load.audio('1-04', 'content/audio/CHAR1/CHAR1_04.wav');
        game.load.audio('1-05', 'content/audio/CHAR1/CHAR1_05.wav');
        game.load.audio('1-06', 'content/audio/CHAR1/CHAR1_06.wav');
        game.load.audio('1-07', 'content/audio/CHAR1/CHAR1_07.wav');
        game.load.audio('1-08', 'content/audio/CHAR1/CHAR1_08.wav');
        game.load.audio('1-09', 'content/audio/CHAR1/CHAR1_09.wav');
        game.load.audio('1-10', 'content/audio/CHAR1/CHAR1_10.wav');
        game.load.audio('1-11', 'content/audio/CHAR1/CHAR1_11.wav');
        game.load.audio('1-12', 'content/audio/CHAR1/CHAR1_12.wav');
        game.load.audio('1-13', 'content/audio/CHAR1/CHAR1_13.wav');
        game.load.audio('1-14', 'content/audio/CHAR1/CHAR1_14.wav');
        game.load.audio('1-15', 'content/audio/CHAR1/CHAR1_15.wav');
        game.load.audio('1-16', 'content/audio/CHAR1/CHAR1_16.wav');
        game.load.audio('1-17', 'content/audio/CHAR1/CHAR1_17.wav');
        game.load.audio('1-18', 'content/audio/CHAR1/CHAR1_18.wav');
        game.load.audio('1-19', 'content/audio/CHAR1/CHAR1_19.wav');
        game.load.audio('1-20', 'content/audio/CHAR1/CHAR1_20.wav');

        game.load.audio('2-01', 'content/audio/CHAR2/CHAR2_01.wav');
        game.load.audio('2-02', 'content/audio/CHAR2/CHAR2_02.wav');
        game.load.audio('2-03', 'content/audio/CHAR2/CHAR2_03.wav');
        game.load.audio('2-04', 'content/audio/CHAR2/CHAR2_04.wav');
        game.load.audio('2-05', 'content/audio/CHAR2/CHAR2_05.wav');
        game.load.audio('2-06', 'content/audio/CHAR2/CHAR2_06.wav');
        game.load.audio('2-07', 'content/audio/CHAR2/CHAR2_07.wav');
        game.load.audio('2-08', 'content/audio/CHAR2/CHAR2_08.wav');
        game.load.audio('2-09', 'content/audio/CHAR2/CHAR2_09.wav');
        game.load.audio('2-10', 'content/audio/CHAR2/CHAR2_10.wav');
        game.load.audio('2-11', 'content/audio/CHAR2/CHAR2_11.wav');
        game.load.audio('2-12', 'content/audio/CHAR2/CHAR2_12.wav');
        game.load.audio('2-13', 'content/audio/CHAR2/CHAR2_13.wav');
        game.load.audio('2-14', 'content/audio/CHAR2/CHAR2_14.wav');
        game.load.audio('2-15', 'content/audio/CHAR2/CHAR2_15.wav');
        game.load.audio('2-16', 'content/audio/CHAR2/CHAR2_16.wav');
        game.load.audio('2-17', 'content/audio/CHAR2/CHAR2_17.wav');
        game.load.audio('2-18', 'content/audio/CHAR2/CHAR2_18.wav');
        game.load.audio('2-19', 'content/audio/CHAR2/CHAR2_19.wav');
        game.load.audio('2-20', 'content/audio/CHAR2/CHAR2_20.wav');

        game.load.audio('3-01', 'content/audio/CHAR3/CHAR3_01.wav');
        game.load.audio('3-02', 'content/audio/CHAR3/CHAR3_02.wav');
        game.load.audio('3-03', 'content/audio/CHAR3/CHAR3_03.wav');
        game.load.audio('3-04', 'content/audio/CHAR3/CHAR3_04.wav');
        game.load.audio('3-05', 'content/audio/CHAR3/CHAR3_05.wav');
        game.load.audio('3-06', 'content/audio/CHAR3/CHAR3_06.wav');
        game.load.audio('3-07', 'content/audio/CHAR3/CHAR3_07.wav');
        game.load.audio('3-08', 'content/audio/CHAR3/CHAR3_08.wav');
        game.load.audio('3-09', 'content/audio/CHAR3/CHAR3_09.wav');
        game.load.audio('3-10', 'content/audio/CHAR3/CHAR3_10.wav');
        game.load.audio('3-11', 'content/audio/CHAR3/CHAR3_11.wav');
        game.load.audio('3-12', 'content/audio/CHAR3/CHAR3_12.wav');
        game.load.audio('3-13', 'content/audio/CHAR3/CHAR3_13.wav');
        game.load.audio('3-14', 'content/audio/CHAR3/CHAR3_14.wav');
        game.load.audio('3-15', 'content/audio/CHAR3/CHAR3_15.wav');
        game.load.audio('3-16', 'content/audio/CHAR3/CHAR3_16.wav');
        game.load.audio('3-17', 'content/audio/CHAR3/CHAR3_17.wav');
        game.load.audio('3-18', 'content/audio/CHAR3/CHAR3_18.wav');
        game.load.audio('3-19', 'content/audio/CHAR3/CHAR3_19.wav');
        game.load.audio('3-20', 'content/audio/CHAR3/CHAR3_20.wav');

        game.load.audio('4-01', 'content/audio/CHAR4/CHAR4_01.wav');
        game.load.audio('4-02', 'content/audio/CHAR4/CHAR4_02.wav');
        game.load.audio('4-03', 'content/audio/CHAR4/CHAR4_03.wav');
        game.load.audio('4-04', 'content/audio/CHAR4/CHAR4_04.wav');
        game.load.audio('4-05', 'content/audio/CHAR4/CHAR4_05.wav');
        game.load.audio('4-06', 'content/audio/CHAR4/CHAR4_06.wav');
        game.load.audio('4-07', 'content/audio/CHAR4/CHAR4_07.wav');
        game.load.audio('4-08', 'content/audio/CHAR4/CHAR4_08.wav');
        game.load.audio('4-09', 'content/audio/CHAR4/CHAR4_09.wav');
        game.load.audio('4-10', 'content/audio/CHAR4/CHAR4_10.wav');
        game.load.audio('4-11', 'content/audio/CHAR4/CHAR4_11.wav');
        game.load.audio('4-12', 'content/audio/CHAR4/CHAR4_12.wav');
        game.load.audio('4-13', 'content/audio/CHAR4/CHAR4_13.wav');
        game.load.audio('4-14', 'content/audio/CHAR4/CHAR4_14.wav');
        game.load.audio('4-15', 'content/audio/CHAR4/CHAR4_15.wav');
        game.load.audio('4-16', 'content/audio/CHAR4/CHAR4_16.wav');
        game.load.audio('4-17', 'content/audio/CHAR4/CHAR4_17.wav');
        game.load.audio('4-18', 'content/audio/CHAR4/CHAR4_18.wav');
        game.load.audio('4-19', 'content/audio/CHAR4/CHAR4_19.wav');
        game.load.audio('4-20', 'content/audio/CHAR4/CHAR4_20.wav');

        game.load.audio('5-01', 'content/audio/CHAR5/CHAR5_01.wav');
        game.load.audio('5-02', 'content/audio/CHAR5/CHAR5_02.wav');
        game.load.audio('5-03', 'content/audio/CHAR5/CHAR5_03.wav');
        game.load.audio('5-04', 'content/audio/CHAR5/CHAR5_04.wav');
        game.load.audio('5-05', 'content/audio/CHAR5/CHAR5_05.wav');
        game.load.audio('5-06', 'content/audio/CHAR5/CHAR5_06.wav');
        game.load.audio('5-07', 'content/audio/CHAR5/CHAR5_07.wav');
        game.load.audio('5-08', 'content/audio/CHAR5/CHAR5_08.wav');
        game.load.audio('5-09', 'content/audio/CHAR5/CHAR5_09.wav');
        game.load.audio('5-10', 'content/audio/CHAR5/CHAR5_10.wav');
        game.load.audio('5-11', 'content/audio/CHAR5/CHAR5_11.wav');
        game.load.audio('5-12', 'content/audio/CHAR5/CHAR5_12.wav');
        game.load.audio('5-13', 'content/audio/CHAR5/CHAR5_13.wav');
        game.load.audio('5-14', 'content/audio/CHAR5/CHAR5_14.wav');
        game.load.audio('5-15', 'content/audio/CHAR5/CHAR5_15.wav');
        game.load.audio('5-16', 'content/audio/CHAR5/CHAR5_16.wav');
        game.load.audio('5-17', 'content/audio/CHAR5/CHAR5_17.wav');
        game.load.audio('5-18', 'content/audio/CHAR5/CHAR5_18.wav');
        game.load.audio('5-19', 'content/audio/CHAR5/CHAR5_19.wav');
        game.load.audio('5-20', 'content/audio/CHAR5/CHAR5_20.wav');

        game.load.audio("wilhelm", 'content/audio/wilhelm.ogg');
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
