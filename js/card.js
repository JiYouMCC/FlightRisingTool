FRTool.initFR(FRData);
var DEFAULT_FONT = "14pt cursive";
var DEFAULT_BACKGROUND = "transparent";
var DEFAULT_NAME_FONT = "24pt cursive";
var defaultAge = 'Modern';

function getRandomNumber(range) {
  return range[Math.floor(Math.random() * range.length)];
}

function getImgUrl(dragonID, isLeft) {
  if (dragonID == "") {
    if (isLeft) {
      dragonID = getRandomNumber([1, 6, 7, 8, 9, 11]);
    } else {
      dragonID = getRandomNumber([2, 3, 4, 5, 10]);
    }
  }
  var dragonID = parseInt(dragonID);
  var miniDragonId = Math.ceil(dragonID / 100);
  if (dragonID % 100 == 0) {
    miniDragonId += 1;
  }
  return 'http://flightrising.com/rendern/350/' + miniDragonId + '/' + dragonID + '_350.png'
}

function ageChangeInit() {
  defaultAge = $('#age').val();
  if (defaultAge == undefined || defaultAge == "") {
    defaultAge = 'Modern';
  }
  initGeneSelect('o_Primary_gene', 'Primary', defaultAge);
  initGeneSelect('a_Primary_gene', 'Primary', defaultAge);
  initGeneSelect('o_Secondary_gene', 'Secondary', defaultAge);
  initGeneSelect('a_Secondary_gene', 'Secondary', defaultAge);
  initGeneSelect('o_Tertiary_gene', 'Tertiary', defaultAge);
  initGeneSelect('a_Tertiary_gene', 'Tertiary', defaultAge);
  initBreedSelect('o_breed', defaultAge);
  initBreedSelect('a_breed', defaultAge);
  localize(language_code);
}

function initGeneSelect(id, type, age) {
  $('#' + id).html("");
  for (var i = 0; i < FRTool.Oddss.length; i++) {
    var genes = FRTool.getGene(FRTool.Oddss[i], type, age);
    var group = $("<optgroup></optgroup>")
      .attr("data-localize", FRTool.Oddss[i].Name)
      .attr("label", FRTool.Oddss[i].Name);
    for (var j = 0; j < genes.length; j++) {
      group.append($("<option></option>")
        .attr("data-localize", genes[j].Name)
        .attr("value", genes[j].Name)
        .text(genes[j].Name));
    };
    $('#' + id).append(group);
  };
}

function initColorSelect(id) {
  for (var i = 0; i < FRTool.Colors.length; i++) {
    $('#' + id).append(
      $("<option></option>")
      .attr("data-localize", FRTool.Colors[i].Name)
      .attr("class", FRTool.Colors[i].Name)
      .attr("value", FRTool.Colors[i].Name)
      .text(FRTool.Colors[i].Name)
    );
  }
}

function initBreedSelect(id, age) {
  $('#' + id).html("");
  for (var i = 0; i < FRTool.Oddss.length; i++) {
    var breeds = FRTool.getBreed(FRTool.Oddss[i], age);
    var group = $("<optgroup></optgroup>")
      .attr("data-localize", FRTool.Oddss[i].Name)
      .attr("label", FRTool.Oddss[i].Name);
    for (var j = 0; j < breeds.length; j++) {
      group.append($("<option></option>")
        .attr("data-localize", breeds[j].Name)
        .attr("value", breeds[j].Name)
        .text(breeds[j].Name));
    };
    if (breeds.length > 0) {
      $('#' + id).append(group);
    }
  };
}

function initAgeSelect(id) {
  for (var i = 0; i < FRTool.Ages.length; i++) {
    $('#' + id).append(
      $("<option></option>")
      .attr("data-localize", FRTool.Ages[i].Name)
      .attr("class", FRTool.Ages[i].Name)
      .attr("value", FRTool.Ages[i].Name)
      .text(FRTool.Ages[i].Name)
    );
  }
}

function UpdateColorClass(colorSelect) {
  colorSelect.removeClass();
  colorSelect.addClass("form-control");
  colorSelect.addClass(colorSelect.val());
}

function drawName(canvasContext, text, x, y, font, textAlign, color, shadowcolor) {
  canvasContext.font = font || DEFAULT_NAME_FONT;
  canvasContext.textAlign = textAlign
  canvasContext.shadowOffsetX = 2;
  canvasContext.shadowOffsetY = 2;
  canvasContext.shadowBlur = 2;
  canvasContext.shadowColor = shadowcolor;
  canvasContext.fillStyle = color;
  canvasContext.fillText(text, x, y);
}

function drawImage(canvasContext, src, x, y, width, height, flip, callback) {
  if (src) {
    var img = new Image();
    img.src = src;

    img.onload = function() {
      if (flip) {
        img.crossOrigin = "Anonymous";
        canvasContext.scale(-1, 1);
        canvasContext.drawImage(img, -x - width, y, width, height);
        canvasContext.scale(-1, 1);
      } else {
        canvasContext.drawImage(img, x, y, width, height);
      }
      callback();
    }
  }
}

function drawColorRange(canvasContext, range, lineColor, y) {
  var single = 10;
  var width;
  do {
    single -= 1;
    width = range.length * (single + 1);
  } while (width > 200);
  var startX = 320 - width / 2;
  for (var i = 0; i < range.length; i++) {
    canvasContext.lineWidth = "2";
    canvasContext.strokeStyle = lineColor;
    canvasContext.lineCap = "square";
    canvasContext.beginPath();
    canvasContext.rect(startX, y, single, 20);
    canvasContext.stroke();

    canvasContext.fillStyle = range[i].Color;
    canvasContext.fillRect(startX, y, single, 20);
    startX += single + 1;
  }
}

function drawGene(canvasContext, font, gene1, gene2, color, leftcolor, rightcolor, y) {
  var width = 80;
  var imgWidth = 640;
  canvasContext.font = font || DEFAULT_FONT;
  if (gene1 == gene2) {
    canvasContext.textAlign = "center";
    canvasContext.fillStyle = color;
    canvasContext.fillText(gene1.Name, imgWidth / 2, y);
    canvasContext.fillRect((imgWidth - width) / 2, y + 4, width, 3);
  } else {
    var rate = FRTool.getGeneRate(gene1, gene2);
    canvasContext.textAlign = "end";
    canvasContext.fillStyle = leftcolor;
    canvasContext.fillText(gene1.Name, imgWidth / 2 - 6, y);
    canvasContext.fillRect(imgWidth / 2 - width - 1, y + 4, width * 2 * rate[0], 3);
    canvasContext.textAlign = "start";
    canvasContext.fillStyle = rightcolor;
    canvasContext.fillText(gene2.Name, imgWidth / 2 + 6, y);
    canvasContext.fillRect(imgWidth / 2 - width + 1 + width * 2 * rate[0], y + 4, width * 2 * rate[1], 3);
  }
}

function drawBreed(canvasContext, font, breed1, breed2, color, leftcolor, rightcolor, y) {
  var width = 80;
  var imgWidth = 640;
  canvasContext.font = font || DEFAULT_FONT;
  if (breed1 == breed2) {
    canvasContext.textAlign = "center";
    canvasContext.fillStyle = color;
    canvasContext.fillText(breed1.Name, imgWidth / 2, y);
    canvasContext.fillRect((imgWidth - width) / 2, y + 4, width, 3);
  } else {
    var rate = FRTool.getBreedRate(breed1, breed2);
    canvasContext.textAlign = "end";
    canvasContext.fillStyle = leftcolor;
    canvasContext.fillText(breed1.Name, imgWidth / 2 - 6, y);
    canvasContext.fillRect(imgWidth / 2 - width - 1, y + 4, width * 2 * rate[0], 3);
    canvasContext.textAlign = "start";
    canvasContext.fillStyle = rightcolor;
    canvasContext.fillText(breed2.Name, imgWidth / 2 + 6, y);
    canvasContext.fillRect(imgWidth / 2 - width + 1 + width * 2 * rate[0], y + 4, width * 2 * rate[1], 3);
  }
}

function drawCard(canvasId, cardData) {
  var canvas = document.getElementById(canvasId);
  canvas.setAttribute('width', '640');
  canvas.setAttribute('height', '240');
  var canvasContext = canvas.getContext("2d");
  canvasContext.clearRect(0, 0, 640, 240);


  // background
  canvasContext.fillStyle = cardData.background || DEFAULT_BACKGROUND;
  canvasContext.fillRect(0, 0, 640, 240);

  // breed
  drawBreed(canvasContext, cardData.geneFont,
    cardData.dragon1.breed, cardData.dragon2.breed,
    cardData.geneColor.basic, cardData.geneColor.left, cardData.geneColor.right, 31);

  // primary gene
  drawGene(canvasContext, cardData.geneFont,
    cardData.dragon1.primarygene, cardData.dragon2.primarygene,
    cardData.geneColor.basic, cardData.geneColor.left, cardData.geneColor.right, 66);

  // primary color
  drawColorRange(canvasContext,
    FRTool.getColorRange(cardData.dragon1.primarycolor, cardData.dragon2.primarycolor),
    cardData.lineColor, 80);

  // secondary gene
  drawGene(canvasContext, cardData.geneFont,
    cardData.dragon1.secondarygene, cardData.dragon2.secondarygene,
    cardData.geneColor.basic, cardData.geneColor.left, cardData.geneColor.right, 128);

  // secondary color
  drawColorRange(canvasContext,
    FRTool.getColorRange(cardData.dragon1.secondarycolor, cardData.dragon2.secondarycolor),
    cardData.lineColor, 142);

  // tertiary gene
  drawGene(canvasContext, cardData.geneFont,
    cardData.dragon1.tertiarygene, cardData.dragon2.tertiarygene,
    cardData.geneColor.basic, cardData.geneColor.left, cardData.geneColor.right, 190);

  // tertiary color
  drawColorRange(canvasContext,
    FRTool.getColorRange(cardData.dragon1.tertiarycolor, cardData.dragon2.tertiarycolor),
    cardData.lineColor, 204);

  // image 1
  drawImage(canvasContext, getImgUrl(cardData.dragon1.id, false),
    0, 0, 240, 240, cardData.dragon1.imgflip,
    function() {
      if (cardData.dragonName.enable) {
        drawName(canvasContext,
          cardData.dragon1.name, 20, 200,
          cardData.dragonName.font, "start",
          cardData.dragonName.color, cardData.dragonName.shadowcolor);
      }
    });

  // image 2
  drawImage(canvasContext, getImgUrl(cardData.dragon2.id, true),
    400, 0, 240, 240, cardData.dragon2.imgflip,
    function() {
      if (cardData.dragonName.enable) {
        drawName(canvasContext,
          cardData.dragon2.name, 620, 200,
          cardData.dragonName.font, "end",
          cardData.dragonName.color, cardData.dragonName.shadowcolor);
      }
    });

  return canvas;
}

function setCookie(cookie, label) {
  if (Cookies.get(cookie)) {
    $('#' + label).val(Cookies.get(cookie));
  }
}

function setCheckCookie(cookie, label) {
  if (Cookies.get(cookie)) {
    $('#' + label).prop("checked", Cookies.get(cookie));
  }
}


initAgeSelect('age');
setCookie("age", "age");
ageChangeInit();

initColorSelect('o_primary_color');
initColorSelect('o_secondary_color');
initColorSelect('o_tertiary_color');
initColorSelect('a_primary_color');
initColorSelect('a_secondary_color');
initColorSelect('a_tertiary_color');

setCookie("o_breed", "o_breed");
setCookie("a_breed", "a_breed");
setCookie("o_name", "o_name");
setCookie("a_name", "a_name");
setCookie("o_id", "o_id");
setCookie("a_id", "a_id");
setCheckCookie("o_flip", "o_flip");
setCheckCookie("a_flip", "a_flip");

for (var i = $("[id$=_gene]").length - 1; i >= 0; i--) {
  var form = $($("[id$=_gene]")[i]);
  setCookie(form.attr('id').substring(0, form.attr('id').length - 5), form.attr('id'));
};

for (var i = $("[id$=_color]").length - 1; i >= 0; i--) {
  var form = $($("[id$=_color]")[i]);
  setCookie(form.attr('id'), form.attr('id'));
};

for (var i = $("[id$=_Color]").length - 1; i >= 0; i--) {
  var form = $($("[id$=_Color]")[i]);
  setCookie(form.attr('id'), form.attr('id'));
};

$("[id$=age]").change(function() {
  Cookies.set('age', $('#age').val());
  ageChangeInit();
  $("[id$=_breed]").change();
  $("[id$=_gene]").change();
});

$("[id=draw]").click(function() {
  var age = $('#age').val();
  var card_data = {
    'dragon1': {
      'id': $('#o_id').val(),
      'name': $('#o_name').val(),
      'breed': FRTool[age + 'Breed'][$('#o_breed').val()],
      'primarygene': FRTool[age + 'PrimaryGene'][$('#o_Primary_gene').val()],
      'secondarygene': FRTool[age + 'SecondaryGene'][$('#o_Secondary_gene').val()],
      'tertiarygene': FRTool[age + 'TertiaryGene'][$('#o_Tertiary_gene').val()],
      'primarycolor': FRTool.Color[$('#o_primary_color').val()],
      'secondarycolor': FRTool.Color[$('#o_secondary_color').val()],
      'tertiarycolor': FRTool.Color[$('#o_tertiary_color').val()],
      'imgflip': $('#o_flip').is(':checked')
    },
    'dragon2': {
      'id': $('#a_id').val(),
      'name': $('#a_name').val(),
      'breed': FRTool[age + 'Breed'][$('#a_breed').val()],
      'primarygene': FRTool[age + 'PrimaryGene'][$('#a_Primary_gene').val()],
      'secondarygene': FRTool[age + 'SecondaryGene'][$('#a_Secondary_gene').val()],
      'tertiarygene': FRTool[age + 'TertiaryGene'][$('#a_Tertiary_gene').val()],
      'primarycolor': FRTool.Color[$('#a_primary_color').val()],
      'secondarycolor': FRTool.Color[$('#a_secondary_color').val()],
      'tertiarycolor': FRTool.Color[$('#a_tertiary_color').val()],
      'imgflip': $('#a_flip').is(':checked')
    },
    'dragonName': {
      'enable': true,
      'font': $('#name_font').val(),
      'color': $('#name_Color').val(),
      'shadowcolor': $('#name_shadow_Color').val()
    },
    'geneColor': {
      'left': $('#gene_left_Color').val(),
      'right': $('#gene_right_Color').val(),
      'basic': $('#gene_Color').val()
    },
    'geneFont': $('#gene_font').val(),
    'lineColor': $('#line_Color').val(),
    'background': $('#background').val()
  }
  drawCard('canvas_1', card_data);
});

$("[id$=_color]").change(function() {
  UpdateColorClass($(this));
  Cookies.set($(this).attr('id'), $(this).val());
});

$("[id$=_Color]").change(function() {
  Cookies.set($(this).attr('id'), $(this).val());
});

$("[id$=_font]").change(function() {
  Cookies.set($(this).attr('id'), $(this).val());
});

$("#background").change(function() {
  Cookies.set($(this).attr('id'), $(this).val());
});

$("[id$=_color]").change();

$("[id$=_breed]").change(function() {
  Cookies.set($(this).attr('id'), $(this).val());
});

$("[id$=_name]").change(function() {
  Cookies.set($(this).attr('id'), $(this).val());
});

$("[id$=_id]").change(function() {
  Cookies.set($(this).attr('id'), $(this).val());
});

$("[id$=_flip]").change(function() {
  Cookies.set($(this).attr('id'), $(this).prop('checked'));
});

$("[id$=_gene]").change(function() {
  var this_id = $(this).attr('id').split('_');
  var cookie_value = this_id[0] + "_" + this_id[1];
  Cookies.set(cookie_value, $(this).val());
});

$('[data-toggle="tooltip"]').tooltip();