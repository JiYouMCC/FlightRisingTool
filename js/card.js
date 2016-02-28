FRTool.initFR(FRData);

function getImgUrl(dragonID) {
    var dragonID = parseInt(dragonID);
    var miniDragonId = Math.ceil(dragonID / 100);
    return 'http://flightrising.com/rendern/350/' + miniDragonId + '/' + dragonID + '_350.png'
}

function initGeneSelect(id, type) {
  for (var i = 0; i < FRTool.Oddss.length; i++) {
    var genes = FRTool.getGene(FRTool.Oddss[i], type);
    var group = $("<optgroup></optgroup>").attr("label", FRTool.Oddss[i].NameZH + " " + FRTool.Oddss[i].Name);
    for (var j = 0; j < genes.length; j++) {
      group.append($("<option></option>").attr("value", genes[j].Name).text(genes[j].NameZH + " " + genes[j].Name));
    };
    $('#' + id).append(group);
  };
}

function initColorSelect(id) {
  for (var i = 0; i < FRTool.Colors.length; i++) {
    $('#' + id).append(
      $("<option></option>")
      .attr("class", FRTool.Colors[i].Name)
      .attr("value", FRTool.Colors[i].Name)
      .text(FRTool.Colors[i].NameZH + " " + FRTool.Colors[i].Name)
    );
  }
}

function UpdateColorClass(colorSelect) {
  colorSelect.removeClass();
  colorSelect.addClass("form-control");
  colorSelect.addClass(colorSelect.val());
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
    var line_color = cardData.lineColor;

    // background
    canvasContext.fillStyle = cardData.background;
    canvasContext.fillRect(0, 0, 640, 240);

    // primary gene
    {
        canvasContext.font = cardData.geneFont;
        if (cardData.dragon1.primarygene == cardData.dragon2.primarygene) {
            canvasContext.textAlign = "center";
            canvasContext.fillStyle = cardData.geneColor.basic;
            canvasContext.fillText(cardData.dragon1.primarygene.Name, 320, 46);
            canvasContext.fillRect(280, 50, 80, 3);
        } else {
            var rate = FRTool.getGeneRate(cardData.dragon1.primarygene, cardData.dragon2.primarygene);
            canvasContext.textAlign = "end";
            canvasContext.fillStyle = gene_color_left;
            canvasContext.fillText(cardData.dragon1.primarygene.Name, 314, 46);
            canvasContext.fillRect(239, 50, 160 * rate[0], 3);

            canvasContext.textAlign = "start";
            canvasContext.fillStyle = gene_color_right;
            canvasContext.fillText(cardData.dragon2.primarygene.Name, 326, 46);
            canvasContext.fillRect(241 + 160 * rate[0], 50, 160 * rate[1], 3);
        }
    }

    // primary color
    {
        var range = FRTool.getColorRange(cardData.dragon1.primarycolor, cardData.dragon2.primarycolor);
        var single = 10;
        var width;
        do{
            single -=1 ;
            width = range.length * (single + 1);
        } while (width > 200);
        var startX = 320 - width / 2;
        for (var i = 0; i < range.length; i++) {
            canvasContext.beginPath();
            canvasContext.lineWidth = "2";
            canvasContext.strokeStyle = line_color;
            canvasContext.rect(startX, 60, single, 20);
            canvasContext.stroke();

            canvasContext.fillStyle = range[i].Color;
            canvasContext.fillRect(startX, 60, single, 20);
            startX += single + 1;
        }
    }

    // secondary gene
    {
        canvasContext.font = cardData.geneFont;
        if (cardData.dragon1.secondarygene == cardData.dragon2.secondarygene) {
            canvasContext.textAlign = "center";
            canvasContext.fillStyle = cardData.geneColor.basic;
            canvasContext.fillText(cardData.dragon1.secondarygene.Name, 320, 108);
            canvasContext.fillRect(280, 112, 80, 3);
        } else {
            var rate = FRTool.getGeneRate(cardData.dragon1.secondarygene, cardData.dragon2.secondarygene);
            canvasContext.textAlign = "end";
            canvasContext.fillStyle = gene_color_left;
            canvasContext.fillText(cardData.dragon1.secondarygene.Name, 314, 108);
            canvasContext.fillRect(239, 112, 160 * rate[0], 3);

            canvasContext.textAlign = "start";
            canvasContext.fillStyle = gene_color_right;
            canvasContext.fillText(cardData.dragon2.secondarygene.Name, 326, 108);
            canvasContext.fillRect(241 + 160 * rate[0], 112, 160 * rate[1], 3);
        }
    }

    // secondary color
    {
        var range = FRTool.getColorRange(cardData.dragon1.secondarycolor, cardData.dragon2.secondarycolor);
        var single = 10;
        var width;
        do{
            single -=1 ;
            width = range.length * (single + 1);
        } while (width > 200);
        var startX = 320 - width / 2;
        for (var i = 0; i < range.length; i++) {
            canvasContext.beginPath();
            canvasContext.lineWidth = "2";
            canvasContext.strokeStyle = line_color;
            canvasContext.rect(startX, 122, single, 20);
            canvasContext.stroke();

            canvasContext.fillStyle = range[i].Color;
            canvasContext.fillRect(startX, 122, single, 20);
            startX += single + 1;
        }
    }

    // tertiary gene
    {
        canvasContext.font = "14pt cursive";
        if (cardData.dragon1.tertiarygene == cardData.dragon2.tertiarygene) {
            canvasContext.textAlign = "center";
            canvasContext.fillStyle = cardData.geneColor.basic;
            canvasContext.fillText(cardData.dragon1.tertiarygene.Name, 320, 170);
            canvasContext.fillRect(280, 174, 80, 3);
        } else {
            var rate = FRTool.getGeneRate(cardData.dragon1.tertiarygene, cardData.dragon2.tertiarygene);
            canvasContext.textAlign = "end";
            canvasContext.fillStyle = gene_color_left;
            canvasContext.fillText(cardData.dragon1.tertiarygene.Name, 314, 170);
            canvasContext.fillRect(239, 174, 160 * rate[0], 3);

            canvasContext.textAlign = "start";
            canvasContext.fillStyle = gene_color_right;
            canvasContext.fillText(cardData.dragon2.tertiarygene.Name, 326, 170);
            canvasContext.fillRect(241 + 160 * rate[0], 174, 160 * rate[1], 3);
        }
    }

    // tertiary color
    {
        var range = FRTool.getColorRange(cardData.dragon1.tertiarycolor, cardData.dragon2.tertiarycolor);
        var single = 10;
        var width;
        do{
            single -= 1 ;
            width = range.length * (single + 1);
        } while (width > 200);
        var startX = 320 - width / 2;
        for (var i = 0; i < range.length; i++) {
            canvasContext.beginPath();
            canvasContext.lineWidth = "2";
            canvasContext.strokeStyle = line_color;
            canvasContext.rect(startX, 184, single, 20);
            canvasContext.stroke();

            canvasContext.fillStyle = range[i].Color;
            canvasContext.fillRect(startX, 184, single, 20);
            startX += single + 1;
        }
    }

    // image 1
    {
        var img1 = new Image();
        img1.src = getImgUrl(cardData.dragon1.id);
        img1.onload = function() {
            canvasContext.drawImage(img1, 0, 0, 240, 240);
            if (cardData.dragonName.enable) {
                canvasContext.font = cardData.dragonName.font;
                canvasContext.textAlign = "start";
                canvasContext.fillStyle = cardData.dragonName.shadowcolor;
                canvasContext.fillText(cardData.dragon1.name, 21, 201);
                canvasContext.fillText(cardData.dragon1.name, 19, 199);
                canvasContext.fillStyle = cardData.dragonName.color;
                canvasContext.fillText(cardData.dragon1.name, 20, 200);
            }
        }
    }

    // image 2
    {
        var img2 = new Image();
        img2.src = getImgUrl(cardData.dragon2.id);
        img2.onload = function() {
            canvasContext.drawImage(img2, 400, 0, 240, 240);
            if (cardData.dragonName.enable) {
                canvasContext.font = cardData.dragonName.font;
                canvasContext.textAlign = "end";
                canvasContext.fillStyle = cardData.dragonName.shadowcolor;
                canvasContext.fillText(cardData.dragon2.name, 621, 201);
                canvasContext.fillText(cardData.dragon2.name, 619, 199);
                canvasContext.fillStyle = cardData.dragonName.color;
                canvasContext.fillText(cardData.dragon2.name, 620, 200);
            }
        }
    }

    return canvas;
}

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


$("[id=draw]").click(function(){
    var card_data = {
        'dragon1': {
            'id':$('#o_id').val(),
            'name':$('#o_name').val(),
            'primarygene':FRTool.PrimaryGene[$('#o_Primary_gene').val()],
            'secondarygene':FRTool.SecondaryGene[$('#o_Secondary_gene').val()],
            'tertiarygene': FRTool.TertiaryGene[$('#o_Tertiary_gene').val()],
            'primarycolor': FRTool.Color[$('#o_primary_color').val()],
            'secondarycolor': FRTool.Color[$('#o_secondary_color').val()],
            'tertiarycolor': FRTool.Color[$('#o_tertiary_color').val()]
        },
        'dragon2': {
            'id':$('#a_id').val(),
            'name':$('#a_name').val(),
            'primarygene':FRTool.PrimaryGene[$('#a_Primary_gene').val()],
            'secondarygene':FRTool.SecondaryGene[$('#a_Secondary_gene').val()],
            'tertiarygene': FRTool.TertiaryGene[$('#a_Tertiary_gene').val()],
            'primarycolor': FRTool.Color[$('#a_primary_color').val()],
            'secondarycolor': FRTool.Color[$('#a_secondary_color').val()],
            'tertiarycolor': FRTool.Color[$('#a_tertiary_color').val()]
        },
        'dragonName' : {
            'enable': true,
            'font' : $('#name_font').val(),
            'color' : $('#name_color').val(),
            'shadowcolor' : $('#name_color_shadow').val()
        },
        'geneColor' : {
            'left':$('#gene_color_left').val(),
            'right':$('#gene_color_right').val(),
            'basic':$('#gene_color').val()
        },
        'geneFont' : $('#gene_font').val(),
        'lineColor' : $('#line_color').val(),
        'background' : $('#background').val()
    }
    drawCard('canvas_1', card_data);
});

$("[id$=_Color]").change(function() {
  UpdateColorClass($(this));
});

$('[data-toggle="tooltip"]').tooltip();