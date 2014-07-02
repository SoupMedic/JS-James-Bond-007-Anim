var RADIUS = getWidth()/14;
var iBCount = 0;
var iBInterval = RADIUS;
var nBFCount = 0;
var iBGrowStep = 0;
var iBMoveStep = 0;

//this var changes the speed at which the IB moves

var MOVEIB_DELAY = 35;

var blackScreen = new Rectangle(getWidth(),getHeight());

var mostlyBlackScreen = new Rectangle(getWidth(),getHeight());

var initialBarrel = new Circle(RADIUS);

var fadingBarrel = new Circle(RADIUS);


function start(){
    setup();
    drawLogo();
    intro();
}

//adds + sets up all the obj vars I declared at the beginning
function setup(){
    //add(blackScreen);
    
    mostlyBlackScreen.setColor(Color.black);
    mostlyBlackScreen.setPosition(0,getHeight()-getHeight()/1.2);
    add(mostlyBlackScreen);
    
    initialBarrel.setPosition(0,getHeight()/2);
    initialBarrel.setColor(Color.white);
    add(initialBarrel);
    
    fadingBarrel.setColor(Color.white);
}

// draws a circle.
function drawCircle(r,x,y,color){
    var circle = new Circle(r);
    circle.setPosition(x,y);
    circle.setColor(color);
    add(circle);
}

// draws the logo (hopefully) and sets the timer to move the InitBarrel
function intro(){
    drawLogo();
    setTimer(moveIB,MOVEIB_DELAY);
}

// moves the initial barrel
function moveIB(){
    iBCount += 1;
    initialBarrel.setPosition(iBCount*(RADIUS/10),getHeight()/2);
    if((iBCount%20 == 0) && nBFCount < 6){
        newBarrelFade(iBCount*(RADIUS/10),getHeight()/2);
    }
    if(iBCount >= 140){
        stopTimer(moveIB);
        add(mostlyBlackScreen);
        drawLogo();
        initialBarrel.setPosition(getWidth()-getWidth()/7,getHeight()/2);
        add(initialBarrel);
        setTimer(growIB,25);
    }
}

//adds the stationary white circles that stay behind and then fade
function newBarrelFade(x,y){
    fadingBarrel.setPosition(x,y);
    add(fadingBarrel);
    nBFCount +=1;
}

/*function drawLogo(){
    var x = 40;
    var logoText1 = new Text("     ________   ________    _________  ____________;_","10pt Arial");
    logoText1.setColor(Color.white);
    logoText1.setPosition(x,350);
    add(logoText1);
    var logoText2 = new Text("    - ______ \ - ______ \ / _____   //.  .  ._______/","12pt Arial");
    logoText2.setColor(Color.white);
    logoText2.setPosition(x,370);
    add(logoText2);
    var logoText3 = new Text("   / /     / // /     / //_/     / // ___   /","12pt Arial");
    logoText3.setColor(Color.white);
    logoText3.setPosition(x,390);
    add(logoText3);
    var logoText4 = new Text("  / /     / // /     / /       .-'//_/|_/,-'","12pt Arial");
    logoText4.setColor(Color.white);
    logoText4.setPosition(x,410);
    add(logoText4);
    var logoText5 = new Text(" / /     / // /     / /     .-'.-'","12pt Arial");
    logoText5.setColor(Color.white);
    logoText5.setPosition(x,430);
    add(logoText5);
    var logoText6 = new Text("/ /     / // /     / /     / /","12pt Arial");
    logoText6.setColor(Color.white);
    logoText6.setPosition(x,450);
    add(logoText6);
    var logoText7 = new Text("\________- \________-     /_/","12pt Arial");
    logoText7.setColor(Color.white);
    logoText7.setPosition(x,470);
    add(logoText7);
} */

function drawLogo(){
    var logoText = new Text("Goldeneye 007","30pt Arial");
    logoText.setColor(Color.white);
    logoText.setPosition(50,400);
    add(logoText);
}


function growIB(){
    initialBarrel.setPosition(getWidth()-iBGrowStep*2,getHeight()/2);
    initialBarrel.setRadius(RADIUS + iBGrowStep);
    iBGrowStep++
    if(iBGrowStep >= getWidth()/8){
        stopTimer(growIB);
        setTimer(moveIB2,25);
    }
}


function moveIB2(){
    initialBarrel.setPosition((getWidth()-iBGrowStep*2)-iBMoveStep,getHeight()/2);
    iBMoveStep += 1;
    if(iBMoveStep >= getWidth()/4){
        stopTimer(moveIB2);
    }
}
