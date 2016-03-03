function languageSupported(language) {
    var result = false;
    for (var i = 0; i < language_setting.languages.length; i++) {
        if (language_setting.languages[i].code == language) {
            result = true;
            break;
        }
    }

    return result;
}

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
if (!languageSupported(language_code)) {
    language_code = "en";
}

$(document).ready(function(){
    if(Cookies.get("local_language_code")){
        language_code = Cookies.get("local_language_code");
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
            Cookies.set("local_language_code", language);
            language_code = language;
        }
    });
});
