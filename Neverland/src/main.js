var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const color = document.getElementById('color');
const noise = document.getElementById('noise');
const brick = document.getElementById('brick');
const wood = document.getElementById('wood');
var colors = document.getElementById('colors');

var tones = [];
var hues = "#fff";
var one = '#3F1E2D';
var two = '#442131';
var three = '#4B2737';
var four = '#5C3042';
var five = '#6A344B';
var six = '#7E3A56';
var seven = '#863E5A';
var eight = '';
var back = ['#863E5A', '#7E3A56', '#6A344B'];
var fore = [ '#442131', '#3F1E2D', '#4B2737'];
var accent = ['#5C3042', '#4B2737'];

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var blockPatten = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

const brickPatten = [
  [2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,0],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

const floorPatten = [
  [6,5,6,7,7,7,7,7,6,7,7,7,7,7,6,3],
  [6,6,5,5,3,4,5,6,6,6,5,5,6,6,4,4],
  [5,6,6,6,5,6,5,4,4,4,4,5,5,6,6,3],
  [3,2,2,3,3,2,1,1,2,2,1,2,1,1,2,1],
  [6,7,4,7,7,7,7,4,7,7,7,6,5,5,4,6],
  [5,6,6,5,4,5,4,3,4,5,5,6,6,6,6,5],
  [4,4,5,6,5,5,5,3,6,6,6,5,5,4,4,4],
  [1,1,2,2,3,2,1,1,1,1,2,2,2,3,2,1],
  [6,7,7,6,5,5,7,7,7,7,7,7,7,7,6,4],
  [6,5,6,6,6,6,5,4,4,4,5,4,5,4,4,3],
  [7,6,5,5,4,4,4,4,5,5,5,5,4,4,6,4],
  [1,1,2,3,3,2,1,1,1,2,3,2,2,1,1,1],
  [7,4,6,7,7,6,6,4,7,7,7,4,7,6,7,7],
  [5,5,6,6,4,4,5,4,4,6,6,5,6,5,5,5],
  [5,4,4,5,6,5,4,3,6,6,5,4,4,4,4,4],
  [1,2,2,1,1,2,3,3,3,2,1,2,1,1,1,1]];

color.addEventListener('click', function() {
  colorPicker()
});

noise.addEventListener('click', function() {
  noiseFill()
});

brick.addEventListener('click', function() {
  brickLayer()
});

wood.addEventListener('click', function() {
  floorPlan()
});

function patternGenerate() {
  for(var i = 0; i < blockPatten.length; i++) {
    var cube = blockPatten[i];
    for(var j = 0; j < cube.length; j++) {
      var rectData = {
        "x": j,
        "y": i,
        "width": 1,
        "height": 1
      };
      if (cube[j] == 1) {
        ctx.fillStyle = one;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
      }
      else if (cube[j] == 2){
        ctx.fillStyle = two;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
      }
      else if (cube[j] == 3){
        ctx.fillStyle = three;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
      }
      else if (cube[j] == 4){
        ctx.fillStyle = four;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
      }
      else if (cube[j] == 5){
        ctx.fillStyle = five;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
      }
      else if (cube[j] == 6){
        ctx.fillStyle = six;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
      }
      else if (cube[j] == 7){
        ctx.fillStyle = seven;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
      }
      else {
        ctx.fillStyle = eight;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
      }
    }
  }
}

function brickLayer() {
  canvas.style.backgroundColor = "white";
  blockPatten = brickPatten
  patternGenerate();
}

function floorPlan() {
  canvas.style.backgroundColor = "white";
  blockPatten = floorPatten
  patternGenerate();
}

function noiseFill() {
  hues = colors.value;
  tones = hues.split(' ');

  canvas.style.backgroundColor = "black";
  for(var i = 0; i < blockPatten.length; i++) {
      var cube = blockPatten[i];
      for(var j = 0; j < cube.length; j++) {
        var rectData = {
          "x": j,
          "y": i,
          "width": 1,
          "height": 1
        };
        ctx.fillStyle = tones.random();
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
      }
  }
}
