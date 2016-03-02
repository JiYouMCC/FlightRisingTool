language_setting = {
    "languages":[
        {
            "title":"English",
            "code":"en"
        },
        {
            "title":"中文",
            "code":"zh"
        },
    ]
}

for (var i = 0; i < language_setting.languages.length; i++) {
    $("#dropdown_language").append(
        $("<li></li>").append(
            $("<a></a>").attr({
                href: "#",
                id: 'language_' + language_setting.languages[i].code
            }).text(language_setting.languages[i].title)
        )
    );
}

var language_code = navigator.language.split('-')[0];

$(document).ready(function(){
    if ($.cookie("local_language_code")) {
        language_code = $.cookie("local_language_code")
    }

    $("[data-localize]").localize("lg/basic", {
        language: language_code
    });
});


$("[id^=language_]").click(function() {
    var language = $(this).attr('id').split('language_')[1];
    $("[data-localize]").localize("lg/basic", {
        language: language,
        callback: function(data, defaultCallback){
            defaultCallback(data);
            $.cookie("local_language_code", language);
            language_code = language;
        }
    });
    
});
