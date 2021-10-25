var bkgd1;
var bkgd2;

function preload() {
   bkgd1 = loadImage("images/light_canvas.png");
   bkgd2 = loadImage("images/dark_canvas.png");
}

// global manager object
var mgr;

function setup() {
    //createCanvas(1510, 670);
    //createCanvas(1920,1080);
     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
}

function draw(){
    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed(){
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed(){
    switch(key){
        case '1':
            mgr.showScene( scene1 );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
