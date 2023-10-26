class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion1', './assets/explosion38.wav');
        this.load.audio('sfx_explosion2', './assets/Explosion2.wav');
        this.load.audio('sfx_explosion3', './assets/Explosion3.wav');
        this.load.audio('sfx_explosion4', './assets/Explosion4.wav');
        this.load.audio('sfx_explosion5', './assets/Explosion5.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('starfield', './assets/starfield.png')
        this.load.image('title', '/assets/title.png')
      }
    
    create() {
        this.add.image(game.config.width / 2, game.config.height / 2, 'starfield').setOrigin(0.5);
        /*let overlay = this.add.graphics();
        overlay.fillStyle(0x00000, 0.5);
        overlay.fillRect(0, 0, game.config.width, game.config.height);*/
        this.add.image (game.config.width/2, game.config.height/2 -25, 'titleRocket3').setOrigin(0.5);
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Trebuchet MS',
            fontSize: '28px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let titleConfig = {
          fontFamily: 'Trebuchet MS',
          fontSize: '46px',
          color: '#FFFFFF',
          align: 'center',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 0
      }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - 200, 'ROCKET PATROL', titleConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 125, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 125, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            spaceship2Speed: 6,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            spaceship2Speed: 8,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }
}