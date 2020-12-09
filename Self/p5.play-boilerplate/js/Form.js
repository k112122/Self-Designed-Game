class Form{

constructor(){
this.title = createElement("h1");
this.button1 = createButton("Begin");
this.greeting=createElement("h2");
this.input= createInput("Type your name in");
this.button2=createButton("Proceed")
this.story=createElement()

}

hide(){

this.button1.hide();
this.button2.hide();
this.input.hide();
this.greeting.hide();

}

display(){

this.title.html("A Migrant's Walk");
this.title.position(displayWidth/2-120, displayHeight/20-30);
this.button1.position(673, displayHeight/2+20);
var name = this.input.value();
this.input.position(673,357);


this.button1.mousePressed(()=>{

this.button1.hide();


this.input.hide();


this.greeting.html("Hello, welcome to a migrant's walk "+ name)
this.greeting.position(displayWidth/2-100, displayHeight/12-30);
gameState = 1;
this.button2.position(673, displayHeight/2+50);

})
this.button2.mousePressed(()=>{
    this.greeting.hide();
this.button2.hide();
    gameState = 2;


})

}


}