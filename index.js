// console.log('test phaser');
// let game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

// function preload() {

//     //  You can fill the preloader with as many assets as your game requires

//     //  Here we are loading an image. The first parameter is the unique
//     //  string by which we'll identify the image later in our code.

//     //  The second parameter is the URL of the image (relative)
//     // game.load.image('phaser', 'assets/sprites/phaser.png');

// }

// let sprite;

// function create() {

//     //  To make the sprite move we need to enable Arcade Physics
//     game.physics.startSystem(Phaser.Physics.ARCADE);

//     sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser');
//     sprite.anchor.set(0.5);

//     //  And enable the Sprite to have a physics body:
//     game.physics.arcade.enable(sprite);

// }

// function update () {

//     //  If the sprite is > 8px away from the pointer then let's move to it
//     if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8)
//     {
//         //  Make the object seek to the active pointer (mouse or touch).
//         game.physics.arcade.moveToPointer(sprite, 300);
//     }
//     else
//     {
//         //  Otherwise turn off velocity because we're close enough to the pointer
//         sprite.body.velocity.set(0);
//     }

// }

// function render () {

// 	game.debug.inputInfo(32, 32);

// }


// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
var game = new Phaser.Game(320, 241, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    // game.load.image('dragon', 'assets/pics/cougar_dragonsun.png');
    // game.load.image('star', 'assets/pics/monika_krawinkel-amberstar_title.png');
    // game.load.image('nanoha', 'assets/pics/nanoha_taiken_pink.png');

}

function create() {

    // game.add.image(0, 0, 'star');

    var i = game.add.image(game.world.centerX, game.world.centerY, 'nanoha');
    i.anchor.set(0.5);

    // var sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'dragon');
    // sprite.anchor.set(0.5);

    game.stage.backgroundColor = '#4d4d4d';

    // Stretch to fill
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

    // Keep original size
    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

    // Maintain aspect ratio
    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    game.input.onDown.add(gofull, this);

}

function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}

function update() {

}

function render () {

    // game.debug.text('Click / Tap to go fullscreen', 270, 16);
    // game.debug.text('Click / Tap to go fullscreen', 0, 16);

    game.debug.inputInfo(32, 32);
    // game.debug.pointer(game.input.activePointer);

}
