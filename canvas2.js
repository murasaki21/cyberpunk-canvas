//toggle button vars
var bkgd1;
var bkgd2;
var gui;
var switchToDark;

//canvas vars
var canvas, stage;
var drawingCanvas;
var oldPt;
var oldMidPt;
var title;
var canvasColor;
var canvasStroke;
var colors;
var index;

//////toggle button code
function preload(){
  bkgd1 = loadImage("images/light_canvas.png");
  bkgd2 = loadImage("images/dark_canvas.png");
}

function setup() {
  createCanvas(1500, 800);
  image(bkgd1, 0, 0);
  gui = createGui();
  // Create toggle button (x,y,width,height)
  switchToDark = createToggle("Switch to Dark", 630, 5, 250, 40);
}

function draw() {
  background(7, 19, 105);
  drawGui();
  image(bkgd1, 0, 55);

  switchToDark.setStyle({
      //default button
      strokeWeight: 0,
      fillBgOff: color("#ddadff"),
      fillLabelOff: color("#FFFFFF"),
      rounding: 10,
      textSize: 15,
      font:'"Press Start 2P", cursive',

      //hover Button to Dark
      fillBgOffHover: color("#373fc4"),
      fillLabelOffHover: color("#FFFFFF"),
      fillBgOffActive: color("#373fc4"),
      fillLabelOffActive: color("FFFFFF"),

      //Dark Mode On button
      fillBgOn: color("#373fc4"),
      fillLabelOn: color("#FFFFFF"),

      //hover Button to Light
      fillBgOnHover: color("#ddadff"),
      fillLabelOnHover: color("#FFFFFF"),
      fillBgOnActive: color("#ddadff"),
      fillLabelOnActive: color("FFFFFF"),
  });

  if (switchToDark.isPressed) {
    switchToDark.labelOn = "Switch to Light";
  }

  if (switchToDark.val) {
    // Draw an ellipse when Checkbox is true.
    fill(255, 0, 0);
    image(bkgd2, 0, 55);
  }
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}

///////Canvas code
function init() {
  canvas = document.getElementById("Canvas");
  index = 0;
  colors = ["black", "#f848fe", "#ddadff", "#ab12e2", "#4b08af", "#373fc4", "#4b8cfb", "#99B9FF"];

  //check to see if we are running in a browser with touch support
  stage = new createjs.Stage(canvas);
  stage.autoClear = false;
  stage.enableDOMEvents(true);

  createjs.Touch.enable(stage);
  createjs.Ticker.framerate = 24;

  drawingCanvas = new createjs.Shape();

  stage.addEventListener("stagemousedown", handleMouseDown);
  stage.addEventListener("stagemouseup", handleMouseUp);

  title = new createjs.Text("begin drawing", "36px Arial", "gray");
  title.x = 650;
  title.y = 300;
  stage.addChild(title);

  stage.addChild(drawingCanvas);
  stage.update();
}

function handleMouseDown(event) {
  if (!event.primary) {
    return;
  }
  if (stage.contains(title)) {
    stage.clear();
    stage.removeChild(title);
  }
  color = colors[(index++) % colors.length];
  stroke = 10;
  oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
  oldMidPt = oldPt.clone();
  stage.addEventListener("stagemousemove", handleMouseMove);
}

function handleMouseMove(event) {
  if (!event.primary) {
    return;
  }
  var midPt = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);

  drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'square', 'square').beginStroke(color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

  oldPt.x = stage.mouseX;
  oldPt.y = stage.mouseY;

  oldMidPt.x = midPt.x;
  oldMidPt.y = midPt.y;

  stage.update();
}

function handleMouseUp(event) {
  if (!event.primary) {
    return;
  }
  stage.removeEventListener("stagemousemove", handleMouseMove);
}

/*var canvas;
var switchToDark;
var bkgd1;
var bkgd2;

function preload(){
  bkgd1 = loadImage("images/light_canvas.png");
  bkgd2 = loadImage("images/dark_canvas.png");
}

function setup() {
  createCanvas(1920, 1080);
  //Create, style and resize clickables.
  switchToDark = new Clickable();
  switchToDark.locate(550, 20);

  //default button
  switchToDark.onOutside = function () {
    this.color = "#ddadff";
    this.text = "Switch to Dark";
    this.textColor = "#FFFFFF";
    this.strokeWeight = 0;
    this.textFont = '"Press Start 2P", cursive';
    this.textSize = 15;
    this.resize(240, 50);
  }

  switchToDark.onHover = function () {
    this.color = "#373fc4";
    this.textColor = "#FFFFFF";
    this.text = "Switch to Dark";
  }

  switchToDark.onPress = function () {
    this.color = "#ddadff";
  }

  switchToDark.onRelease = function () {
    //this.x += 50;
    image(bkgd2, 0, 0);
  }
}

function draw() {
  background(255);
  image(bkgd1, 0, 0);
  switchToDark.draw();
}*/
