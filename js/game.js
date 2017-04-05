// make the game using Phaser library

var game = new Phaser.Game(400, 450, Phaser.AUTO, null,
                           {preload: preload,
                            create: create,
                            update: update});

// game objects
var ball, paddle, bricks;
var scoreText, score = 3, scoreIncrement = 10;
var livesText, livesLostText, lives = 3;

// load the objects of the game
function preload()
{
    // Scale the canvas to fit the screen for any device
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    // load the paddle
   game.load.image("paddle", "assets/paddle.png");
   game.load.image("brick", "assets/brick.png");
   game.load.image("ball", "assets/ball.png");

   // easy way to set the font style
   textStyle = { font: '18px Arial', fill: '#0095DD' };

   game.stage.backgroundColor = "#000000";
   // game physics that has basic movement and collision detection
   game.physics.startSystem(Phaser.Physics.ARCADE);
   // apply physics engine to all the game objects
   game.world.enableBody = true;

   // start listening to the accelerometer
   window.addEventListener("deviceorientation", handleOrientation, true);
}

// create the game objects.
function create()
{
    addPaddle();
    addBricks();
    addBall();
    addScoreBoard();
    addLifeBoard();
}

// update function for when the ball hits the
// paddle or a brick.
function update()
{
    // used for desktop. using the mouse
    // paddle.x = game.input.x || game.world.width*0.5;

    // add collisions between the paddle and the ball
    game.physics.arcade.collide(ball, paddle, ballHitPaddle);
    // call the 'hit' function when the ball hits a brick
    game.physics.arcade.collide(ball, bricks, hit, null, this);
}
