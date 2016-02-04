function UpdateColorClass(colorSelect) {
  colorSelect.removeClass();
  colorSelect.addClass("form-control");
  colorSelect.addClass(colorSelect.val());
}

$('[data-toggle="tooltip"]').tooltip();

$("[id$=Color]").change(function() {
  UpdateColorClass($(this));
});

$("[id$=_dragon]").change(function() {
  var part = $(this).attr('id').split('_')[0];
  var dragon_name = $(this).val();
  $('#' + part + '_breed').text("");
  $('#' + part + '_primaryGene').text("");
  $('#' + part + '_secondaryGene').text("");
  $('#' + part + '_tertiaryGene').text("");
  $('#' + part + '_primaryColor').text("");
  $('#' + part + '_secondaryColor').text("");
  $('#' + part + '_tertiaryColor').text("");
  $.ajax({
    url: '/fr/get_dragon',
    type: 'POST',
    data: {
      'dragon_name': dragon_name,
    },
    success: function(response) {
      var result = response.result
      if (response.status) {
        $('#' + part + '_breed').append(
          $("<div></div>")
          .attr("title", result.breed.name)
          .attr("data-toggle", "tooltip")
          .attr("data-placement", "bottom")
          .text(result.breed.name_zh)
        );
        $('#' + part + '_primaryGene').append(
          $("<div></div>")
          .attr("title", result.primaryGene.name)
          .attr("data-toggle", "tooltip")
          .attr("data-placement", "bottom")
          .text(result.primaryGene.name_zh)
        );
        $('#' + part + '_secondaryGene').append(
          $("<div></div>")
          .attr("title", result.secondaryGene.name)
          .attr("data-toggle", "tooltip")
          .attr("data-placement", "bottom")
          .text(result.secondaryGene.name_zh)
        );
        $('#' + part + '_tertiaryGene').append(
          $("<div></div>")
          .attr("title", result.tertiaryGene.name)
          .attr("data-toggle", "tooltip")
          .attr("data-placement", "bottom")
          .text(result.tertiaryGene.name_zh)
        );

        $('#' + part + '_primaryColor').append(
          $("<div></div>")
          .attr("title", result.primaryColor.name)
          .attr("data-toggle", "tooltip")
          .attr("data-placement", "bottom")
          .text(result.primaryColor.name_zh)
          .addClass(result.primaryColor.name)
        );

        $('#' + part + '_secondaryColor').append(
          $("<div></div>")
          .attr("title", result.secondaryColor.name)
          .attr("data-toggle", "tooltip")
          .attr("data-placement", "bottom")
          .text(result.secondaryColor.name_zh)
          .addClass(result.secondaryColor.name)
        );

        $('#' + part + '_tertiaryColor').append(
          $("<div></div>")
          .attr("title", result.tertiaryColor.name)
          .attr("data-toggle", "tooltip")
          .attr("data-placement", "bottom")
          .text(result.tertiaryColor.name_zh)
          .addClass(result.tertiaryColor.name)
        );
        $('[data-toggle="tooltip"]').tooltip();
      };
    },
    dataType: "json",
  });
});

$("[id^=dragon_name_]").click(function() {
  var dragon_name = $(this).attr('id').split('_')[2];
  $("[id^=dragon_name_]").removeClass("active");
  $(this).addClass("active");

  $.ajax({
    url: '/fr/get_dragon',
    type: 'POST',
    data: {
      'dragon_name': dragon_name,
    },
    success: function(response) {
      var result = response.result
      if (response.status) {
        $('#dragon_name').text(result.name);
        $('#input_dragon_name').val(result.name);
        $('#element').val(result.element);
        $('#breed').val(result.breed);
        $('#gender').val(result.gender);
        $('#primaryGene').val(result.primaryGene);
        $('#secondaryGene').val(result.secondaryGene);
        $('#tertiaryGene').val(result.tertiaryGene);
        $('#primaryColor').val(result.primaryColor);
        UpdateColorClass($('#primaryColor'));
        $('#secondaryColor').val(result.secondaryColor);
        UpdateColorClass($('#secondaryColor'));
        $('#tertiaryColor').val(result.tertiaryColor);
        UpdateColorClass($('#tertiaryColor'));
      };
    },
    dataType: "json",
  });
});

$("#cal_breed").click(function() {
  var target = {};
  $('#input_result').val("");
  if ($('#target_gender').val() != "none") {
    target['gender'] = $('#target_gender').val();
  }
  if ($('#target_breed').val() != "none") {
    target['breed'] = $('#target_breed').val();
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
  console.log(target);
  $.ajax({
    url: '/fr/target_breed',
    type: 'POST',
    data: {
      'dragon1': $('#father_dragon').val(),
      'dragon2': $('#mother_dragon').val(),
      'target': JSON.stringify(target),
    },
    success: function(response) {
      var result = response.result
      if (response.status) {
        $('#input_result').text((result * 100).toFixed(8) + " %");
      };
    },
    dataType: "json",
  });
});