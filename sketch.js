// world variable
let world; 

// marker variables
let diglettMarker, bulbasaurMarker;

// artwork variables
let artwork;

// canvas variables
let canvas1, canvas2, canvas3;

function setup() {
    // canvas
    // createCanvas(512, 512).id("2dcanvas");

    canvas1 = createGraphics(400, 400);
    canvas2 = createGraphics(400, 400);
    canvas3 = createGraphics(400, 400);

    canvas1.counter = 0;
    canvas1.openEyeDuration = Math.floor(random(120, 160));

    // construct the A-Frame world
    world = new World('ARScene');

    // grab a reference to our marker in the HTML document
    diglettMarker = world.getMarker("diglettMarker");
    bulbasaurMarker = world.getMarker("bulbasaurMarker");
    slowpokeMarker = world.getMarker("slowpokeMarker");

    // // instantiate object and add to marker     
    // artwork1 = new Artwork(); 
    // artwork2 = new Artwork(); 
    // artwork3 = new Artwork(); 

    // // add stuff to marker
    // diglettMarker.addChild(artwork1.container);
    // bulbasaurMarker.addChild(artwork2.container);
    // slowpokeMarker.addChild(artwork3.container);

    // // create a static container that will always be visible to the user even if marker is not being detected
    // staticContainer = new Container3D({
    //     x: 0, y: 0, z: 0 
    // });

    // // add the static container to the world
    // world.scene.appendChild(staticContainer.tag);
}

function draw() {
    // erase the background
    world.clearDrawingCanvas();

    // use the markers as positional controllers
    if (diglettMarker.isVisible()) {
        // get the position of this marker
        let position1 = diglettMarker.getScreenPosition();
        drawArtwork1(canvas1);
        
        // image drawingCanvas on the marker
        imageMode(CENTER);

        // image + scale
        image(canvas1, position1.x, position1.y, 150, 150);
    }

    // use the markers as positional controllers
    if (bulbasaurMarker.isVisible()) {
        // get the position of this marker
        let position2 = bulbasaurMarker.getScreenPosition();
        drawArtwork2(canvas2);
        
        // image drawingCanvas on the marker
        imageMode(CENTER);

        // image + scale
        image(canvas2, position2.x, position2.y, 150, 150);
    }

    // use the markers as positional controllers
    if (slowpokeMarker.isVisible()) {
        // get the position of this marker
        let position3 = slowpokeMarker.getScreenPosition();
        drawArtwork3(canvas3);
        
        // image drawingCanvas on the marker
        imageMode(CENTER);

        // image + scale
        image(canvas3, position3.x, position3.y, 150, 150);
    }
}

function drawArtwork1(canvas1) {
    canvas1.noStroke();

    // poliwag
    canvas1.fill(102, 148, 207);
    canvas1.rect(0, 0, 400, 400, 20);

    // poliwag's tummy
    canvas1.fill(250, 250, 250);
    canvas1.rect(40, 180, 320, 220, 10);
    canvas1.fill(54, 40, 40);
    canvas1.rect(80, 210, 30, 190);
    canvas1.rect(90, 210, 200, 30);
    canvas1.rect(290, 210, 30, 190);
    canvas1.rect(140, 370, 160, 30); 
    canvas1.rect(140, 280, 30, 120);
    canvas1.rect(140, 270, 120, 30);
    canvas1.rect(230, 280, 30, 70);
    canvas1.rect(200, 320, 60, 30);

    if (canvas1.counter >= 0) {
        // poliwag's eyes
        canvas1.fill(255);
        canvas1.rect(40, 40, 100, 100);
        canvas1.rect(260, 40, 100, 100);
        canvas1.fill(0);
        canvas1.rect(60, 40, 80, 80);
        canvas1.rect(260, 40, 80, 80);
        canvas1.fill(255);
        canvas1.rect(96, 56, 30, 30);
        canvas1.rect(274, 56, 30, 30);
    }

    // poliwag's mouth
    canvas1.fill(241, 200, 217);
    canvas1.rect(160, 140, 80, 60);
    canvas1.fill(78, 46, 67);
    canvas1.rect(180, 160, 40, 20);

    // increase canvas1.counter
    canvas1.counter++;

    if (canvas1.counter == canvas1.openEyeDuration) {
        canvas1.counter = -20;
        canvas1.openEyeDuration = Math.floor(random(120, 160));
    }
}

function drawArtwork2(canvas2) {
    canvas2.fill(random(255), random(255), random(255));
    canvas2.ellipse(random(width), random(height), 50, 50);
}  

function drawArtwork3(canvas3) {
    canvas3.rectMode(CENTER);
    canvas3.fill(random(255), random(255), random(255));
    canvas3.rect(random(width), random(height), 50, 50);
}







