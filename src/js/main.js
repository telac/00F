var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game');
var Main = function () {};

Main.prototype = {
    preload: function() {
        //preload assets of the loading screen here
        game.load.image("loadingbar", "content/loadingbar.png");
        game.load.image("loadingscreen", "content/loadingscreen.png");
        game.load.script('loading',  'js/States/loading.js');
    },

    create: function() {
        game.state.add('Loading', Loading);
        game.state.start('Loading');
    }
}

game.state.add('Main', Main);
game.state.start('Main');
