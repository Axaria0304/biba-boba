var screen = 0; 
var y = -20;
var x = 200;
var speed = 4;
var score = 0;

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;

function preload() {
    img1 = loadImage("Start.png")
    img2 = loadImage("Level1.png")
    img3 = loadImage("Level2.png ")
    img4 = loadImage("Level3.png ")
    img5 = loadImage("Level4.png ")
    img6 = loadImage("Final.png ")
    img7 = loadImage("WhiteCat.png ")
    img8 = loadImage("BlackCat.jpg ")
    img9 = loadImage("Chamomile.png ")
    img10 = loadImage("Dandelion.png ")
    img11 = loadImage("HotDog.png ")
    img12 = loadImage("Pizza.png ")
    img13 = loadImage("Love.png ")
    img14 = loadImage("TryAgain.png ")
}

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    if (screen == 0) {
        startScreen()
    } else if (screen == 1) {
        level1()
    } else if (screen == 2) {
        win1()
    } else if (screen == 3) {
        level2()
    } else if (screen == 4) {
        win2()
    } else if (screen == 5) {
        level3()
    } else if (screen == 6) {
        win3()
    } else if (screen == 7) {
        level4()
    } else if (screen == 8) {
        win4()
    } else if (screen == 9) {
        final()
    } else if (screen == 10) {
        winFinal()
    } else if (screen == 11) {
        loseScreen1()
    } else if (screen == 12) {
        loseScreen2()
    } else if (screen == 13) {
        loseScreen3()
    } else if (screen == 14) {
        loseScreen4()
    } else if (screen == 15) {
        loseScreen5()
    }
}

function startScreen() {
    image(img1, 0, 0, 1000, 1000);
    reset();
}


///////////LEVEL 1. Fred flower//////////////////////////

function level1() {
    background(200, 101, 200)
    fill('250');
    textSize(50);
    text("score = " + score, 20, 50)

    push()
    imageMode (CENTER)
	image(img9, x, y, 120, 120);
    image(img8, mouseX , height - 50, 200, 200);
    pop()

    y += speed; 

    if (y > height) {
        screen = 11
    }
    
    if (y > height - 100 && x > mouseX -200 && x < mouseX + 200) {
        y = -20
        speed += .5
        score += 1
    }
   
    if (y == -20) {
        pickRandom();
    }

    if (score == 2) {
        screen = 2
    }

}

function win1() {
    image(img2, 0, 0, 1000, 1000);
    reset1();
}


////LEVEL 2. Me Flower//////////////////////

function level2() {
    background(200, 157, 255)
    fill('250');
    textSize(50);
    text("score = " + score, 20, 50)
    
    push()
    imageMode (CENTER)
	image(img10, x, y, 120, 120);
    image(img7, mouseX , height - 50, 200, 200);
    pop()

    y += speed; 

    if (y > height) {
        screen = 12
    }
    
    if (y > height - 100 && x > mouseX -200 && x < mouseX + 200) {
        y = -20
        speed += .5
        score += 1
    }
    
    if (y == -20) {
        pickRandom();
    }

    if (score == 4) {
        screen = 4
    }
}

function win2() {
    image(img3, 0, 0, 1000, 1000);
    reset2();
}


/////LEVEL 3. Fred Hot-dog///////////////////

function level3() {
    background(200, 101, 200)
    fill('250');
    textSize(50);
    text("score = " + score, 20, 50)
    
    push()
    imageMode (CENTER)
	image(img11, x, y, 120, 120);
    image(img8, mouseX , height - 50, 200, 200);
    pop()

    y += speed; 

    if (y > height) {
        screen = 13
    }

    if (y > height - 100 && x > mouseX -200 && x < mouseX + 200) {        y = -20
        speed += .5
        score += 1
    }

    if (y == -20) {
        pickRandom();
    }

    if (score == 6) {
        screen = 6
    }
}

function win3() {
    image(img4, 0, 0, 1000, 1000);
    reset3();
}


/////LEVEL 4. Me Pizza//////////////////////////

function level4() {
    background(200, 157, 255)
    fill('250');
    textSize(50);
    text("score = " + score, 20, 50)

    push()
    imageMode (CENTER)
	image(img12, x, y, 120, 120);
    image(img7, mouseX , height - 50, 200, 200);
    pop()

    y += speed; 

    if (y > height) {
        screen = 14
    }
    
    if (y > height - 100 && x > mouseX -200 && x < mouseX + 200) {        y = -20
        speed += .5
        score += 1
    }

    
    if (y == -20) {
        pickRandom();
    }

    if (score == 8) {
        screen = 8
    }
}

function win4() {
    image(img5, 0, 0, 1000, 1000);
    reset4();
}


//////FINAL. Us Love ////////////////////

function final() {
    background(140, 3, 28)
    fill('250');
    textSize(50);
    text("score = " + score, 20, 50)
    
    push()
    imageMode (CENTER)
	image(img13, x, y, 120, 120);
    image(img8, mouseX , height - 50, 200, 200);
    image(img7, mouseX - 100, height - 50, 200, 200);
    pop()

    y += speed; 

    if (y > height) {
        screen = 15
    }

    if (y > height - 100 && x > mouseX -200 && x < mouseX + 200) {        y = -20
        speed += .5
        score += 1
    }
   
    if (y == -20) {
        pickRandom();
    }

    if (score == 10) {
        screen = 10
    }
}

function winFinal() {
    image(img6, 0, 0, 1000, 1000);
    reset();
}


///////////////////////////LOASE//////////////////////////

function loseScreen1() {
    image(img14, 0, 0, 1000, 1000);
    reset();
}

function loseScreen2() {
    image(img14, 0, 0, 1000, 1000);
    reset1();
}

function loseScreen3() {
    image(img14, 0, 0, 1000, 1000);
    reset2();
}

function loseScreen4() {
    image(img14, 0, 0, 1000, 1000);
    reset3();
}

function loseScreen5() {
    image(img14, 0, 0, 1000, 1000);
    reset4();
}



/////////////////////////////DIFFERENT PLASE FOE ELIPSE//////////////////////////

function pickRandom() {
    x = random(20, width - 20)
}


/////////////////////////////////WHERE TO GO WHEN//////////////////////////

function mousePressed() {
    if (screen == 0) {
        screen = 1
    } else if (screen == 2) {
        screen = 3
    } else if (screen == 4) {
        screen = 5
    } else if (screen == 6) {
        screen = 7
    } else if (screen == 8) {
        screen = 9
    } else if (screen == 10) {
        screen = 0
    } else if (screen == 11) {
        screen = 1
    } else if (screen == 12) {
        screen = 3
    } else if (screen == 13) {
        screen = 5
    } else if (screen == 14) {
        screen = 7
    } else if (screen == 15) {
        screen = 9
    }
}


////////////////////////WHAT SCORE WHEN RESET(N)/////////////////////

function reset() {
    score = 0;
    speed = 4;
    y = -20;
}

function reset1() {
    score = 2;
    speed = 5;
    y = -20;
}

function reset2() {
    score = 4;
    speed = 6;
    y = -20;
}

function reset3() {
    score = 6;
    speed = 7;
    y = -20;
}

function reset4() {
    score = 8;
    speed = 8;
    y = -20;
}