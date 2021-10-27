ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);


let appleX2 = appleY2 = 5;
let score = 0;


setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for (let i = 0; i < snake.length-1 ; i++) {
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
       tail = MIN;
    }
  }
  while (snake.length > tail) {
    snake.shift();
  }

  if(appleX == px && appleY == py){
    score++;
    
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE,SIZE-2, SIZE-2);

  if(appleX2 == px && appleY2 == py){
    score--;

    appleX2 = Math.floor(Math.random()*canv.width/SIZE);
    appleY2 = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "purple";
  ctx.fillRect(appleX2*SIZE, appleY2*SIZE,SIZE-2, SIZE-2);

  ctx.font = "16px Arial";
  ctx.fillStyle = "pink";
  ctx.fillText("Score: "+score, 8, 20);




}, 1000/FPS);
