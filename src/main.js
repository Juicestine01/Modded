/*  Name: Justin Xu 
    Mod Title: All the Mods: Rocket Patrol
    Time for Completion: 10 hours
    Mods Implemented: Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5),
    Implement a new timing/scoring mechanism that adds time to the clock for successful hits (5),
    Create 4 new explosion sound effects and randomize which one plays on impact (3),
    Display the time remaining (in seconds) on the screen (3),
    Create a new title screen (e.g., new artwork, typography, layout) (3),
    Create a new scrolling tile sprite for the background (1)
    Sources: None
    */

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;