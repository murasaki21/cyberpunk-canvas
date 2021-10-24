////////////////////////////// 1 /////////////////
function scene1()  {
    var switchButton;
// scene1.setup

    this.setup = function() {
      console.log("Light Canvas");
      image(bkgd1,0,0);
      switchButton = new Clickable();         //Create button
      switchButton.x = 300;
      switchButton.y = 190;
      switchButton.resize(150,80);
      switchButton.onOutside = function(){
        //console.log("Hey! Press me!");
        this.color = "#AED9E0";
        switchButton.strokeWeight = 0;        //Stroke width of the clickable (float)
        switchButton.textFont = "Press Start 2P";     //Font of the text (string)
        switchButton.textSize = 20;           //Size of the text (integer)
        switchButton.textColor = "#FFFFFF";   //Color of the text (hex number as a string)
        switchButton.text = "switch to dark mode";          //Text of the clickable (string)
      }

      switchButton.onHover = function(){
        //console.log("The cursor is over me!");
        this.color = "#FFA69E";
        switchButton.strokeWeight = 0;        //Stroke width of the clickable (float)
        switchButton.textFont = "Press Start 2P";     //Font of the text (string)
        switchButton.textSize = 20;           //Size of the text (integer)
        switchButton.textColor = "#FFFFFF";   //Color of the text (hex number as a string)
        switchButton.text = "switch to dark mode";          //Text of the clickable (string)
      }

      switchButton.onPress = function(){      //When switchButton2 is pressed
        //console.log("I've been pressed!");
        this.color = "#FFA69E";           //Change button color
        switchButton.strokeWeight = 0;        //Stroke width of the clickable (float)
        switchButton.textFont = "Press Start 2P";     //Font of the text (string)
        switchButton.textSize = 20;           //Size of the text (integer)
        switchButton.textColor = "#FFFFFF";   //Color of the text (hex number as a string)
        switchButton.text = "switch to dark mode";          //Text of the clickable (string)
      }

      switchButton.onRelease = function(){
        this.color = "#AED9E0";
        switchButton.strokeWeight = 0;        //Stroke width of the clickable (float)
        switchButton.textFont = "Press Start 2P";     //Font of the text (string)
        switchButton.textSize = 20;           //Size of the text (integer)
        switchButton.text = "switch to dark mode";          //Text of the clickable (string)
        mgr.showScene(scene2);
      }

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function() {
        console.log("Light Canvas");

    }


    this.draw = function() {
        fill(200,0,0);
        background("red");
        image(bkgd1,0,0);
        switchButton.draw();
    }

    this.keyPressed = function() {
        fill(0,255,0);
    }
}

///////////////////////  2  ////////////////////////

function scene2()  {
    // important to create object here not in set
    var switchButton;

  this.setup = function() {
      console.log("Dark Canvas");
      image(bkgd2,0,0);
      switchButton2 = new Clickable();         //Create button
      switchButton2.x = 93;
      switchButton2.y = 190;
      switchButton2.resize(300,100);

      switchButton2.onOutside = function(){
        //console.log("Hey! Press me!");
        this.color = "#AED9E0";
        switchButton2.strokeWeight = 0;        //Stroke width of the clickable (float)
        switchButton2.textFont = "Press Start 2P";     //Font of the text (string)
        switchButton2.textSize = 20;           //Size of the text (integer)
        switchButton2.textColor = "#FFFFFF";   //Color of the text (hex number as a string)
        switchButton2.text = "switch to light mode";          //Text of the clickable (string)
      }

      switchButton2.onHover = function(){
        //console.log("The cursor is over me!");
        this.color = "#FFA69E";
        switchButton2.strokeWeight = 0;        //Stroke width of the clickable (float)
        switchButton2.textFont = "Press Start 2P";     //Font of the text (string)
        switchButton2.textSize = 20;           //Size of the text (integer)
        switchButton2.textColor = "#FFFFFF";   //Color of the text (hex number as a string)
        switchButton2.text = "switch to light mode";          //Text of the clickable (string)
      }

      switchButton2.onPress = function(){      //When switchButton2 is pressed
        //console.log("I've been pressed!");
        this.color = "#FFA69E";           //Change button color
        switchButton2.strokeWeight = 0;        //Stroke width of the clickable (float)
        switchButton2.textFont = "Press Start 2P";     //Font of the text (string)
        switchButton2.textSize = 20;           //Size of the text (integer)
        switchButton2.textColor = "#FFFFFF";   //Color of the text (hex number as a string)
        switchButton2.text = "switch to light mode";          //Text of the clickable (string)
      }

      switchButton2.onRelease = function(){
        this.color = "#AED9E0";
        switchButton2.strokeWeight = 0;        //Stroke width of the clickable (float)
        switchButton2.textFont = "Press Start 2P";     //Font of the text (string)
        switchButton2.textSize = 20;           //Size of the text (integer)
        switchButton2.text = "switch to light mode";          //Text of the clickable (string)
        mgr.showScene(scene1);
      }
  }

  this.enter = function() {
    console.log("Dark Canvas");
  }

  this.draw = function(){
    background("red");
    image(bkgd2,0,0);
    switchButton2.draw();
  }

    this.keyPressed = function() {
        fill(0,255,0);
    }
}
