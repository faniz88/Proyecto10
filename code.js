var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["789fd055-e6e2-4d5f-a346-7b845bbcdc4d","901036eb-cb68-48b6-827f-f1bbb09c5716","4bb2830c-7a53-4fd2-9f3b-cafc7e0db3c7"],"propsByKey":{"789fd055-e6e2-4d5f-a346-7b845bbcdc4d":{"name":"pelota","sourceUrl":null,"frameSize":{"x":283,"y":334},"frameCount":1,"looping":true,"frameDelay":12,"version":"4qd2fl.wq0ih_FnGCW0djJqb.mtwJhd9","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":334},"rootRelativePath":"assets/789fd055-e6e2-4d5f-a346-7b845bbcdc4d.png"},"901036eb-cb68-48b6-827f-f1bbb09c5716":{"name":"paleta","sourceUrl":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png","frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png"},"4bb2830c-7a53-4fd2-9f3b-cafc7e0db3c7":{"name":"bloques","sourceUrl":"assets/api/v1/animation-library/gamelab/3qwZlnvhvGw9DZUaNQBwW6sqQ.1T7ziW/category_video_games/brick_grey.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"3qwZlnvhvGw9DZUaNQBwW6sqQ.1T7ziW","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3qwZlnvhvGw9DZUaNQBwW6sqQ.1T7ziW/category_video_games/brick_grey.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25, 75, 50, 50);
box1.setAnimation("bloques");
box1.scale=0.4;
var box2 = createSprite(75, 75, 50, 50);
box2.setAnimation("bloques");
box2.scale=0.4;
var box3 = createSprite(125, 75, 50, 50);
box3.setAnimation("bloques");
box3.scale=0.4;
var box4 = createSprite(175, 75, 50, 50);
box4.setAnimation("bloques");
box4.scale=0.4;
var box5 = createSprite(225, 75, 50, 50);
box5.setAnimation("bloques");
box5.scale=0.4;
var box6 = createSprite(275, 75, 50, 50);
box6.setAnimation("bloques");
box6.scale=0.4;
var box7 = createSprite(325, 75, 50, 50);
box7.setAnimation("bloques");
box7.scale=0.4;
var box8 = createSprite(375, 75, 50, 50);
box8.setAnimation("bloques");
box8.scale=0.4;


var box9 = createSprite(25, 125, 50, 50);
box9.setAnimation("bloques");
box9.scale=0.4;
var box10 = createSprite(75, 125, 50, 50);
box10.setAnimation("bloques");
box10.scale=0.4;
var box11 = createSprite(125, 125, 50, 50);
box11.setAnimation("bloques");
box11.scale=0.4;
var box12 = createSprite(175, 125, 50, 50);
box12.setAnimation("bloques");
box12.scale=0.4;
var box13 = createSprite(225,125, 50, 50);
box13.setAnimation("bloques");
box13.scale=0.4;
var box14 = createSprite(275, 125, 50, 50);
box14.setAnimation("bloques");
box14.scale=0.4;
var box15 = createSprite(325, 125, 50, 50);
box15.setAnimation("bloques");
box15.scale=0.4;
var box16 = createSprite(375, 125, 50, 50);
box16.setAnimation("bloques");
box16.scale=0.4;

paddle=createSprite(200,370,100,20);
paddle.setAnimation("paleta");
paddle.scale=0.2;
ball=createSprite(200,200,20,20);
ball.setAnimation("pelota");
ball.scale=0.1;
var score = 0;
var gameState ="serve";
createEdgeSprites();
function draw() {
  background("pink");
  if (gameState =="serve")
  {
      textSize(17);
  text("!Biembenido¡ Preciona enter para comenzar",30,180);
  if (keyDown("ENTER")){
    ball.velocityX =3;
    ball.velocityY =4;
    gameState="play";
  }
  
  }
   if (gameState =="play")
   {
    paddle.x=World.mouseX;
    if(ball.isTouching(bottomEdge)|| score==16){
      gameState="end";
    }
  }
   if (gameState =="end")
   {
    
  }

  textSize(20);
  stroke("red");
  text ("puntuacón: "+score,270,20)
  
  
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);
  

  
  if (ball.isTouching(box1)){
    score = score+1;
    box1.destroy();
  }
  if (ball.isTouching(box2)){
    score = score+1;
    box2.destroy();
  }
  if (ball.isTouching(box3)){
    score = score+1;
    box3.destroy();
  }
  if (ball.isTouching(box4)){
    score = score+1;
    box4.destroy();
  }
  if (ball.isTouching(box5)){
    score = score+1;
    box5.destroy();
  }
  if (ball.isTouching(box6)){
    score = score+1;
    box6.destroy();
  }
  if (ball.isTouching(box7)){
    score = score+1;
    box7.destroy();
  }
  if (ball.isTouching(box8)){
    score = score+1;
    box8.destroy();
  }
  if (ball.isTouching(box9)){
    score = score+1;
    box9.destroy();
  }
  if (ball.isTouching(box10)){
    score = score+1;
    box10.destroy();
  }
  if (ball.isTouching(box11)){
    score = score+1;
    box11.destroy();
  }
  if (ball.isTouching(box12)){
    score = score+1;
    box12.destroy();
  }
  if (ball.isTouching(box13)){
    score = score+1;
    box13.destroy();
  }
  if (ball.isTouching(box14)){
    score = score+1;
    box14.destroy();
  }
  if (ball.isTouching(box15)){
    score = score+1;
    box15.destroy();
  }
  if (ball.isTouching(box16)){
    score = score+1;
    box16.destroy();
  }
  
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
