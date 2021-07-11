class Form{
    constructor(){
        //this.title=createElement("h2");
        this.input=createInput("Name");
        this.button=createButton("Let's Begin");
        this.greetings=createElement("h1");
        this.buttonPlay=createButton("CONTINUE");

    }
    
    hide(){
        //this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }

    display(){
        //this.title.html("Zombie Apocalpse");
        //this.title.position(400,150);

        this.input.position(450,250);

        this.button.position(550,300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            var name=this.input.value();
            this.greetings.html("Welcome To The New World Of Zombies, " +name);
            this.greetings.position(180,220);
            this.buttonPlay.position(displayWidth/2,displayHeight/2);


            
            this.buttonPlay.mousePressed(()=>{
                femaleCop=createSprite(displayWidth/4,displayHeight/2);
                femaleCop.addImage(fCop_Img);
                femaleCop.scale=1.2;
                maleCop=createSprite(3*displayWidth/4,displayHeight/2);
                maleCop.addImage(mCop_Img);
                maleCop.scale=0.5;
                this.greetings.hide();
                this.buttonPlay.hide();
            })
               
                
            
        })

        drawSprites();


    }
}
