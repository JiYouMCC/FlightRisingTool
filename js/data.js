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

for (var i = 0; i < FRTool.Breeds.length; i++) {
    $('#breed_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.Breeds[i].Name).attr("data-localize", FRTool.Breeds[i].Name))
        .append($("<td></td>").text(FRTool.Breeds[i].Odds.Name).attr("data-localize", FRTool.Breeds[i].Odds.Name))
    );
}

for (var i = 0; i < FRTool.AncientBreeds.length; i++) {
    $('#ancient_breed_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.AncientBreeds[i].Name).attr("data-localize", FRTool.AncientBreeds[i].Name))
        .append($("<td></td>").text(FRTool.AncientBreeds[i].Odds.Name).attr("data-localize", FRTool.AncientBreeds[i].Odds.Name))
    );
}

for (var i = 0; i < FRTool.PrimaryGenes.length; i++) {
    $('#primary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.PrimaryGenes[i].Name).attr("data-localize", FRTool.PrimaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.PrimaryGenes[i].Odds.Name).attr("data-localize", FRTool.PrimaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.PrimaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.SecondaryGenes.length; i++) {
    $('#secondary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.SecondaryGenes[i].Name).attr("data-localize", FRTool.SecondaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.SecondaryGenes[i].Odds.Name).attr("data-localize", FRTool.SecondaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.SecondaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.TertiaryGenes.length; i++) {
    $('#tertiary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.TertiaryGenes[i].Name).attr("data-localize", FRTool.TertiaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.TertiaryGenes[i].Odds.Name).attr("data-localize", FRTool.TertiaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.TertiaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.AncientPrimaryGenes.length; i++) {
    $('#ancient_primary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.AncientPrimaryGenes[i].Name).attr("data-localize", FRTool.AncientPrimaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.AncientPrimaryGenes[i].Odds.Name).attr("data-localize", FRTool.AncientPrimaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.AncientPrimaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.AncientSecondaryGenes.length; i++) {
    $('#ancient_secondary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.AncientSecondaryGenes[i].Name).attr("data-localize", FRTool.AncientSecondaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.AncientSecondaryGenes[i].Odds.Name).attr("data-localize", FRTool.AncientSecondaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.AncientSecondaryGenes[i].Price))
    );
}

for (var i = 0; i < FRTool.AncientTertiaryGenes.length; i++) {
    $('#ancient_tertiary_gene_list').find("tbody").append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.AncientTertiaryGenes[i].Name).attr("data-localize", FRTool.AncientTertiaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.AncientTertiaryGenes[i].Odds.Name).attr("data-localize", FRTool.AncientTertiaryGenes[i].Odds.Name))
        .append($("<td></td>").text(FRTool.AncientTertiaryGenes[i].Price))
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
for (var i = 0; i < $("h4").length; i++) {
    $($("h4")[i]).attr("id", "title_" + i);
    var text = $($("h4")[i]).text();
    $("<li></li>").append(
            $("<a></a>")
            .attr("href", "#title_" + i)
            .attr("data-localize", text)
            .text(text)
        )
        .attr("data-toggle", "tooltip")
        .attr("data-placement", "text")
        .insertBefore('#nav_bottom');
}

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
allowSort("ancient_primary_gene_list");
allowSort("ancient_secondary_gene_list");
allowSort("ancient_tertiary_gene_list");
allowSort("color_list");
allowSort("breed_rule_list");
allowSort("gene_rule_list");