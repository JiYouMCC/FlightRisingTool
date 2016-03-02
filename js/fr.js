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

function initGenderSelect(id) {
  for (var i = 0; i < FRTool.Genders.length; i++) {
    $('#' + id).append(
      $("<option></option>")
      .attr("data-localize", FRTool.Genders[i].Name)
      .attr("class", FRTool.Genders[i].Name)
      .attr("value", FRTool.Genders[i].Name)
      .text(FRTool.Genders[i].NameZH + " " + FRTool.Genders[i].Name)
    );
  }
}

function UpdateColorClass(colorSelect) {
  colorSelect.removeClass();
  colorSelect.addClass("form-control");
  colorSelect.addClass(colorSelect.val());
}

function setCookie(cookie, label) {
  if ($.cookie(cookie)) {
    $('#' + label).val($.cookie(cookie));
  }
}

FRTool.initFR(FRData);
initBreedSelect('o_breed');
initBreedSelect('a_breed');
initBreedSelect('target_Breed');
initGeneSelect('o_Primary_gene', 'Primary');
initGeneSelect('a_Primary_gene', 'Primary');
initGeneSelect('target_primaryGene', 'Primary');
initGeneSelect('o_Secondary_gene', 'Secondary');
initGeneSelect('a_Secondary_gene', 'Secondary');
initGeneSelect('target_secondaryGene', 'Secondary');
initGeneSelect('o_Tertiary_gene', 'Tertiary');
initGeneSelect('a_Tertiary_gene', 'Tertiary');
initGeneSelect('target_tertiaryGene', 'Tertiary');
initColorSelect('o_primary_color');
initColorSelect('o_secondary_color');
initColorSelect('o_tertiary_color');
initColorSelect('a_primary_color');
initColorSelect('a_secondary_color');
initColorSelect('a_tertiary_color');
initColorSelect('target_primary_Color');
initColorSelect('target_secondary_Color');
initColorSelect('target_tertiary_Color');
initGenderSelect('target_gender');

$("[id$=_Color]").change(function() {
  UpdateColorClass($(this));
});

$("[id$=_breed]").change(function() {
  $('#breed_result').text("");
  $.cookie("o_breed", $('#o_breed').val());
  $.cookie("a_breed", $('#a_breed').val());
  var o_breed = FRTool.Breed[$('#o_breed').val()];
  var a_breed = FRTool.Breed[$('#a_breed').val()];
  var rate = FRTool.getBreedRate(o_breed, a_breed);
  if (rate.length == 1) {
    var rate0 = rate[0] * 100 | 0;
    $("#breed_bar_0").text(o_breed.Name)
      .attr("data-localize", o_breed.Name)
      .attr("data-localize-breed", true)
      .css("width", rate0 + "% ")
      .attr("aria-valuenow", rate0);

    $('#breed_result').append(
      $("<span></span>")
        .attr("data-localize", o_breed.Name)
        .attr("data-localize-breed", true)
        .text(o_breed.Name)
      );
    $('#breed_result').append(
      $("<span></span>")
        .text( " " + rate0 + "% ")
      );
  } else {
    var rate0 = rate[0] * 100 | 0;
    var rate1 = rate[1] * 100 | 0;
    $("#breed_bar_0").text(o_breed.Name)
      .attr("data-localize", o_breed.Name)
      .attr("data-localize-breed", true)
      .css("width", rate0 + "% ")
      .attr("aria-valuenow", rate0);
    $("#breed_bar_1").text(a_breed.Name)
      .attr("data-localize", a_breed.Name)
      .attr("data-localize-breed", true)
      .css("width", rate1 + "% ")
      .attr("aria-valuenow", rate1);

    $('#breed_result').append(
      $("<span></span>")
        .attr("data-localize", o_breed.Name)
        .attr("data-localize-breed", true)
        .text(o_breed.Name)
      );
    $('#breed_result').append(
      $("<span></span>")
        .text( " " + rate0 + "% ")
      );
    $('#breed_result').append(
      $("<span></span>")
        .attr("data-localize", a_breed.Name)
        .attr("data-localize-breed", true)
        .text(a_breed.Name)
      );
    $('#breed_result').append(
      $("<span></span>")
        .text( " " + rate1 + "% ")
      );
  }

  $("[data-localize-breed]").localize("lg/basic", {language: language_code});
});

$("[id$=_gene]").change(function() {
  var gene_type = $(this).attr('id').split('_')[1];
  $.cookie('o_' + gene_type, $('#o_' + gene_type + '_gene').val());
  $.cookie('a_' + gene_type, $('#a_' + gene_type + '_gene').val());
  $('#' + gene_type + '_result').text("");
  var o_gene = FRTool[gene_type + "Gene"][$('#o_' + gene_type + '_gene').val()];
  var a_gene = FRTool[gene_type + "Gene"][$('#a_' + gene_type + '_gene').val()];
  var rate = FRTool.getGeneRate(o_gene, a_gene);
  if (rate.length == 1) {
    var rate0 = rate[0] * 100 | 0;
    $("#gene_" + gene_type + "_bar_0")
      .attr("data-localize", o_gene.Name)
      .attr("data-localize-gene", true)
      .text(o_gene.Name)
      .css("width", rate0 + "% ")
      .attr("aria-valuenow", rate0);

    $('#' + gene_type + '_result').append(
      $("<span></span>")
        .attr("data-localize", o_gene.Name)
        .attr("data-localize-gene", true)
        .text(o_gene.Name)
      );
    $('#' + gene_type + '_result').append(
      $("<span></span>")
        .text( " " + rate0 + "% ")
      );
  } else {
    var rate0 = rate[0] * 100 | 0;
    var rate1 = rate[1] * 100 | 0;
    $("#gene_" + gene_type + "_bar_0")
      .attr("data-localize", o_gene.Name)
      .attr("data-localize-gene", true)
      .text(o_gene.Name)
      .css("width", rate0 + "% ")
      .attr("aria-valuenow", rate0);
    $("#gene_" + gene_type + "_bar_1")
      .attr("data-localize", a_gene.Name)
      .attr("data-localize-gene", true)
      .text(a_gene.Name)
      .css("width", rate1 + "% ")
      .attr("aria-valuenow", rate1);

    $('#' + gene_type + '_result').append(
      $("<span></span>")
        .attr("data-localize", o_gene.Name)
        .attr("data-localize-gene", true)
        .text(o_gene.Name)
      );
    $('#' + gene_type + '_result').append(
      $("<span></span>")
        .text( " " + rate0 + "% ")
      );

    $('#' + gene_type + '_result').append(
      $("<span></span>")
        .attr("data-localize", a_gene.Name)
        .attr("data-localize-gene", true)
        .text(o_gene.Name)
      );
    $('#' + gene_type + '_result').append(
      $("<span></span>")
        .text( " " + rate1 + "% ")
      );
  }

  $("[data-localize-gene]").localize("lg/basic", {language: language_code});
});

$("[id$=_color]").change(function() {
  UpdateColorClass($(this));
  var color_type = $(this).attr('id').split('_')[1];
  $.cookie('o_' + color_type + '_color', $('#o_' + color_type + '_color').val());
  $.cookie('a_' + color_type + '_color', $('#a_' + color_type + '_color').val());
  var s = "";
  var o_color = FRTool.Color[$('#o_' + color_type + '_color').val()];
  var a_color = FRTool.Color[$('#a_' + color_type + '_color').val()];
  var rate = FRTool.getColorRange(o_color, a_color);
  $('#' + color_type + '_color_result').text("");
  for (var i = 0; i < rate.length; i++) {
    var item = rate[i];
    var row = $("<span></span>")
      .attr("title", item.NameZH + " " + item.Name)
      .attr("data-toggle", "tooltip")
      .attr("data-placement", "bottom")
      .css("width", "7.5px")
      .css("height", "20px")
      .css("display", "inline-block")
      .css("background-color", item.Color);
    $('#' + color_type + '_color_result').append(row);
  };
  $('[data-toggle="tooltip"]').tooltip();
});

$("[id^=target]").change(function() {
  var id = $(this).attr('id');
  $.cookie(id, $(this).val());
});

$("#cal_breed").click(function() {
  $('#input_result').text('--.-------- %');

  var target = {};
  $('#input_result').val("");
  if ($('#target_gender').val() != "none") {
    target['gender'] = $('#target_gender').val();
  }
  if ($('#target_Breed').val() != "none") {
    target['breed'] = $('#target_Breed').val();
  }
  if ($('#target_primary_Color').val() != "none") {
    target['primaryColor'] = $('#target_primary_Color').val();
  }
  if ($('#target_secondary_Color').val() != "none") {
    target['secondaryColor'] = $('#target_secondary_Color').val();
  }
  if ($('#target_tertiary_Color').val() != "none") {
    target['tertiaryColor'] = $('#target_tertiary_Color').val();
  }
  if ($('#target_primaryGene').val() != "none") {
    target['primaryGene'] = $('#target_primaryGene').val();
  }
  if ($('#target_secondaryGene').val() != "none") {
    target['secondaryGene'] = $('#target_secondaryGene').val();
  }
  if ($('#target_tertiaryGene').val() != "none") {
    target['tertiaryGene'] = $('#target_tertiaryGene').val();
  }
  var info1 = {
    'breed': $('#o_breed').val(),
    'primaryColor': $('#o_primary_color').val(),
    'secondaryColor': $('#o_secondary_color').val(),
    'tertiaryColor': $('#o_tertiary_color').val(),
    'primaryGene': $('#o_Primary_gene').val(),
    'secondaryGene': $('#o_Secondary_gene').val(),
    'tertiaryGene': $('#o_Tertiary_gene').val()
  };
  var info2 = {
    'breed': $('#a_breed').val(),
    'primaryColor': $('#a_primary_color').val(),
    'secondaryColor': $('#a_secondary_color').val(),
    'tertiaryColor': $('#a_tertiary_color').val(),
    'primaryGene': $('#a_Primary_gene').val(),
    'secondaryGene': $('#a_Secondary_gene').val(),
    'tertiaryGene': $('#a_Tertiary_gene').val()
  };
  $('#input_result').text((FRTool.calRate(info1, info2, target) * 100).toFixed(8) + " %");
});

$('[data-toggle="tooltip"]').tooltip();

setCookie("o_breed", "o_breed");
setCookie("a_breed", "a_breed");

for (var i = $("[id$=_gene]").length - 1; i >= 0; i--) {
  var form = $($("[id$=_gene]")[i]);
  setCookie(form.attr('id').substring(0, form.attr('id').length - 5), form.attr('id'));
};

for (var i = $("[id$=_color]").length - 1; i >= 0; i--) {
  var form = $($("[id$=_color]")[i]);
  setCookie(form.attr('id'), form.attr('id'));
};

for (var i = $("[id^=target_]").length - 1; i >= 0; i--) {
  var form = $($("[id^=target_]")[i]);
  setCookie(form.attr('id'), form.attr('id'));
};

$("[id$=_color]").change();
$("[id$=_Color]").change();
$("[id$=_breed]").change();
$("[id$=_gene]").change();
$("#cal_breed").click();
