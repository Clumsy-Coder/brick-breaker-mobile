// event listeners for the game. Called from game.js

// called when the ball goes beyond the bottom, below the paddle
function ballLeaveScreen()
{
    lives--;
    if(lives)   // if there's life left
    {
        // decrease the score increment based on how many lives are left.
        (lives == 2) ? scoreIncrement = 5 : scoreIncrement = 1;
        livesText.setText('Lives: '+ lives);
        lifeLostText.visible = true;
        ball.reset(game.world.width * 0.5, paddle.y - 30);
        paddle.reset(game.world.width * 0.5, game.world.height * 0.90);
        game.input.onDown.addOnce(function(){
            lifeLostText.visible = false;
            ball.body.velocity.set(200, -200);
        }, this);
    }
    else   // no more lives left. Game over.
    {
        showDialog();
    }
}

// called when the ball hits a brick
function hit(ball, brick)
{
    brick.kill();
    // update the score
    score += scoreIncrement;
    scoreText.setText('Points: ' + score);

    // check if all the bricks are destroyed
    var count_alive = 0;
    for (i = 0; i < bricks.children.length; i++)
    {
        if (bricks.children[i].alive == true)
        {
            count_alive++;
        }
    }
    if (count_alive == 0)   //all the bricks are destroyed
    {
        showDialog();
    }
}

// called when the ball hits the paddle
function ballHitPaddle(ball, paddle)
{
    // move the ball in an angle when it hits that paddle
    ball.body.velocity.x = -1 * 5 * (paddle.x - ball.x);
}

// show the dialog box whether the user wants to
// continue playing or go to the main menu
// only called when the game ends, either by winning or losing
function showDialog()
{
    ball.body.velocity.set(0, 0);   // stop the ball
    var option = confirm("Play again?\n" +
                         "Press OK to play again\n" +
                         "Press Cancel to go to main menu");
    if(option == true)          // play again
    {
        location.reload();
    }
    else                        // go to main menu
    {
        window.location.href = "index.html";
    }
}
