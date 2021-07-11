var form;
var bg;
var continueButton;
var femaleCop,maleCop;
var fCop_Img,mCop_Img;
var police;
var zombiesGroup;
var points=0;
var arrow;

function preload(){
  bg=loadImage("bg.png");
  fCop_Img=loadImage("policeFemale.png");
  mCop_Img=loadImage("policeMan.png");
  

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  police=createSprite(300,200);
  police.visible=false;
  zombiesGroup=createGroup();
  //arrow=createSprite(displayWidth/2,displayHeight/2);

}

function draw() {
  background(bg);  
    
    form.display();
    //arrow.x=mouseX;
    if(mousePressedOver(femaleCop)){
      //femaleCop.destroy();
      //maleCop.destroy();
      police.visible=true;
      police.addImage(fCop_Img);
    }
    textSize(20);
    text("points : "+points,100,30);

  police.y=mouseY;
    if(police.isTouching(zombiesGroup)){
      zombiesGroup.destroyEach();
      points+=1;
          }
          drawSprites();
}

function zombies(){
  if(frameCount%40==0){
    var zombies=(displayWidth,300);
    zombies.y=Math.round(random(300,800));
    zombies.velocityX=-5;
    zombies.lifetime=500;
    zombiesGroup.add(zombies);

    }
}