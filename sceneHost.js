var bkgd1;
var bkgd2;

function preload() {

   bkgd1 = loadImage("imgs/light_canvas.png");
   bkgd2 = loadImage("imgs/dark_canvas.png");
}

// define your p5.play sprites as global objects first.

// global manager object
var mgr;

function setup() {
    createCanvas(1920,1080);
    //console.log(hell);
     mgr = new SceneManager();
     masterVolume(.05);
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
    // You can optionaly handle the key press at global level...
    switch(key)
    {
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
