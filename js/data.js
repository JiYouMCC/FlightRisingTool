FRTool.initFR(FRData);

for (var i = 0; i < FRTool.Genders.length; i++) {
    $('#gender_list').find("tbody").append(
        $("<tr></tr>").append($("<td></td>").text(FRTool.Genders[i].Name).attr("data-localize", FRTool.Genders[i].Name))
    );
}

for (var i = 0; i < FRTool.Oddss.length; i++) {
    $('#odd_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.Oddss[i].Name).attr("data-localize", FRTool.Oddss[i].Name))
        .append($("<td></td>").text(FRTool.Oddss[i].CoolDown))
    );
}

for (var i = 0; i < FRTool.ModernBreeds.length; i++) {
    $('#breed_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.ModernBreeds[i].Name).attr("data-localize", FRTool.ModernBreeds[i].Name))
        .append($("<td></td>").text(FRTool.ModernBreeds[i].Odds.Name).attr("data-localize", FRTool.ModernBreeds[i].Odds.Name))
    );
}

for (var i = 0; i < FRTool.AncientBreeds.length; i++) {
    $('#ancient_breed_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.AncientBreeds[i].Name).attr("data-localize", FRTool.AncientBreeds[i].Name))
        .append($("<td></td>").text(FRTool.AncientBreeds[i].Odds.Name).attr("data-localize", FRTool.AncientBreeds[i].Odds.Name))
    );
}

for (var i = 0; i < FRTool.ModernPrimaryGenes.length; i++) {
    $('#primary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.ModernPrimaryGenes[i].Name).attr("data-localize", FRTool.ModernPrimaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.ModernPrimaryGenes[i].Odds.Name).attr("data-localize", FRTool.ModernPrimaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.ModernPrimaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.ModernSecondaryGenes.length; i++) {
    $('#secondary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.ModernSecondaryGenes[i].Name).attr("data-localize", FRTool.ModernSecondaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.ModernSecondaryGenes[i].Odds.Name).attr("data-localize", FRTool.ModernSecondaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.ModernSecondaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.ModernTertiaryGenes.length; i++) {
    $('#tertiary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.ModernTertiaryGenes[i].Name).attr("data-localize", FRTool.ModernTertiaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.ModernTertiaryGenes[i].Odds.Name).attr("data-localize", FRTool.ModernTertiaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.ModernTertiaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.GaolerPrimaryGenes.length; i++) {
    $('#gaoler_primary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.GaolerPrimaryGenes[i].Name).attr("data-localize", FRTool.GaolerPrimaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.GaolerPrimaryGenes[i].Odds.Name).attr("data-localize", FRTool.GaolerPrimaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.GaolerPrimaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.GaolerSecondaryGenes.length; i++) {
    $('#gaoler_secondary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.GaolerSecondaryGenes[i].Name).attr("data-localize", FRTool.GaolerSecondaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.GaolerSecondaryGenes[i].Odds.Name).attr("data-localize", FRTool.GaolerSecondaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.GaolerSecondaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.GaolerTertiaryGenes.length; i++) {
    $('#gaoler_tertiary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.GaolerTertiaryGenes[i].Name).attr("data-localize", FRTool.GaolerTertiaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.GaolerTertiaryGenes[i].Odds.Name).attr("data-localize", FRTool.GaolerTertiaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.GaolerTertiaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.BanescalePrimaryGenes.length; i++) {
    $('#banescale_primary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.BanescalePrimaryGenes[i].Name).attr("data-localize", FRTool.BanescalePrimaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.BanescalePrimaryGenes[i].Odds.Name).attr("data-localize", FRTool.BanescalePrimaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.BanescalePrimaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.BanescaleSecondaryGenes.length; i++) {
    $('#banescale_secondary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.BanescaleSecondaryGenes[i].Name).attr("data-localize", FRTool.BanescaleSecondaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.BanescaleSecondaryGenes[i].Odds.Name).attr("data-localize", FRTool.BanescaleSecondaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.BanescaleSecondaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.BanescaleTertiaryGenes.length; i++) {
    $('#banescale_tertiary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.BanescaleTertiaryGenes[i].Name).attr("data-localize", FRTool.BanescaleTertiaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.BanescaleTertiaryGenes[i].Odds.Name).attr("data-localize", FRTool.BanescaleTertiaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.BanescaleTertiaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.VeilspunPrimaryGenes.length; i++) {
    $('#veilspun_primary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.VeilspunPrimaryGenes[i].Name).attr("data-localize", FRTool.VeilspunPrimaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.VeilspunPrimaryGenes[i].Odds.Name).attr("data-localize", FRTool.VeilspunPrimaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.VeilspunPrimaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.VeilspunSecondaryGenes.length; i++) {
    $('#veilspun_secondary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.VeilspunSecondaryGenes[i].Name).attr("data-localize", FRTool.VeilspunSecondaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.VeilspunSecondaryGenes[i].Odds.Name).attr("data-localize", FRTool.VeilspunSecondaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.VeilspunSecondaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.VeilspunTertiaryGenes.length; i++) {
    $('#veilspun_tertiary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.VeilspunTertiaryGenes[i].Name).attr("data-localize", FRTool.VeilspunTertiaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.VeilspunTertiaryGenes[i].Odds.Name).attr("data-localize", FRTool.VeilspunTertiaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.VeilspunTertiaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.Colors.length; i++) {
    $('#color_list').find("tbody").append(
        $("<tr></tr>")
        //.append($("<td></td>").text(FRTool.Colors[i].NameZH))
        .append($("<td></td>").text(FRTool.Colors[i].Name).attr("data-localize", FRTool.Colors[i].Name))
        .append($("<td></td>").attr('class', FRTool.Colors[i].Name).text(FRTool.Colors[i].Color))
    );
}

for (key in FRTool.BreedRoles) {
    var odds1 = FRTool.Odds[key.split(',')[0]];
    var odds2 = FRTool.Odds[key.split(',')[1]];
    var rate1 = FRTool.BreedRoles[key][0];
    var rate2 = FRTool.BreedRoles[key][1];
    $('#breed_rule_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(odds1.Name).attr("data-localize", odds1.Name))
        .append($("<td></td>").text(odds2.Name).attr("data-localize", odds2.Name))
        .append($("<td></td>").text(rate1))
        .append($("<td></td>").text(rate2))
    );
}

for (key in FRTool.GeneRoles) {
    var odds1 = FRTool.Odds[key.split(',')[0]];
    var odds2 = FRTool.Odds[key.split(',')[1]];
    var rate1 = FRTool.GeneRoles[key][0];
    var rate2 = FRTool.GeneRoles[key][1];
    $('#gene_rule_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(odds1.Name).attr("data-localize", odds1.Name))
        .append($("<td></td>").text(odds2.Name).attr("data-localize", odds2.Name))
        .append($("<td></td>").text(rate1))
        .append($("<td></td>").text(rate2))
    );
}

$("body").attr("data-spy", "scroll");
$("body").attr("data-target", "#affix-nav");


var headers = $('html').find("h3,h4");
var maxHead = 3;
for (var i = 0; i < headers.length; i++) {
    $(headers[i]).attr("id", "title_" + i);
    var currentHead = parseInt(headers[i].tagName[1]);
    if (currentHead < maxHead) {
        maxHead = currentHead;
    }
}

console.log(maxHead)

var links = $("<ol></ol>").attr("id", "affix-nav-ul").attr("class", "nav nav-stacked").attr("role", "tablist");

var currentParent = links;
var lastLi = null;
var currentClass = maxHead;

for (var i = 0; i < headers.length; i++) {
  var currentHead = parseInt(headers[i].tagName[1]);
  if (currentHead > currentClass) {
    while (currentHead > currentClass) {
      var newUl = $("<ol></ol>").addClass("nav").addClass("nav-stacked");
      if (lastLi != null){
        lastLi.append(newUl);
      } else {
        currentParent.append(newUl);
      }
      
      currentClass += 1;
      currentParent = newUl;
    }
  } else if (currentHead < currentClass) {
    while (currentHead < currentClass) {
      currentClass -= 1;
      currentParent = currentParent.parent().parent();
    }
  } 
  
  lastLi = $("<li></li>").append(
                $("<a></a>")
                .attr("affix_to","#" + headers[i].id)
                .attr("href", "#title_" + i)
                .attr("data-localize", $(headers[i]).text())
                .text($(headers[i]).text())
            )
            .attr("data-toggle", "tooltip")
            .attr("data-placement", "text");
  currentParent.append(lastLi);
}

links.insertBefore('#nav_bottom');

$('#affix-nav').affix({
    offset: {
        top: function() {
            return (this.top = $('#top').outerHeight(true));
        },
        bottom: function() {
            return (this.bottom = $('#bottom').outerHeight(true) + 20);
        }
    }
})

$('.affix-top').width($('#stand').width());
$('.affix').width($('#stand').width());

$(window).resize(function() {
    $('.affix').width($('#stand').width());
});

$(window).scroll(function() {
    $('.affix').width($('#stand').width());
});

$('[data-toggle="tooltip"]').tooltip();

function allowSort(tableId) {
    var table = document.getElementById(tableId),
        tableHead = table.querySelector('thead'),
        tableHeaders = tableHead.querySelectorAll('th'),
        tableBody = table.querySelector('tbody');
    tableHead.addEventListener('click', function(e) {
        var tableHeader = e.target,
            textContent = tableHeader.textContent,
            tableHeaderIndex, isAscending, order;
        while (tableHeader.nodeName !== 'TH') {
            tableHeader = tableHeader.parentNode;
        }

        tableHeaderIndex = Array.prototype.indexOf.call(tableHeaders, tableHeader);

        for (var i = 0; i < tableHeaders.length; i++) {
            if (i != tableHeaderIndex) {
                tableHeaders[i].setAttribute('data-order', "");
            }
        }

        isAscending = tableHeader.getAttribute('data-order') === 'asc';
        order = isAscending ? 'desc' : 'asc';
        tableHeader.setAttribute('data-order', order);
        tinysort(
            tableBody.querySelectorAll('tr'), {
                selector: 'td:nth-child(' + (tableHeaderIndex + 1) + ')',
                order: order
            }
        );
    });
}

allowSort("gender_list");
allowSort("odd_list");
allowSort("breed_list");
allowSort("ancient_breed_list");
allowSort("primary_gene_list");
allowSort("secondary_gene_list");
allowSort("tertiary_gene_list");
allowSort("gaoler_primary_gene_list");
allowSort("gaoler_secondary_gene_list");
allowSort("gaoler_tertiary_gene_list");
allowSort("banescale_primary_gene_list");
allowSort("banescale_secondary_gene_list");
allowSort("banescale_tertiary_gene_list");
allowSort("veilspun_primary_gene_list");
allowSort("veilspun_secondary_gene_list");
allowSort("veilspun_tertiary_gene_list");
allowSort("color_list");
allowSort("breed_rule_list");
allowSort("gene_rule_list");