var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const color = document.getElementById('color');
const noise = document.getElementById('noise');
const block = document.getElementById('block');
const texture = document.getElementById('mode');
const pixel = document.getElementById('pigment');
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
var code = '#';
var shift = 22;
var sat = 40;
var light = 11;
var steep = 11;

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

const qrPatten = [
  [1,1,2,2,3,4,3,6,1,6,6,3,2,2,1,3],
  [2,4,4,6,1,6,1,2,6,3,5,1,5,6,4,3],
  [2,5,1,5,2,6,3,2,1,3,5,1,5,3,4,2],
  [2,6,6,5,1,5,6,1,2,5,6,2,6,5,6,2],
  [1,2,2,1,3,5,1,4,1,5,4,2,2,2,3,3],
  [5,4,5,6,6,5,2,4,6,1,4,6,6,5,5,5],
  [4,1,3,3,6,5,3,6,2,2,4,3,1,2,1,5],
  [2,2,1,4,2,2,3,3,6,2,2,6,1,6,2,2],
  [4,1,4,1,4,1,6,1,1,4,4,3,5,5,6,2],
  [1,6,1,2,4,3,3,4,6,2,6,1,1,6,3,6],
  [5,5,5,5,4,6,4,3,1,2,1,2,2,2,3,1],
  [2,2,3,1,2,6,2,1,5,3,3,6,6,1,3,4],
  [2,5,6,4,2,6,2,6,5,5,5,1,5,4,5,1],
  [1,6,2,6,3,5,3,1,6,3,1,2,5,4,1,6],
  [3,4,5,5,1,5,1,5,1,5,2,3,1,6,2,2],
  [3,3,1,2,2,4,6,5,5,1,6,3,4,1,3,5]];

color.addEventListener('click', function() {
  colorPicker(8)
});

noise.addEventListener('click', function() {
  noiseFill()
});

block.addEventListener('click', function() {
  var option = texture.value;
  switch (option) {
    case 'brick':
      brickLayer();
      break;
    case 'wood':
      floorPlan();
      break;
    case 'qrpattern':
      qrTexture();
      break;
    default:
      break;
  }
});

document.getElementById('reset').addEventListener('click', function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
});

document.getElementById('shifter').addEventListener('change', function() {
  shift = document.getElementById('shifter').valueAsNumber;
});

document.getElementById('saturation').addEventListener('change', function() {
  sat = document.getElementById('saturation').valueAsNumber;
});

document.getElementById('lit').addEventListener('change', function() {
  light = document.getElementById('lit').valueAsNumber;
});

document.getElementById('steep').addEventListener('change', function() {
  steep = document.getElementById('steep').valueAsNumber;
});

function patternGenerate() {
  splitter();
  for(var i = 0; i < blockPatten.length; i++) {
    var cube = blockPatten[i];
    for(var j = 0; j < cube.length; j++) {
      var rectData = {
        "x": j,
        "y": i,
        "width": 1,
        "height": 1
      };
      var pixel = cube[j];
      switch(pixel) {
        case 1:
          ctx.fillStyle = one;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
          break;
        case 2:
          ctx.fillStyle = two;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
          break;
        case 3:
          ctx.fillStyle = three;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
          break;
        case 4:
          ctx.fillStyle = four;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
          break;
        case 5:
          ctx.fillStyle = five;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
          break;
        case 6:
          ctx.fillStyle = six;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
          break;
        case 7:
          ctx.fillStyle = seven;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
          break;
        case 8:
          ctx.fillStyle = eight;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
          break;
        default:
          break;
      }
    }
  }
}

function brickLayer() {
  if (colors.value == '') {
    colorPicker(8);
  }
  canvas.style.backgroundColor = "transparent";
  blockPatten = brickPatten;
  patternGenerate();
  colors.value = '';
}

function floorPlan() {
  if (colors.value == '') {
    colorPicker(8);
  }
  canvas.style.backgroundColor = "transparent";
  blockPatten = floorPatten;
  patternGenerate();
  colors.value = '';
}

function qrTexture() {
  if (colors.value == '') {
    colorPicker(8);
  }
  canvas.style.backgroundColor = "transparent";
  blockPatten = qrPatten;
  patternGenerate();
  colors.value = '';
}

function noiseFill() {
  if (colors.value == '') {
    colorPicker(4);
  }
  canvas.style.backgroundColor = "transparent";
  hues = colors.value;
  tones = hues.split(' ');
  tones.splice(4,4)
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

function colorPicker(times) {
  colors.value = '';
  var huel = 0;
  if (pixel.value == '') {
    huel = Math.floor(Math.random() * (360));
  }
  else {
    huel = pixel.valueAsNumber;
  }
  var brightness = light;
  for(let k=0; k<times; k++) {
    code = `hsl(${huel},${sat}%,${brightness}%)`;
    brightness = brightness + steep;
    huel = huel + shift;
    colors.value += code + ' ';
  }
}

function splitter() {
  hues = colors.value;
  tones = hues.split(' ');

  one = tones.shift();
  two = tones.shift();
  three = tones.shift();
  four = tones.shift();
  five = tones.shift();
  six = tones.shift();
  seven = tones.shift();
  eight = tones.shift();
}

