FRTool.initFR(FRData);

for (var i = 0; i < FRTool.Genders.length; i++) {
    $('#gender_list').append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.Genders[i].NameZH))
        .append($("<td></td>").text(FRTool.Genders[i].Name))
    );
}

for (var i = 0; i < FRTool.Oddss.length; i++) {
    $('#odd_list').append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.Oddss[i].NameZH))
        .append($("<td></td>").text(FRTool.Oddss[i].Name))
        .append($("<td></td>").text(FRTool.Oddss[i].CoolDown))
    );
}

for (var i = 0; i < FRTool.Breeds.length; i++) {
    $('#breed_list').append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.Breeds[i].NameZH))
        .append($("<td></td>").text(FRTool.Breeds[i].Name))
        .append($("<td></td>").text(FRTool.Breeds[i].Odds.NameZH))
        .append($("<td></td>").text(FRTool.Breeds[i].Odds.Name))
    );
}

for (var i = 0; i < FRTool.PrimaryGenes.length; i++) {
    $('#primary_gene_list').append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.PrimaryGenes[i].NameZH))
        .append($("<td></td>").text(FRTool.PrimaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.PrimaryGenes[i].Odds.NameZH))
        .append($("<td></td>").text(FRTool.PrimaryGenes[i].Odds.Name))
    );
}

for (var i = 0; i < FRTool.SecondaryGenes.length; i++) {
    $('#secondary_gene_list').append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.SecondaryGenes[i].NameZH))
        .append($("<td></td>").text(FRTool.SecondaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.SecondaryGenes[i].Odds.NameZH))
        .append($("<td></td>").text(FRTool.SecondaryGenes[i].Odds.Name))
    );
}

for (var i = 0; i < FRTool.TertiaryGenes.length; i++) {
    $('#tertiary_gene_list').append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.TertiaryGenes[i].NameZH))
        .append($("<td></td>").text(FRTool.TertiaryGenes[i].Name))
        .append($("<td></td>").text(FRTool.TertiaryGenes[i].Odds.NameZH))
        .append($("<td></td>").text(FRTool.TertiaryGenes[i].Odds.Name))
    );
}

for (var i = 0; i < FRTool.Colors.length; i++) {
    $('#color_list').append(
        $("<tr></tr>")
        .append($("<td></td>").text(FRTool.Colors[i].NameZH))
        .append($("<td></td>").text(FRTool.Colors[i].Name))
        .append($("<td></td>").attr('class', FRTool.Colors[i].Name).text(FRTool.Colors[i].Color))
    );
}

for (key in FRTool.BreedRoles) {
    var odds1 = FRTool.Odds[key.split(',')[0]];
    var odds2 = FRTool.Odds[key.split(',')[1]];
    var rate1 = FRTool.BreedRoles[key][0];
    var rate2 = FRTool.BreedRoles[key][1];
    $('#breed_rule_list').append(
        $("<tr></tr>")
        .append($("<td></td>").text(odds1.NameZH))
        .append($("<td></td>").text(odds1.Name))
        .append($("<td></td>").text(odds2.NameZH))
        .append($("<td></td>").text(odds2.Name))
        .append($("<td></td>").text(rate1))
        .append($("<td></td>").text(rate2))
    );
}

for (key in FRTool.GeneRoles) {
    var odds1 = FRTool.Odds[key.split(',')[0]];
    var odds2 = FRTool.Odds[key.split(',')[1]];
    var rate1 = FRTool.GeneRoles[key][0];
    var rate2 = FRTool.GeneRoles[key][1];
    $('#gene_rule_list').append(
        $("<tr></tr>")
        .append($("<td></td>").text(odds1.NameZH))
        .append($("<td></td>").text(odds1.Name))
        .append($("<td></td>").text(odds2.NameZH))
        .append($("<td></td>").text(odds2.Name))
        .append($("<td></td>").text(rate1))
        .append($("<td></td>").text(rate2))
    );
}

$("body").attr("data-spy", "scroll");
$("body").attr("data-target", "#affix-nav");
for (var i = 0; i < $("h4").length; i++) {
    $($("h4")[i]).attr("id", "title_" + i);
    var title = $($("h4")[i]).text().split(' ');
    var text = title.shift();
    title = title.join(" ");
    $("<li></li>").append(
            $("<a></a>")
            .attr("href", "#title_" + i)
            .text(text)
        )
        .attr("data-toggle", "tooltip")
        .attr("data-placement", "left")
        .attr("title", title)
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
