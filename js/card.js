FRTool.initFR(FRData);

function getImgUrl(dragonID) {
    if (dragonID == "") {
        console.log(Please enter the dragon ID. );
        return
    }
    var dragonID = parseInt(dragonID);
    var miniDragonId = Math.ceil(dragonID / 100);
    return 'http://flightrising.com/rendern/350/' + miniDragonId + '/' + dragonID + '_350.png'
}

function initGeneSelect(id, type) {
  for (var i = 0; i < FRTool.Oddss.length; i++) {
    var genes = FRTool.getGene(FRTool.Oddss[i], type);
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

function initBreedSelect(id) {
  for (var i = 0; i < FRTool.Oddss.length; i++) {
    var breeds = FRTool.getBreed(FRTool.Oddss[i]);
    var group = $("<optgroup></optgroup>")
    .attr("data-localize", FRTool.Oddss[i].Name)
    .attr("label", FRTool.Oddss[i].Name);
    for (var j = 0; j < breeds.length; j++) {
      group.append($("<option></option>")
        .attr("data-localize", breeds[j].Name)
        .attr("value", breeds[j].Name)
        .text(breeds[j].Name));
    };
    $('#' + id).append(group);
  };
}

function UpdateColorClass(colorSelect) {
    colorSelect.removeClass();
    colorSelect.addClass("form-control");
    colorSelect.addClass(colorSelect.val());
}

function drawName(canvasContext, text, x, y, font, textAlign, color, shadowcolor) {
    canvasContext.font = font;
    canvasContext.textAlign = textAlign
    canvasContext.shadowOffsetX = 2;
    canvasContext.shadowOffsetY = 2;
    canvasContext.shadowBlur = 2;
    canvasContext.shadowColor = shadowcolor;
    canvasContext.fillStyle = color;
    canvasContext.fillText(text, x, y);
}

function drawImage(canvasContext, src, x, y, width, height, flip, callback) {
    var img = new Image();
    img.src = src;

    img.onload = function() {
        if(flip) {
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
    canvasContext.font = font;
        if (gene1 == gene2) {
            canvasContext.textAlign = "center";
            canvasContext.fillStyle = color;
            canvasContext.fillText(gene1.Name, imgWidth / 2, y);
            canvasContext.fillRect((imgWidth - width)/2, y + 4, width, 3);
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
    canvasContext.font = font;
        if (breed1 == breed2) {
            canvasContext.textAlign = "center";
            canvasContext.fillStyle = color;
            canvasContext.fillText(breed1.Name, imgWidth / 2, y);
            canvasContext.fillRect((imgWidth - width)/2, y + 4, width, 3);
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

    var gene_color_left = cardData.geneColor.left;
    var gene_color_right = cardData.geneColor.right;
    var gene_color = cardData.geneColor.basic;

    // background
    canvasContext.fillStyle = cardData.background;
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
    drawImage(canvasContext, getImgUrl(cardData.dragon1.id), 
        0, 0, 240, 240, cardData.dragon1.imgflip, 
        function(){
            if (cardData.dragonName.enable) {
                drawName(canvasContext, 
                    cardData.dragon1.name, 20, 200, 
                    cardData.dragonName.font, "start", 
                    cardData.dragonName.color, cardData.dragonName.shadowcolor);
            }
        });

    // image 2
    drawImage(canvasContext, getImgUrl(cardData.dragon2.id), 
        400, 0, 240, 240, cardData.dragon2.imgflip, 
        function(){
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
  if(Cookies.get(cookie)){
    $('#' + label).val(Cookies.get(cookie));
  }
}

initBreedSelect('o_breed');
initBreedSelect('a_breed');

initGeneSelect('o_Primary_gene', 'Primary');
initGeneSelect('a_Primary_gene', 'Primary');
initGeneSelect('o_Secondary_gene', 'Secondary');
initGeneSelect('a_Secondary_gene', 'Secondary');
initGeneSelect('o_Tertiary_gene', 'Tertiary');
initGeneSelect('a_Tertiary_gene', 'Tertiary');

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
setCookie("o_flip", "o_flip");
setCookie("a_flip", "a_flip");

for (var i = $("[id$=_gene]").length - 1; i >= 0; i--) {
  var form = $($("[id$=_gene]")[i]);
  setCookie(form.attr('id').substring(0, form.attr('id').length - 5), form.attr('id'));
};

for (var i = $("[id$=_color]").length - 1; i >= 0; i--) {
  var form = $($("[id$=_color]")[i]);
  setCookie(form.attr('id'), form.attr('id'));
};

$("[id=draw]").click(function() {
    var card_data = {
        'dragon1': {
            'id': $('#o_id').val(),
            'name': $('#o_name').val(),
            'breed': FRTool.Breed[$('#o_breed').val()],
            'primarygene': FRTool.PrimaryGene[$('#o_Primary_gene').val()],
            'secondarygene': FRTool.SecondaryGene[$('#o_Secondary_gene').val()],
            'tertiarygene': FRTool.TertiaryGene[$('#o_Tertiary_gene').val()],
            'primarycolor': FRTool.Color[$('#o_primary_color').val()],
            'secondarycolor': FRTool.Color[$('#o_secondary_color').val()],
            'tertiarycolor': FRTool.Color[$('#o_tertiary_color').val()],
            'imgflip' : $('#o_flip').is(':checked')
        },
        'dragon2': {
            'id': $('#a_id').val(),
            'name': $('#a_name').val(),
            'breed': FRTool.Breed[$('#a_breed').val()],
            'primarygene': FRTool.PrimaryGene[$('#a_Primary_gene').val()],
            'secondarygene': FRTool.SecondaryGene[$('#a_Secondary_gene').val()],
            'tertiarygene': FRTool.TertiaryGene[$('#a_Tertiary_gene').val()],
            'primarycolor': FRTool.Color[$('#a_primary_color').val()],
            'secondarycolor': FRTool.Color[$('#a_secondary_color').val()],
            'tertiarycolor': FRTool.Color[$('#a_tertiary_color').val()],
            'imgflip' : $('#a_flip').is(':checked')
        },
        'dragonName': {
            'enable': true,
            'font': $('#name_font').val(),
            'color': $('#name_color').val(),
            'shadowcolor': $('#name_color_shadow').val()
        },
        'geneColor': {
            'left': $('#gene_color_left').val(),
            'right': $('#gene_color_right').val(),
            'basic': $('#gene_color').val()
        },
        'geneFont': $('#gene_font').val(),
        'lineColor': $('#line_color').val(),
        'background': $('#background').val()
    }
    drawCard('canvas_1', card_data);
});

$("[id$=_color]").change(function() {
    UpdateColorClass($(this));
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
  Cookies.set($(this).attr('id'), $(this).val());
});

$("[id$=_gene]").change(function() {
  var this_id = $(this).attr('id').split('_');
  var cookie_value = this_id[0] + "_" + this_id[1];
  Cookies.set(cookie_value, $(this).val());
});

$('[data-toggle="tooltip"]').tooltip();