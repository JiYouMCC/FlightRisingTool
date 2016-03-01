language_setting = {
    "languages":[
        {
            "title":"English",
            "code":"en"
        },
        {
            "title":"中文",
            "code":"cn"
        },
    ],
    "default":{
        "title":"中文",
        "code":"cn"
    }
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

var language_code = language_setting.default.code;
var language_title = language_setting.default.title;
$(document).ready(function(){
    if ($.cookie("local_language_code")) {
        language_code = $.cookie("local_language_code")
    }

    if ($.cookie("local_language_title")) {
        language_title = $.cookie("local_language_title")
    }

    $("[data-localize]").localize("lg/basic", {
        language: language_code,
        callback: function(data, defaultCallback){
            defaultCallback(data);
            $("#current_language").text(language_title);
        }
    });
});


$("[id^=language_]").click(function() {
    var language = $(this).attr('id').split('language_')[1];
    var text = $(this).text();
    $("[data-localize]").localize("lg/basic", {
        language: language,
        callback: function(data, defaultCallback){
            defaultCallback(data);
            $.cookie("local_language_code", language);
            $.cookie("local_language_title", text);
            $("#current_language").text(text);
            language_code = language;
            language_title = text;
        }
    });
    
});
