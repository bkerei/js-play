import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blockBuster: {}
    }
  }
}

render() {
  return (
    <div>
    

    <script>
        //EVERYTHING NEDS TO BE MOVED INTO APP TO BEGIN WITH THEN REMOVED AS WE SEE FIT INTO THE CORRESPONDING COMPONENTS XX
        
       
        
       
        
        // rightPressed and leftPressed = app component
        var rightPressed = false;
        var leftPressed = false;
        

        
        //score and lives = app component
        var score = 0;
        var lives = 3;
//var bricks and for functions = app component
        var bricks = [];
        for (var c = 0; c < brickColumnCount; c++) {
            bricks[c] = [];
            for (var r = 0; r < brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
//the following 3 event listeners = app component
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);
//following 3 functions all belong in app component
        function keyDownHandler(e) {
            if (e.keyCode == 39) {
                rightPressed = true;
            }
            else if (e.keyCode == 37) {
                leftPressed = true;
            }
        }
        function keyUpHandler(e) {
            if (e.keyCode == 39) {
                rightPressed = false;
            }
            else if (e.keyCode == 37) {
                leftPressed = false;
            }
        }
        function mouseMoveHandler(e) {
            var relativeX = e.clientX - canvas.offsetLeft;
            if (relativeX > 0 && relativeX < canvas.width) {
                paddleX = relativeX - paddleWidth / 2;
            }
        }
        //collisionDetection function blongs app component
        function collisionDetection() {
            for (var c = 0; c < brickColumnCount; c++) {
                for (var r = 0; r < brickRowCount; r++) {
                    var b = bricks[c][r];
                    if (b.status == 1) {
                        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                            dy = -dy;
                            b.status = 0;
                            score++;
                            if (score == brickRowCount * brickColumnCount) {
                                alert("YOU WIN, CONGRATS!");
                                document.location.reload();
                            }
                        }
                    }
                }
            }
        }
//drawball function will belong app component
        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
        //drawPaddle belongs in app component
        function drawPaddle() {
            ctx.beginPath();
            ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
        //dawBricks belongs in app component
        function drawBricks() {
            for (var c = 0; c < brickColumnCount; c++) {
                for (var r = 0; r < brickRowCount; r++) {
                    if (bricks[c][r].status == 1) {
                        var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
                        var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fillStyle = "#0095DD";
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }
        //drawScore and drawLives belong in app component
        function drawScore() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Score: " + score, 8, 20);
        }
        function drawLives() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
        }
//??
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBricks();
            drawBall();
            drawPaddle();
            drawScore();
            drawLives();
            collisionDetection();

//following info untill end into app
            if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
                dx = -dx;
            }
            if (y + dy < ballRadius) {
                dy = -dy;
            }
            else if (y + dy > canvas.height - ballRadius) {
                if (x > paddleX && x < paddleX + paddleWidth) {
                    dy = -dy;
                }
                else {
                    lives--;
                    if (!lives) {
                        alert("GAME OVER");
                        document.location.reload();
                    }
                    else {
                        x = canvas.width / 2;
                        y = canvas.height - 30;
                        dx = 3;
                        dy = -3;
                        paddleX = (canvas.width - paddleWidth) / 2;
                    }
                }
            }

            if (rightPressed && paddleX < canvas.width - paddleWidth) {
                paddleX += 7;
            }
            else if (leftPressed && paddleX > 0) {
                paddleX -= 7;
            }

            x += dx;
            y += dy;
            requestAnimationFrame(draw);
        }

        draw();
        
    </scipt>
    </div>
  )
}

export default App;