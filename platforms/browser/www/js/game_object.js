function addPaddle()
{
    paddle = game.add.sprite(game.world.width * 0.5,    // x
                             game.world.height * 0.90,  // y
                             "paddle");
    paddle.anchor.set(0.5,1);  //place the paddle in the center
    // prevent the paddle to go off screen
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    paddle.body.collideWorldBounds = true;
    paddle.body.bounce.set(1);
    paddle.body.immovable = true;
}

function addBricks()
{
    // create a group that will contain all the bricks
    bricks = game.add.group();
    // add 25 bricks to the group (5 columns and 5 rows)
    for(var i = 0; i < 5; i++)
    {
        for(var k = 0; k < 5; k++)
        {
            var brick = game.add.sprite(55 + i * 60,    // x
                                        55 + k * 35,    // y
                                        "brick");
            brick.body.immovable = true;
            bricks.add(brick);
        }
    }
}

function addBall()
{
    ball = game.add.sprite(200, 300, "ball");
    // give the ball some init speed
    ball.body.velocity.x = 200;
    ball.body.velocity.y = -200;   //negative to make the ball go up
    // make sure the ball will bounce when hitting something
    ball.body.bounce.setTo(1);
    ball.body.collideWorldBounds = true;
    // disabling the ball from bounce on the bottom.
    game.physics.arcade.checkCollision.down = false;
    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(ballLeaveScreen, this);
}

function addScoreBoard()
{
    score = 0;
    scoreText = game.add.text(5, 5, 'Points: 0', textStyle);
}

function addLifeBoard()
{
    lives = 3
    livesText = game.add.text(game.world.width -5, 5,   // x and y position
                              'Lives: ' + lives,
                              textStyle);               // style of the text
    livesText.anchor.set(1,0);
    lifeLostText = game.add.text(game.world.width * 0.5,    // x position
                                 game.world.height * 0.7,   // y position
                                 'Life lost, click to continue',
                                 textStyle);                // style of the text
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;
}
