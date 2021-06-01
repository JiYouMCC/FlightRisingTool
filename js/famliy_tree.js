var GENDER = {
  MALE: 0,
  FEMALE: 1
};

var offsetX = 50;
var offsetY = 50;
var DEFAULT_BACKGROUND = "transparent";

var dragonList = [];

class Dragon {
  constructor(did, name, gender,location) {
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
  date.forEach(dragonDateItem =>{
    new Dragon(
      dragonDateItem[0],
      dragonDateItem[1],
      (dragonDateItem[2] == 'M') ? GENDER.MALE : GENDER.FEMALE,
      dragonDateItem[3]
    );
  });
  date.forEach(dragonDateItem =>{
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
      canvasContext.drawImage(img, x, y, 80, 80);
      callback();
    }
  }
}

function drawDragon(canvasContext, dragon, withName, callback) {
  if (dragon) {
    var location = dragon.location;
    var height = withName? 180 : 160;
    var x = offsetX + location[1] * 160;
    var y = offsetY + location[0] * height;
    // draw image
    canvasContext.strokeRect(x, y, 80, 80);
    drawImage(canvasContext, getImgUrl(dragon.did), x, y, function(){
      callback();
    });
    // draw name
    if (withName) {
      canvasContext.strokeRect(x, y + 80, 80, 20);
      canvasContext.textAlign = "center";
      var genderS = (dragon.gender == GENDER.MALE)?'♂':'♀';
      canvasContext.fillText(genderS + ' '+dragon.name, x + 40, y + 90);
    }
  }
}

function pairPix(dragon,mate,withName) {
  var height = withName? 180 : 160;
  if(mate.location[1] < dragon.location[1]) {
      //配偶在左边
      var dragonX = offsetX + dragon.location[1] * 160;
      var dragonY = offsetY + dragon.location[0] * height + 40;
      var mateX= offsetX + mate.location[1] * 160 + 80;
      var mateY= offsetY + mate.location[0] * height + 40;
    } else {
      //配偶在右边
      var dragonX = offsetX + dragon.location[1] * 160 + 80;
      var dragonY = offsetY + dragon.location[0] * height + 40;
      var mateX= offsetX + mate.location[1] * 160;
      var mateY= offsetY + mate.location[0] * height + 40;
    }
    return [dragonX, dragonY, mateX, mateY];
}

function drawLines(canvasContext,dragon,withName) {
  //配偶
  dragon.mates().forEach(mate => {
    var pPix = pairPix(dragon,mate,withName);
    var dragonX = pPix[0];
    var dragonY = pPix[1];
    var mateX= pPix[2];
    var mateY= pPix[3];
    canvasContext.beginPath();
    canvasContext.moveTo(dragonX, dragonY);
    canvasContext.lineTo(mateX,mateY );
    canvasContext.stroke();
  });
  //孩子
  dragon.children().forEach(child =>{
    var height = withName? 180 : 160;
    var lh = withName?20:0;
    var childX = offsetX + child.location[1] * 160 + 40;
    var childY = offsetY + child.location[0] * height;
    if (child.father && child.mother) {
      //双亲
      var pPix = pairPix(child.father, child.mother, withName);
      //长辈往下
      canvasContext.beginPath();
      canvasContext.moveTo((pPix[0] + pPix[2])/2, pPix[1]);
      canvasContext.lineTo((pPix[0] + pPix[2])/2, pPix[1] + 40 + lh + 40 );
      canvasContext.stroke();
      //横线
      canvasContext.beginPath();
      canvasContext.moveTo((pPix[0] + pPix[2])/2, pPix[1] + 40 + lh +40);
      canvasContext.lineTo(childX, pPix[1] + 40 + lh + 40 );
      canvasContext.stroke();
      //孩子线
      canvasContext.beginPath();
      canvasContext.moveTo(childX, pPix[1] + 40 + lh + 40);
      canvasContext.lineTo(childX, childY);
      canvasContext.stroke();
    } else {
      //长辈往下
      pX = offsetX + dragon.location[1] * 160 + 40;
      pY = offsetY + dragon.location[0] * height + height - 80;
      canvasContext.beginPath();
      canvasContext.moveTo(pX, pY);
      canvasContext.lineTo(pX, pY+40);
      canvasContext.stroke();
      //横线
      canvasContext.beginPath();
      canvasContext.moveTo(pX, pY+40);
      canvasContext.lineTo(childX, pY + 40 );
      canvasContext.stroke();
      //孩子线
      canvasContext.beginPath();
      canvasContext.moveTo(childX, pY + 40);
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
    if (dragon.location[0] > maxLX)
      maxLX = dragon.location[0];
    if (dragon.location[1] > maxLY)
      maxLY = dragon.location[1];
  });
  var height = withName? 180 : 160;
  var width = offsetX + height * (maxLX + 1) -80 + offsetX;
  var hidth = offsetY + 160 * (maxLY + 1) - 80 + offsetY;
  canvas.setAttribute('width', hidth);
  canvas.setAttribute('height', width);
  var canvasContext = canvas.getContext("2d");
  canvasContext.clearRect(0, 0, width, height);
  dragonList.forEach(dragon => drawDragon(canvasContext,dragon,withName,console.log(dragon.name)))
  dragonList.forEach(dragon => drawLines(canvasContext, dragon, withName))
}

var date = [
  ['66097884', 'Mistletoe', 'M', [0,2],'', ''],
  ['64879516', 'Nivur', 'F', [0,3],'', ''],
  ['67700989', 'TreePlanter', 'M', [1,1],'66097884','64879516' ],
  ['66780586', 'DarkRing', 'F', [1,0],'', ''],
  ['66611170', 'Unnamed', 'M', [2,3.5],'','' ],
  ['68519855', 'Sleepy', 'F', [2,2.5],'66222638', '66993894'],
  ['69398228', 'RaggedGauze', 'F', [2,0.5],'67700989','66780586'],
  ['19643291', 'Kongzhu', 'M', [2,1.5],'', ''],
  ['66993894', 'Oreo', 'F', [1,2],'66097884','64879516'],
  ['69443377', 'MnM', 'F', [1,4],'66097884', '64879516'],
  ['66222638', 'GuangMingYouBei', 'M', [1,3],'', '']
];

init(date);
drawTree(true);
