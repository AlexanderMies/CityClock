// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}


//references
// https://columbiaviz.github.io/files/examples/bar_clock/      For the filling time bars/logic thing
// https://editor.p5js.org/Zach.Lo/sketches/r7vochFzl           As a reference for background, I kept the stars because they were neat :)

//constants
var starX = -20
var starY = 500
var starX2 = 850
var starY2 = 470 
var starx3 = -100
var stary3 = 450

var hourBuildingMax = 500
var minuteBuildingMax = 700
var secondBuildingMax =  700


var hourBuildingX = 50
var hourBuildingY = 200

var minuteBuildingX = 300
var minuteBuildingY = 300

var secondBuildingX = 550
var secondBuildingY = 250


function setup() {
  createCanvas(800, 800);
}

function draw() {
  noStroke()
  background(10,40,50);
  
  fill(255,255,10)

  //////////////
  /*/ STARS  /*/
  //////////////
  ellipse(starX, starY,25,25)
  starX = starX + 3
  starY = starY - 2
  fill(210,210,170)
  ellipse(starX2,starY2,15,15,)
  starX2 = starX2 - 5
  starY2 = starY2 -2
  fill(200,200,250)
  ellipse(starx3,stary3,20,20)
  starx3 = starx3 + 4
  stary3 = stary3 -1
  fill(170,170,160)
  ellipse(200,200,20,20)
  ellipse(150,400,20,20)
  ellipse(10,100,20,20)
  ellipse(300,60,20,20)
  ellipse(400,230,20,20)
  ellipse(500,440,20,20)
  ellipse(630,90,20,20)


  var h = map(hour(), 0, 24, 0, hourBuildingMax); // Map the function hour() to values from 0 - barMax
  var m = map(minute(), 0, 60, 0, minuteBuildingMax);
  var s = map(second(), 0, 60, 0, secondBuildingMax);

  ///////////////////
  /*/ BUILDING BG /*/
  ///////////////////
  fill(0)
  //hour building
  rect(hourBuildingX,hourBuildingY,200,500)
  //minute building
  rect(minuteBuildingX,minuteBuildingY,200,400)
  //second building
  rect(secondBuildingX,secondBuildingY,200,450)
  //ground
  ellipse(400,800,1000,300)


  ///////////////
  /*/ BAR FILL /*/
  ///////////////

  //hour
  fill(255,195,51)
  rect(50,200,200,h)

  //minute
  fill(255,249,51)
  rect(300,300,200,m/2)

  //second
  fill(243,242,153)
  rect(550,250,200,s/2)

  ///////////////
  /*/ WINDOWS /*/
  ///////////////

  //hours windows horizontal
  for(var y = hourBuildingY;y<hourBuildingMax+200;y+=40){
    stroke(0)
    strokeWeight(15)
    line(hourBuildingX,y,250,y)
  }
  //hour windows verical
  for(var x = hourBuildingX;x<251;x+=40){
    line(x,hourBuildingY,x,700)
  }

  //minutes windows horizontal
  for(var y = minuteBuildingY;y<minuteBuildingMax+50;y+=40){
    stroke(0)
    strokeWeight(15)
    line(minuteBuildingX,y,500,y)
  }
  //minutes windows verical
  for(var x = minuteBuildingX;x<501;x+=40){
    line(x,minuteBuildingY,x,750)
  }

  //seconds windows horizontal
  for(var y = secondBuildingY;y<secondBuildingMax+30;y+=40){
    stroke(0)
    strokeWeight(15)
    line(secondBuildingX,y,750,y)
  }
  //seconds windows verical
  for(var x = secondBuildingX;x<751;x+=40){
    line(x,secondBuildingY,x,750)
  }


  //////////////////
  /*/ DECORATION /*/
  //////////////////
  strokeWeight(7)
  line(hourBuildingX+50,hourBuildingY,hourBuildingX+50,hourBuildingY - 70)
  line(hourBuildingX+75,hourBuildingY,hourBuildingX+75,hourBuildingY - 120)
  line(secondBuildingX+80,secondBuildingY,secondBuildingX+80,secondBuildingY - 70)
  strokeWeight(0)
  fill(120,0,0)
  ellipse(124,80,10,15)
  ellipse(630,175,10,15)

  //send time to console
  // used https://stackoverflow.com/questions/16332319/using-setinterval-to-display-time
  setInterval(function() {
    var currentDate = new Date()
    var currentMinute = currentDate.getMinutes()
    console.log(currentMinute)
  }, 60000);
  

  
}