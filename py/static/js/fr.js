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

$("[id$=_breed]").change(function(){
    $('#breed_result').text("...");
    $.cookie("o_breed",$('#o_breed').val());
    $.cookie("a_breed",$('#a_breed').val());
    $.ajax({
        url: '/fr/cal_breed',
        type: 'POST',
        data: {
            'breed1': $('#o_breed').val(),
            'breed2': $('#a_breed').val(),
        },
        success:function(response) { 
            var s = "";
            if (response.status) {
                for (var i = 0; i < response.result.length; i++) {
                    var item = response.result[i];
                    s += item['name_zh'] + " "+ item['name'] + " " + item['rate'] *100 +"% ";
                    $("#breed_bar_"+ i)
                        .text(item['name_zh'] + " "+ item['name'])
                        .css("width", item['rate'] *100 +"% ")
                        .attr("aria-valuenow", item['rate'] *100);
                }; 
            };
            $('#breed_result').text(s);
        },
        dataType: "json",
    });
});

$("[id^=target_]").change(function(){
    $.cookie($(this).attr('id'),$(this).val());
});

$("[id$=_gene]").change(function(){
    var gene_class = $(this).attr('id').split('_')[1];
    $.cookie('o_' + gene_class, $('#o_' + gene_class + '_gene').val());
    $.cookie('a_' + gene_class, $('#a_' + gene_class + '_gene').val());
    $('#'+gene_class+'_result').text("...");
    $.ajax({
        url: '/fr/cal_gene',
        type: 'POST',
        data: {
            'gene' : gene_class,
            'gene1': $('#o_'+gene_class+'_gene').val(),
            'gene2': $('#a_'+gene_class+'_gene').val(),
        },
        success:function(response) { 
            var s = "";
            if (response.status) {
                for (var i = 0; i < response.result.length; i++) {
                    var item = response.result[i];
                    s += item['name_zh'] + " "+ item['name'] + " " + item['rate'] *100 +"% ";
                    $("#gene_" + gene_class + "_bar_"+ i)
                        .text(item['name_zh'] + " "+ item['name'])
                        .css("width", item['rate'] *100 +"% ")
                        .attr("aria-valuenow", item['rate'] *100);
                }; 
            };
            $('#'+gene_class+'_result').text(s);
        },
        dataType: "json",
    });
});

$("[id$=Color]").change(function(){
    UpdateColorClass($(this));
});

$("[id$=_color]").change(function(){
    UpdateColorClass($(this));
    var color_type = $(this).attr('id').split('_')[1];
    $.cookie('o_' + color_type + '_color', $('#o_' + color_type + '_color').val());
    $.cookie('a_' + color_type + '_color', $('#a_' + color_type + '_color').val());
    $.ajax({
        url: '/fr/cal_color',
        type: 'POST',
        data: {
            'color1': $('#o_'+color_type+'_color').val(),
            'color2': $('#a_'+color_type+'_color').val(),
        },
        success:function(response) { 
            var s = "";
            $('#'+ color_type + '_color_result').text("");
            if (response.status) {
                for (var i = 0; i < response.result.length; i++) {
                    var item = response.result[i];
                    var row = $("<span></span>")
                        .attr("title", item['name_zh'] + " "+ item['name'])
                        .attr("data-toggle", "tooltip")
                        .attr("data-placement", "bottom")
                        .css("width","7.5px")
                        .css("height","20px")
                        .css("display","inline-block")
                        .css("background-color",item['hex']);
                    $('#'+color_type+'_color_result').append(row);
                };
                $('[data-toggle="tooltip"]').tooltip();
            };
        },
        dataType: "json",
    });
});

$("#cal_breed").click(function() {
  var $btn = $(this).button('loading');
  $('#input_result').text('--.-------- %');
  var target = {};
  $('#input_result').val("");
  if ($('#target_gender').val() != "none") {
    target['gender'] = $('#target_gender').val();
  }
  if ($('#target_Breed').val() != "none") {
    target['breed'] = $('#target_Breed').val();
  }
  if ($('#target_primaryColor').val() != "none") {
    target['primaryColor'] = $('#target_primaryColor').val();
  }
  if ($('#target_secondaryColor').val() != "none") {
    target['secondaryColor'] = $('#target_secondaryColor').val();
  }
  if ($('#target_tertiaryColor').val() != "none") {
    target['tertiaryColor'] = $('#target_tertiaryColor').val();
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
    'primaryColor':$('#o_primary_color').val(),
    'secondaryColor':$('#o_secondary_color').val(),
    'tertiaryColor':$('#o_tertiary_color').val(),
    'primaryGene':$('#o_PrimaryGene_gene').val(),
    'secondaryGene':$('#o_SecondaryGene_gene').val(),
    'tertiaryGene':$('#o_TertiaryGene_gene').val()
  };
  var info2 = {
    'breed': $('#a_breed').val(),
    'primaryColor':$('#a_primary_color').val(),
    'secondaryColor':$('#a_secondary_color').val(),
    'tertiaryColor':$('#a_tertiary_color').val(),
    'primaryGene':$('#a_PrimaryGene_gene').val(),
    'secondaryGene':$('#a_SecondaryGene_gene').val(),
    'tertiaryGene':$('#a_TertiaryGene_gene').val()
  };
  $.ajax({
    url: '/fr/cal_target',
    type: 'POST',
    data: {
      'info1': JSON.stringify(info1),
      'info2': JSON.stringify(info2),
      'target': JSON.stringify(target),
    },
    success: function(response) {
      if (response.status) {
        var result = response.result;
        $('#input_result').text((result * 100).toFixed(8) + " %");
        $btn.button('reset');
      };
    },
    dataType: "json",
  });
});

$('[data-toggle="tooltip"]').tooltip();


setCookie("o_breed","o_breed");
setCookie("a_breed","a_breed");

for (var i = $("[id$=_gene]").length - 1; i >= 0; i--) {
    var form = $($("[id$=_gene]")[i]);
    setCookie(form.attr('id').substring(0, form.attr('id').length-5), form.attr('id'));
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
$("[id$=Color]").change();
$("[id$=_breed]").change();
$("[id$=_gene]").change();
$("#cal_breed").click();