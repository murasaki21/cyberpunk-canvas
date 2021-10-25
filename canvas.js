////////////////////////////// 1 /////////////////
function scene1() {
  var canvas, stage;
  var drawingCanvas;
  var oldPt;
  var oldMidPt;
  var title;
  var color;
  var stroke;
  var colors;
  var index;
  var switchButton;

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function() {
      console.log("Light Canvas");
    }

    this.draw = function() {
      fill(200, 0, 0);
      background("red");
      image(bkgd1, 0, 0);
      switchButton.draw();
    }

    this.keyPressed = function() {
      fill(0, 255, 0);
    }
  }
    //canvas code
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

  this.setup = function() {
    console.log("Light Canvas");
    image(bkgd1, 0, 0);
    switchButton = new Clickable(); //Create button
    switchButton.x = 300;
    switchButton.y = 190;
    switchButton.resize(150, 80);
    switchButton.onOutside = function() {
      //console.log("Hey! Press me!");
      this.color = "#ddadff";
      switchButton.strokeWeight = 0; //Stroke width of the clickable (float)
      switchButton.textFont = "Press Start 2P"; //Font of the text (string)
      switchButton.textSize = 20; //Size of the text (integer)
      switchButton.textColor = "#FFFFFF"; //Color of the text (hex number as a string)
      switchButton.text = "switch to dark mode"; //Text of the clickable (string)
    }

    switchButton.onHover = function() {
      //console.log("The cursor is over me!");
      this.color = "#373fc4";
      switchButton.strokeWeight = 0; //Stroke width of the clickable (float)
      switchButton.textFont = "Press Start 2P"; //Font of the text (string)
      switchButton.textSize = 20; //Size of the text (integer)
      switchButton.textColor = "#FFFFFF"; //Color of the text (hex number as a string)
      switchButton.text = "switch to dark mode"; //Text of the clickable (string)
    }

    switchButton.onPress = function() { //When switchButton2 is pressed
      //console.log("I've been pressed!");
      this.color = "#ddadff"; //Change button color
      switchButton.strokeWeight = 0; //Stroke width of the clickable (float)
      switchButton.textFont = "Press Start 2P"; //Font of the text (string)
      switchButton.textSize = 20; //Size of the text (integer)
      switchButton.textColor = "#FFFFFF"; //Color of the text (hex number as a string)
      switchButton.text = "switch to dark mode"; //Text of the clickable (string)
    }

    switchButton.onRelease = function() {
      this.color = "#ddadff";
      switchButton.strokeWeight = 0; //Stroke width of the clickable (float)
      switchButton.textFont = "Press Start 2P"; //Font of the text (string)
      switchButton.textSize = 20; //Size of the text (integer)
      switchButton.text = "switch to dark mode"; //Text of the clickable (string)
      mgr.showScene(scene2);
    }
  }

///////////////////////  2  ////////////////////////

function scene2() {
  var canvas, stage;
  var drawingCanvas;
  var oldPt;
  var oldMidPt;
  var title;
  var color;
  var stroke;
  var colors;
  var index;
  var switchButton2;

  this.enter = function() {
    console.log("Dark Canvas");
  }

  this.draw = function() {
    background("red");
    image(bkgd2, 0, 0);
    switchButton2.draw();
  }

  this.keyPressed = function() {
    fill(0, 255, 0);
  }


    function init() {
      canvas = document.getElementById("Canvas");
      index = 0;
      colors = ["white", "#f848fe", "#ddadff", "#ab12e2", "#4b08af", "#373fc4", "#4b8cfb", "#99B9FF"];

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
  }

  this.setup = function() {
    console.log("Dark Canvas");
    image(bkgd2, 0, 0);
    switchButton2 = new Clickable(); //Create button
    switchButton2.x = 93;
    switchButton2.y = 190;
    switchButton2.resize(300, 100);

    switchButton2.onOutside = function() {
      //console.log("Hey! Press me!");
      this.color = "#373fc4";
      switchButton2.strokeWeight = 0; //Stroke width of the clickable (float)
      switchButton2.textFont = "Press Start 2P"; //Font of the text (string)
      switchButton2.textSize = 20; //Size of the text (integer)
      switchButton2.textColor = "#FFFFFF"; //Color of the text (hex number as a string)
      switchButton2.text = "switch to light mode"; //Text of the clickable (string)
    }

    switchButton2.onHover = function() {
      //console.log("The cursor is over me!");
      this.color = "#ddadff";
      switchButton2.strokeWeight = 0; //Stroke width of the clickable (float)
      switchButton2.textFont = "Press Start 2P"; //Font of the text (string)
      switchButton2.textSize = 20; //Size of the text (integer)
      switchButton2.textColor = "#FFFFFF"; //Color of the text (hex number as a string)
      switchButton2.text = "switch to light mode"; //Text of the clickable (string)
    }

    switchButton2.onPress = function() { //When switchButton2 is pressed
      //console.log("I've been pressed!");
      this.color = "#373fc4"; //Change button color
      switchButton2.strokeWeight = 0; //Stroke width of the clickable (float)
      switchButton2.textFont = "Press Start 2P"; //Font of the text (string)
      switchButton2.textSize = 20; //Size of the text (integer)
      switchButton2.textColor = "#FFFFFF"; //Color of the text (hex number as a string)
      switchButton2.text = "switch to light mode"; //Text of the clickable (string)
    }

    switchButton2.onRelease = function() {
      this.color = "#373fc4";
      switchButton2.strokeWeight = 0; //Stroke width of the clickable (float)
      switchButton2.textFont = "Press Start 2P"; //Font of the text (string)
      switchButton2.textSize = 20; //Size of the text (integer)
      switchButton2.text = "switch to light mode"; //Text of the clickable (string)
      mgr.showScene(scene1);
    }
  }
