var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
const decorate = document.getElementById('decorator');
const decor = document.getElementById('decor');

var decorPatten = [
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

const orePatten = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0],
  [0,0,0,0,0,0,1,2,1,0,0,0,1,2,1,0],
  [0,0,0,0,0,1,2,3,1,0,0,0,2,2,0,0],
  [0,0,0,0,2,3,3,4,2,0,0,0,0,0,0,0],
  [0,0,0,0,0,2,3,2,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,2,0,0,0,0,0,0,2,1,0],
  [0,0,1,2,0,0,1,0,0,0,0,0,0,0,0,0],
  [0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,1,2,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,2,2,4,3,1,0],
  [0,0,1,1,2,0,0,1,0,0,2,3,3,0,0,0],
  [0,1,2,3,4,3,0,0,0,0,1,2,0,0,0,0],
  [0,0,0,2,3,0,0,0,0,0,0,0,0,0,2,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

const mossPatten = [
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

const grassPatten = [
  [2,3,2,4,2,1,2,3,3,2,4,2,4,1,2,3],
  [2,1,2,3,4,0,2,1,4,2,4,4,3,2,4,1],
  [1,0,2,1,2,0,1,0,2,3,2,3,0,1,2,0],
  [0,0,0,0,0,0,0,0,1,0,2,0,0,0,0,0],
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

decorate.addEventListener('click', function() {
  var option = decor.value;
  switch (option) {
    case 'grass':
      grassLayer();
      break;
    case 'moss':
      mossLayer();
      break;
    case 'ore':
      oreLayer();
      break;
    default:
      break;
  }
});

function decorGenerate() {
  splitter();
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
  for(var i = 0; i < blockPatten.length; i++) {
    var cube2 = decorPatten[i];
    for(var j = 0; j < cube2.length; j++) {
      var rectData = {
        "x": j,
        "y": i,
        "width": 1,
        "height": 1
      };
      var pixel1 = cube2[j];
      switch(pixel1) {
        case 1:
          ctx2.fillStyle = one;
          ctx2.beginPath();
          ctx2.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx2.closePath();
          break;
        case 2:
          ctx2.fillStyle = two;
          ctx2.beginPath();
          ctx2.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx2.closePath();
          break;
        case 3:
          ctx2.fillStyle = three;
          ctx2.beginPath();
          ctx2.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx2.closePath();
          break;
        case 4:
          ctx2.fillStyle = four;
          ctx2.beginPath();
          ctx2.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx2.closePath();
          break;
        case 5:
          ctx2.fillStyle = five;
          ctx2.beginPath();
          ctx2.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx2.closePath();
          break;
        case 6:
          ctx2.fillStyle = six;
          ctx2.beginPath();
          ctx2.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx2.closePath();
          break;
        case 7:
          ctx2.fillStyle = seven;
          ctx2.beginPath();
          ctx2.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx2.closePath();
          break;
        case 8:
          ctx2.fillStyle = eight;
          ctx2.beginPath();
          ctx2.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx2.closePath();
          break;
        default:
          break;
      }
    }
  }
}

function oreLayer() {
  if (colors.value == '') {
    colorPicker(8);
  }
  canvas2.style.backgroundColor = "transparent";
  decorPatten = orePatten;
  decorGenerate();
  colors.value = '';
}

function grassLayer() {
  if (colors.value == '') {
    colorPicker(8);
  }
  canvas2.style.backgroundColor = "transparent";
  decorPatten = grassPatten;
  decorGenerate();
  colors.value = '';
}