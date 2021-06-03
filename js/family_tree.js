var GENDER = {
  MALE: 0,
  FEMALE: 1
};

var offsetX = 10;
var offsetY = 10;
var imageSize = 125;
var textHeight = 20;
var gapX = 25;
var gapY = 50;
var DEFAULT_BACKGROUND = "transparent";
var withName = true;

var dragonList = [];

class Dragon {
  constructor(did, name, gender, location) {
    this.did = did;
    this.name = name;
    this.gender = gender;
    this.location = location;
    dragonList.push(this);
  }

  children(mate) {
    if (mate !== undefined) {
      if (this.gender == GENDER.MALE) {
        return dragonList.filter(i => i.father == this && i.mother == mate);
      } else {
        return dragonList.filter(i => i.mother == this && i.father == mate);
      }
    } else {
      if (this.gender == GENDER.MALE) {
        return dragonList.filter(i => i.father == this);
      } else {
        return dragonList.filter(i => i.mother == this);
      }
    }
    return [];
  }

  mates() {
    var children = this.children();
    var mateList = [];
    for (var i = children.length - 1; i >= 0; i--) {
      if (this.gender == GENDER.MALE) {
        if (children[i].mother && !mateList.includes(children[i].mother)) {
          mateList.push(children[i].mother);
        }
      } else {
        if (children[i].father && !mateList.includes(children[i].father)) {
          mateList.push(children[i].father);
        }
      }
    }
    return mateList;
  }
}

function findDragonByID(did) {
  return dragonList.find(dragon => dragon.did == did);
}

function findDragonByName(name) {
  return dragonList.find(dragon => dragon.name == name);
}

function init(date) {
  dragonList = [];
  date.forEach(dragonDateItem => {
    new Dragon(
      dragonDateItem[0],
      dragonDateItem[1],
      (dragonDateItem[2] == 'M') ? GENDER.MALE : GENDER.FEMALE,
      dragonDateItem[3]
    );
  });
  date.forEach(dragonDateItem => {
    var dragon = findDragonByID(dragonDateItem[0]);
    dragon.father = findDragonByID(dragonDateItem[4]);
    dragon.mother = findDragonByID(dragonDateItem[5]);
  });
};

function getImgUrl(dragonID) {
  var dragonID = parseInt(dragonID);
  var miniDragonId = Math.ceil(dragonID / 100);
  if (dragonID % 100 == 0) {
    miniDragonId += 1;
  }
  return 'http://flightrising.com/rendern/portraits/' + miniDragonId + '/' + dragonID + 'p.png'
}

function drawImage(canvasContext, src, x, y, callback) {
  if (src) {
    var img = new Image();
    img.src = src;
    img.onload = function() {
      canvasContext.drawImage(img, x, y, imageSize, imageSize);
      callback();
    }
  }
}

function drawDragon(canvasContext, dragon, withName, callback) {
  if (dragon) {
    var location = dragon.location;
    var height = withName ? imageSize + textHeight + gapY : imageSize + gapY;
    var x = offsetX + location[1] * (imageSize + gapX);
    var y = offsetY + location[0] * height;
    // draw image
    canvasContext.strokeRect(x, y, imageSize, imageSize);
    drawImage(canvasContext, getImgUrl(dragon.did), x, y, function() {
      callback();
    });
    // draw name
    if (withName) {
      canvasContext.strokeRect(x, y + imageSize, imageSize, textHeight);
      canvasContext.textAlign = "center";
      canvasContext.textBaseline = 'middle';
      canvasContext.font = "14px cursive";
      var genderS = (dragon.gender == GENDER.MALE) ? '♂' : '♀';
      canvasContext.fillText(genderS + ' ' + dragon.name, x + imageSize / 2, y + imageSize + textHeight / 2);
    }
  }
}

function pairPix(dragon, mate, withName) {
  var height = withName ? imageSize + textHeight + gapY : imageSize + gapY;
  if (mate.location[1] < dragon.location[1]) {
    //配偶在左边
    var dragonX = offsetX + dragon.location[1] * (imageSize + gapX);
    var dragonY = offsetY + dragon.location[0] * height + imageSize / 2;
    var mateX = offsetX + mate.location[1] * (imageSize + gapX) + imageSize;
    var mateY = offsetY + mate.location[0] * height + imageSize / 2;
  } else {
    //配偶在右边
    var dragonX = offsetX + dragon.location[1] * (imageSize + gapX) + imageSize;
    var dragonY = offsetY + dragon.location[0] * height + imageSize / 2;
    var mateX = offsetX + mate.location[1] * (imageSize + gapX);
    var mateY = offsetY + mate.location[0] * height + imageSize / 2;
  }
  return [dragonX, dragonY, mateX, mateY];
}

function drawLines(canvasContext, dragon, withName) {
  //配偶
  dragon.mates().forEach(mate => {
    var pPix = pairPix(dragon, mate, withName);
    var dragonX = pPix[0];
    var dragonY = pPix[1];
    var mateX = pPix[2];
    var mateY = pPix[3];
    canvasContext.beginPath();
    canvasContext.moveTo(dragonX, dragonY);
    canvasContext.lineTo(mateX, mateY);
    canvasContext.stroke();
  });
  //孩子
  dragon.children().forEach(child => {
    var height = withName ? imageSize + textHeight + gapY : imageSize + gapY;
    var nameHeight =  withName ? textHeight : 0;
    var childX = offsetX + child.location[1] * (imageSize + gapX) + imageSize / 2;
    var childY = offsetY + child.location[0] * height;
    if (child.father && child.mother) {
      //双亲
      var pPix = pairPix(child.father, child.mother, withName);
      //长辈往下
      canvasContext.beginPath();
      canvasContext.moveTo((pPix[0] + pPix[2]) / 2, pPix[1]);
      canvasContext.lineTo((pPix[0] + pPix[2]) / 2, pPix[1] + imageSize / 2 + nameHeight + gapY / 2);
      canvasContext.stroke();
      //横线
      canvasContext.beginPath();
      canvasContext.moveTo((pPix[0] + pPix[2]) / 2, pPix[1] + imageSize / 2 + nameHeight + gapY / 2);
      canvasContext.lineTo(childX, pPix[1] + imageSize / 2 + nameHeight + gapY / 2);
      canvasContext.stroke();
      //孩子线
      canvasContext.beginPath();
      canvasContext.moveTo(childX, pPix[1] + imageSize / 2 + nameHeight + gapY / 2);
      canvasContext.lineTo(childX, childY);
      canvasContext.stroke();
    } else {
      //长辈往下
      pX = offsetX + dragon.location[1] * (imageSize + gapX) + imageSize / 2;
      pY = offsetY + dragon.location[0] * height + height - gapY;
      canvasContext.beginPath();
      canvasContext.moveTo(pX, pY);
      canvasContext.lineTo(pX, pY + gapY / 2);
      canvasContext.stroke();
      //横线
      canvasContext.beginPath();
      canvasContext.moveTo(pX, pY + gapY / 2);
      canvasContext.lineTo(childX, pY + gapY / 2);
      canvasContext.stroke();
      //孩子线
      canvasContext.beginPath();
      canvasContext.moveTo(childX, pY + gapY / 2);
      canvasContext.lineTo(childX, childY);
      canvasContext.stroke();
    }
  });
}

function drawTree(withName) {
  var canvas = document.getElementById("canvas_ft");
  var maxLX = 0;
  var maxLY = 0;
  dragonList.forEach(dragon => {
    if (dragon.location[0] > maxLX) {
      maxLX = dragon.location[0];
    }
    if (dragon.location[1] > maxLY) {
      maxLY = dragon.location[1];
    }
  });
  var height = withName ? imageSize + textHeight + gapY : imageSize + gapY;
  var canvasHeight = offsetY + height * (maxLX + 1) - gapY + offsetX;
  var canvasWidth = offsetX + (imageSize + gapX) * (maxLY + 1) - gapX + offsetY;
  canvas.setAttribute('width', canvasWidth);
  canvas.setAttribute('height', canvasHeight);
  var canvasContext = canvas.getContext("2d");
  canvasContext.clearRect(0, 0, canvasHeight, canvasWidth);
  dragonList.forEach(dragon => drawDragon(canvasContext, dragon, withName, console.log(dragon.name)))
  dragonList.forEach(dragon => drawLines(canvasContext, dragon, withName))
}

function generate() {
  date = JSON.parse("[" + $('#lists').val() + "]");
  init(date);
  drawTree(withName);
}

generate();

$("[id=draw]").click(generate);