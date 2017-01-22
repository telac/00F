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
        game.load.image("backgroundOfDoom", "content/img/backgrounds/maisemaDOOM.png");
        game.load.image("backgroundOfNotDoom", "content/img/backgrounds/maisemanotDOOM.png");
        game.load.image("menuscreen", "content/img/backgrounds/menu1.png");

        game.load.image("enter-key", "content/img/misc/enter-key-small.png");
        game.load.image('console', 'content/img/buttons/console.png');
        game.load.image("walrus", "content/img/backgrounds/tuto1.png");
        game.load.image("walrus1", "content/img/backgrounds/tuto2.png");
        game.load.image("walrus2", "content/img/backgrounds/tuto3.png");
        game.load.image("walrus3", "content/img/backgrounds/tuto4.png");

        // evat
        game.load.image("fin1", "content/img/misc/rapyla1.png");
        game.load.image("fin2", "content/img/misc/rapyla2.png");
        game.load.image("fin3", "content/img/misc/rapylakasine.png");

        // Characters
        game.load.image("rip", "content/img/characters/corpse.png");

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
        game.load.spritesheet("eel", "content/img/characters/eelSheet.png",520,520,3);
        game.load.spritesheet("agent", "content/img/characters/agent01.png", 225, 580, 2);
        game.load.spritesheet("teen", "content/img/characters/teenager.png", 1600, 2899, 2);
        game.load.spritesheet("electrify", "content/img/buttons/electrify.png", 110, 132);
        game.load.spritesheet("choose", "content/img/buttons/terminateSheet.png", 181, 160);
        game.load.spritesheet("direction", "content/img/buttons/direction.png", 358, 360);
        game.load.spritesheet("scientist", "content/img/characters/scientysts.png", 1122, 2920, 2);
        game.load.spritesheet("granny", "content/img/characters/granny.png", 688, 1448, 2);
        game.load.spritesheet("robot", "content/img/characters/robo.png", 358, 417, 2);
        game.load.spritesheet("president", "content/img/characters/pressa.png",276,573,2);
        game.load.spritesheet("eskimo", "content/img/characters/eskimo.png",195,448,2);
        game.load.spritesheet("chimp", "content/img/characters/chimps.png",175,393,2);
        game.load.spritesheet("biologist", "content/img/characters/meriBiologi.png",277,521,2);
    },

    loadAudio: function() {
        game.load.audio('1-01', 'content/audio/CHAR1/CHAR1_01.mp3');
        game.load.audio('1-02', 'content/audio/CHAR1/CHAR1_02.mp3');
        game.load.audio('1-03', 'content/audio/CHAR1/CHAR1_03.mp3');
        game.load.audio('1-04', 'content/audio/CHAR1/CHAR1_04.mp3');
        game.load.audio('1-05', 'content/audio/CHAR1/CHAR1_05.mp3');
        game.load.audio('1-06', 'content/audio/CHAR1/CHAR1_06.mp3');
        game.load.audio('1-07', 'content/audio/CHAR1/CHAR1_07.mp3');
        game.load.audio('1-08', 'content/audio/CHAR1/CHAR1_08.mp3');
        game.load.audio('1-09', 'content/audio/CHAR1/CHAR1_09.mp3');
        game.load.audio('1-10', 'content/audio/CHAR1/CHAR1_10.mp3');
        game.load.audio('1-11', 'content/audio/CHAR1/CHAR1_11.mp3');
        game.load.audio('1-12', 'content/audio/CHAR1/CHAR1_12.mp3');
        game.load.audio('1-13', 'content/audio/CHAR1/CHAR1_13.mp3');
        game.load.audio('1-14', 'content/audio/CHAR1/CHAR1_14.mp3');
        game.load.audio('1-15', 'content/audio/CHAR1/CHAR1_15.mp3');
        game.load.audio('1-16', 'content/audio/CHAR1/CHAR1_16.mp3');
        game.load.audio('1-17', 'content/audio/CHAR1/CHAR1_17.mp3');
        game.load.audio('1-18', 'content/audio/CHAR1/CHAR1_18.mp3');
        game.load.audio('1-19', 'content/audio/CHAR1/CHAR1_19.mp3');
        game.load.audio('1-20', 'content/audio/CHAR1/CHAR1_20.mp3');

        game.load.audio('2-01', 'content/audio/CHAR2/CHAR2_01.mp3');
        game.load.audio('2-02', 'content/audio/CHAR2/CHAR2_02.mp3');
        game.load.audio('2-03', 'content/audio/CHAR2/CHAR2_03.mp3');
        game.load.audio('2-04', 'content/audio/CHAR2/CHAR2_04.mp3');
        game.load.audio('2-05', 'content/audio/CHAR2/CHAR2_05.mp3');
        game.load.audio('2-06', 'content/audio/CHAR2/CHAR2_06.mp3');
        game.load.audio('2-07', 'content/audio/CHAR2/CHAR2_07.mp3');
        game.load.audio('2-08', 'content/audio/CHAR2/CHAR2_08.mp3');
        game.load.audio('2-09', 'content/audio/CHAR2/CHAR2_09.mp3');
        game.load.audio('2-10', 'content/audio/CHAR2/CHAR2_10.mp3');
        game.load.audio('2-11', 'content/audio/CHAR2/CHAR2_11.mp3');
        game.load.audio('2-12', 'content/audio/CHAR2/CHAR2_12.mp3');
        game.load.audio('2-13', 'content/audio/CHAR2/CHAR2_13.mp3');
        game.load.audio('2-14', 'content/audio/CHAR2/CHAR2_14.mp3');
        game.load.audio('2-15', 'content/audio/CHAR2/CHAR2_15.mp3');
        game.load.audio('2-16', 'content/audio/CHAR2/CHAR2_16.mp3');
        game.load.audio('2-17', 'content/audio/CHAR2/CHAR2_17.mp3');
        game.load.audio('2-18', 'content/audio/CHAR2/CHAR2_18.mp3');
        game.load.audio('2-19', 'content/audio/CHAR2/CHAR2_19.mp3');
        game.load.audio('2-20', 'content/audio/CHAR2/CHAR2_20.mp3');

        game.load.audio('3-01', 'content/audio/CHAR3/CHAR3_01.mp3');
        game.load.audio('3-02', 'content/audio/CHAR3/CHAR3_02.mp3');
        game.load.audio('3-03', 'content/audio/CHAR3/CHAR3_03.mp3');
        game.load.audio('3-04', 'content/audio/CHAR3/CHAR3_04.mp3');
        game.load.audio('3-05', 'content/audio/CHAR3/CHAR3_05.mp3');
        game.load.audio('3-06', 'content/audio/CHAR3/CHAR3_06.mp3');
        game.load.audio('3-07', 'content/audio/CHAR3/CHAR3_07.mp3');
        game.load.audio('3-08', 'content/audio/CHAR3/CHAR3_08.mp3');
        game.load.audio('3-09', 'content/audio/CHAR3/CHAR3_09.mp3');
        game.load.audio('3-10', 'content/audio/CHAR3/CHAR3_10.mp3');
        game.load.audio('3-11', 'content/audio/CHAR3/CHAR3_11.mp3');
        game.load.audio('3-12', 'content/audio/CHAR3/CHAR3_12.mp3');
        game.load.audio('3-13', 'content/audio/CHAR3/CHAR3_13.mp3');
        game.load.audio('3-14', 'content/audio/CHAR3/CHAR3_14.mp3');
        game.load.audio('3-15', 'content/audio/CHAR3/CHAR3_15.mp3');
        game.load.audio('3-16', 'content/audio/CHAR3/CHAR3_16.mp3');
        game.load.audio('3-17', 'content/audio/CHAR3/CHAR3_17.mp3');
        game.load.audio('3-18', 'content/audio/CHAR3/CHAR3_18.mp3');
        game.load.audio('3-19', 'content/audio/CHAR3/CHAR3_19.mp3');
        game.load.audio('3-20', 'content/audio/CHAR3/CHAR3_20.mp3');

        game.load.audio('4-01', 'content/audio/CHAR4/CHAR4_01.mp3');
        game.load.audio('4-02', 'content/audio/CHAR4/CHAR4_02.mp3');
        game.load.audio('4-03', 'content/audio/CHAR4/CHAR4_03.mp3');
        game.load.audio('4-04', 'content/audio/CHAR4/CHAR4_04.mp3');
        game.load.audio('4-05', 'content/audio/CHAR4/CHAR4_05.mp3');
        game.load.audio('4-06', 'content/audio/CHAR4/CHAR4_06.mp3');
        game.load.audio('4-07', 'content/audio/CHAR4/CHAR4_07.mp3');
        game.load.audio('4-08', 'content/audio/CHAR4/CHAR4_08.mp3');
        game.load.audio('4-09', 'content/audio/CHAR4/CHAR4_09.mp3');
        game.load.audio('4-10', 'content/audio/CHAR4/CHAR4_10.mp3');
        game.load.audio('4-11', 'content/audio/CHAR4/CHAR4_11.mp3');
        game.load.audio('4-12', 'content/audio/CHAR4/CHAR4_12.mp3');
        game.load.audio('4-13', 'content/audio/CHAR4/CHAR4_13.mp3');
        game.load.audio('4-14', 'content/audio/CHAR4/CHAR4_14.mp3');
        game.load.audio('4-15', 'content/audio/CHAR4/CHAR4_15.mp3');
        game.load.audio('4-16', 'content/audio/CHAR4/CHAR4_16.mp3');
        game.load.audio('4-17', 'content/audio/CHAR4/CHAR4_17.mp3');
        game.load.audio('4-18', 'content/audio/CHAR4/CHAR4_18.mp3');
        game.load.audio('4-19', 'content/audio/CHAR4/CHAR4_19.mp3');
        game.load.audio('4-20', 'content/audio/CHAR4/CHAR4_20.mp3');

        game.load.audio('5-01', 'content/audio/CHAR5/CHAR5_01.mp3');
        game.load.audio('5-02', 'content/audio/CHAR5/CHAR5_02.mp3');
        game.load.audio('5-03', 'content/audio/CHAR5/CHAR5_03.mp3');
        game.load.audio('5-04', 'content/audio/CHAR5/CHAR5_04.mp3');
        game.load.audio('5-05', 'content/audio/CHAR5/CHAR5_05.mp3');
        game.load.audio('5-06', 'content/audio/CHAR5/CHAR5_06.mp3');
        game.load.audio('5-07', 'content/audio/CHAR5/CHAR5_07.mp3');
        game.load.audio('5-08', 'content/audio/CHAR5/CHAR5_08.mp3');
        game.load.audio('5-09', 'content/audio/CHAR5/CHAR5_09.mp3');
        game.load.audio('5-10', 'content/audio/CHAR5/CHAR5_10.mp3');
        game.load.audio('5-11', 'content/audio/CHAR5/CHAR5_11.mp3');
        game.load.audio('5-12', 'content/audio/CHAR5/CHAR5_12.mp3');
        game.load.audio('5-13', 'content/audio/CHAR5/CHAR5_13.mp3');
        game.load.audio('5-14', 'content/audio/CHAR5/CHAR5_14.mp3');
        game.load.audio('5-15', 'content/audio/CHAR5/CHAR5_15.mp3');
        game.load.audio('5-16', 'content/audio/CHAR5/CHAR5_16.mp3');
        game.load.audio('5-17', 'content/audio/CHAR5/CHAR5_17.mp3');
        game.load.audio('5-18', 'content/audio/CHAR5/CHAR5_18.mp3');
        game.load.audio('5-19', 'content/audio/CHAR5/CHAR5_19.mp3');
        game.load.audio('5-20', 'content/audio/CHAR5/CHAR5_20.mp3');

        game.load.audio("wilhelm", 'content/audio/wilhelm.ogg');

        game.load.audio('6-01', 'content/audio/CHAR6/CHAR6_01.mp3');
        game.load.audio('6-02', 'content/audio/CHAR6/CHAR6_02.mp3');
        game.load.audio('6-03', 'content/audio/CHAR6/CHAR6_03.mp3');
        game.load.audio('6-04', 'content/audio/CHAR6/CHAR6_04.mp3');
        game.load.audio('6-05', 'content/audio/CHAR6/CHAR6_05.mp3');
        game.load.audio('6-06', 'content/audio/CHAR6/CHAR6_06.mp3');
        game.load.audio('6-07', 'content/audio/CHAR6/CHAR6_07.mp3');
        game.load.audio('6-08', 'content/audio/CHAR6/CHAR6_08.mp3');
        game.load.audio('6-09', 'content/audio/CHAR6/CHAR6_09.mp3');
        game.load.audio('6-10', 'content/audio/CHAR6/CHAR6_10.mp3');
        game.load.audio('6-11', 'content/audio/CHAR6/CHAR6_11.mp3');
        game.load.audio('6-12', 'content/audio/CHAR6/CHAR6_12.mp3');
        game.load.audio('6-13', 'content/audio/CHAR6/CHAR6_13.mp3');
        game.load.audio('6-14', 'content/audio/CHAR6/CHAR6_14.mp3');
        game.load.audio('6-15', 'content/audio/CHAR6/CHAR6_15.mp3');
        game.load.audio('6-16', 'content/audio/CHAR6/CHAR6_16.mp3');
        game.load.audio('6-17', 'content/audio/CHAR6/CHAR6_17.mp3');
        game.load.audio('6-18', 'content/audio/CHAR6/CHAR6_18.mp3');
        game.load.audio('6-19', 'content/audio/CHAR6/CHAR6_19.mp3');
        game.load.audio('6-20', 'content/audio/CHAR6/CHAR6_20.mp3');

        game.load.audio('7-01', 'content/audio/CHAR7/CHAR7_01.mp3');
        game.load.audio('7-02', 'content/audio/CHAR7/CHAR7_02.mp3');
        game.load.audio('7-03', 'content/audio/CHAR7/CHAR7_03.mp3');
        game.load.audio('7-04', 'content/audio/CHAR7/CHAR7_04.mp3');
        game.load.audio('7-05', 'content/audio/CHAR7/CHAR7_05.mp3');
        game.load.audio('7-06', 'content/audio/CHAR7/CHAR7_06.mp3');
        game.load.audio('7-07', 'content/audio/CHAR7/CHAR7_07.mp3');
        game.load.audio('7-08', 'content/audio/CHAR7/CHAR7_08.mp3');
        game.load.audio('7-09', 'content/audio/CHAR7/CHAR7_09.mp3');
        game.load.audio('7-10', 'content/audio/CHAR7/CHAR7_10.mp3');
        game.load.audio('7-11', 'content/audio/CHAR7/CHAR7_11.mp3');
        game.load.audio('7-12', 'content/audio/CHAR7/CHAR7_12.mp3');
        game.load.audio('7-13', 'content/audio/CHAR7/CHAR7_13.mp3');
        game.load.audio('7-14', 'content/audio/CHAR7/CHAR7_14.mp3');
        game.load.audio('7-15', 'content/audio/CHAR7/CHAR7_15.mp3');
        game.load.audio('7-16', 'content/audio/CHAR7/CHAR7_16.mp3');
        game.load.audio('7-17', 'content/audio/CHAR7/CHAR7_17.mp3');
        game.load.audio('7-18', 'content/audio/CHAR7/CHAR7_18.mp3');
        game.load.audio('7-19', 'content/audio/CHAR7/CHAR7_19.mp3');
        game.load.audio('7-20', 'content/audio/CHAR7/CHAR7_20.mp3');

        game.load.audio('w-01', 'content/audio/mursu/mursu_01.mp3');
        game.load.audio('w-02', 'content/audio/mursu/mursu_02.mp3');
        game.load.audio('w-03', 'content/audio/mursu/mursu_03.mp3');
        game.load.audio('w-04', 'content/audio/mursu/mursu_04.mp3');
        game.load.audio('w-05', 'content/audio/mursu/mursu_05.mp3');
        game.load.audio('w-06', 'content/audio/mursu/mursu_06.mp3');
        game.load.audio('w-07', 'content/audio/mursu/mursu_07.mp3');
        game.load.audio('w-08', 'content/audio/mursu/mursu_08.mp3');
        game.load.audio('w-09', 'content/audio/mursu/mursu_09.mp3');
        game.load.audio('w-10', 'content/audio/mursu/mursu_10.mp3');
        game.load.audio('w-11', 'content/audio/mursu/mursu_11.mp3');
        game.load.audio('w-12', 'content/audio/mursu/mursu_12.mp3');
        game.load.audio('w-13', 'content/audio/mursu/mursu_13.mp3');
        game.load.audio('w-14', 'content/audio/mursu/mursu_14.mp3');

        game.load.audio('8-01', 'content/audio/CHAR8/CHAR8_01.mp3');
        game.load.audio('8-02', 'content/audio/CHAR8/CHAR8_02.mp3');
        game.load.audio('8-03', 'content/audio/CHAR8/CHAR8_03.mp3');
        game.load.audio('8-04', 'content/audio/CHAR8/CHAR8_04.mp3');
        game.load.audio('8-05', 'content/audio/CHAR8/CHAR8_05.mp3');
        game.load.audio('8-06', 'content/audio/CHAR8/CHAR8_06.mp3');
        game.load.audio('8-07', 'content/audio/CHAR8/CHAR8_07.mp3');
        game.load.audio('8-08', 'content/audio/CHAR8/CHAR8_08.mp3');
        game.load.audio('8-09', 'content/audio/CHAR8/CHAR8_09.mp3');
        game.load.audio('8-10', 'content/audio/CHAR8/CHAR8_10.mp3');
        game.load.audio('8-11', 'content/audio/CHAR8/CHAR8_11.mp3');
        game.load.audio('8-12', 'content/audio/CHAR8/CHAR8_12.mp3');
        game.load.audio('8-13', 'content/audio/CHAR8/CHAR8_13.mp3');
        game.load.audio('8-14', 'content/audio/CHAR8/CHAR8_14.mp3');
        game.load.audio('8-15', 'content/audio/CHAR8/CHAR8_15.mp3');
        game.load.audio('8-16', 'content/audio/CHAR8/CHAR8_16.mp3');
        game.load.audio('8-17', 'content/audio/CHAR8/CHAR8_17.mp3');
        game.load.audio('8-18', 'content/audio/CHAR8/CHAR8_18.mp3');
        game.load.audio('8-19', 'content/audio/CHAR8/CHAR8_19.mp3');
        game.load.audio('8-20', 'content/audio/CHAR8/CHAR8_20.mp3');
/*
        game.load.audio('9-01', 'content/audio/CHAR9/CHAR9_01.mp3');
        game.load.audio('9-02', 'content/audio/CHAR9/CHAR9_02.mp3');
        game.load.audio('9-03', 'content/audio/CHAR9/CHAR9_03.mp3');
        game.load.audio('9-04', 'content/audio/CHAR9/CHAR9_04.mp3');
        game.load.audio('9-05', 'content/audio/CHAR9/CHAR9_05.mp3');
        game.load.audio('9-06', 'content/audio/CHAR9/CHAR9_06.mp3');
        game.load.audio('9-07', 'content/audio/CHAR9/CHAR9_07.mp3');
        game.load.audio('9-08', 'content/audio/CHAR9/CHAR9_08.mp3');
        game.load.audio('9-09', 'content/audio/CHAR9/CHAR9_09.mp3');
        game.load.audio('9-10', 'content/audio/CHAR9/CHAR9_10.mp3');
        game.load.audio('9-11', 'content/audio/CHAR9/CHAR9_11.mp3');
        game.load.audio('9-12', 'content/audio/CHAR9/CHAR9_12.mp3');
        game.load.audio('9-13', 'content/audio/CHAR9/CHAR9_13.mp3');
        game.load.audio('9-14', 'content/audio/CHAR9/CHAR9_14.mp3');
        game.load.audio('9-15', 'content/audio/CHAR9/CHAR9_15.mp3');
        game.load.audio('9-16', 'content/audio/CHAR9/CHAR9_16.mp3');
        game.load.audio('9-17', 'content/audio/CHAR9/CHAR9_17.mp3');
        game.load.audio('9-18', 'content/audio/CHAR9/CHAR9_18.mp3');
        game.load.audio('9-19', 'content/audio/CHAR9/CHAR9_19.mp3');
        game.load.audio('9-20', 'content/audio/CHAR9/CHAR9_20.mp3');

        game.load.audio('10-01', 'content/audio/CHAR10/CHAR10_01.mp3');
        game.load.audio('10-02', 'content/audio/CHAR10/CHAR10_02.mp3');
        game.load.audio('10-03', 'content/audio/CHAR10/CHAR10_03.mp3');
        game.load.audio('10-04', 'content/audio/CHAR10/CHAR10_04.mp3');
        game.load.audio('10-05', 'content/audio/CHAR10/CHAR10_05.mp3');
        game.load.audio('10-06', 'content/audio/CHAR10/CHAR10_06.mp3');
        game.load.audio('10-07', 'content/audio/CHAR10/CHAR10_07.mp3');
        game.load.audio('10-08', 'content/audio/CHAR10/CHAR10_08.mp3');
        game.load.audio('10-09', 'content/audio/CHAR10/CHAR10_09.mp3');
        game.load.audio('10-10', 'content/audio/CHAR10/CHAR10_10.mp3');
        game.load.audio('10-11', 'content/audio/CHAR10/CHAR10_11.mp3');
        game.load.audio('10-12', 'content/audio/CHAR10/CHAR10_12.mp3');
        game.load.audio('10-13', 'content/audio/CHAR10/CHAR10_13.mp3');
        game.load.audio('10-14', 'content/audio/CHAR10/CHAR10_14.mp3');
        game.load.audio('10-15', 'content/audio/CHAR10/CHAR10_15.mp3');
        game.load.audio('10-16', 'content/audio/CHAR10/CHAR10_16.mp3');
        game.load.audio('10-17', 'content/audio/CHAR10/CHAR10_17.mp3');
        game.load.audio('10-18', 'content/audio/CHAR10/CHAR10_18.mp3');
        game.load.audio('10-19', 'content/audio/CHAR10/CHAR10_19.mp3');
        game.load.audio('10-20', 'content/audio/CHAR10/CHAR10_20.mp3');
*/
    },

    loadFonts: function () {
    },

    init: function () {
    },

    // Preload game assets
    preload: function () {
        this.background = game.add.sprite(0, 0, 'loadingscreen');
        this.background.scale.setTo(1280/this.background.width, 720/this.background.height);
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
            game.state.start("Menu");
        }, 1000);
    },

    loadFileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        var scaler = 0.3;
        var totalNumOfDolphins = 5;
        var numberOfDolphins = Math.floor(totalNumOfDolphins * progress / 100.0);
        var loadingSprite = game.add.sprite(0, 0, "loadingbar");
        loadingSprite.x = game.world.centerX + scaler * loadingSprite.width * (numberOfDolphins - totalNumOfDolphins / 2.0);
        loadingSprite.y = game.world.centerY + 100;
        loadingSprite.anchor.setTo(0.5);
        loadingSprite.scale.setTo(scaler);
        loadingSprite.smoothed = false;
    },
}
