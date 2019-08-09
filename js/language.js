var language_setting = {
    "languages": [{
        "title": "English",
        "file": "lg/basic-en.json",
        "code": "en"
    }, {
        "title": "中文",
        "file": "lg/basic-zh.json",
        "code": "zh"
    }, ]
}

var json_cache = {}



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

$(document).ready(function() {
    if (Cookies.get("local_language_code")) {
        language_code = Cookies.get("local_language_code");
    }
    localize(language_code)
});


$("[id^=language_]").click(function() {
    var language = $(this).attr('id').split('language_')[1];
    localize(language, function() {
        Cookies.set("local_language_code", language);
        language_code = language;
    })
});


function getLanguageJson(language, callback) {
    if (json_cache[language]) {
        json = json_cache[language];
        callback(json);
    } else {
        var jsonFile;
        for (var i = 0; i < language_setting.languages.length; i++) {
            if (language_setting.languages[i].code == language) {
                jsonFile = language_setting.languages[i].file;
                break;
            }
        }
        if (jsonFile) {
            $.getJSON(jsonFile, function(data) {
                json_cache[language] = data;
                callback(data);
            }).fail(function() {
                callback(undefined);
            });
        } else {
            callback(undefined);
        }
    }
}

function localize(language, callback) {
    getLanguageJson(language, function(json) {
        if (json) {
            $("[data-localize]").each(function() {
                var elem = $($(this));
                var key = elem.attr("data-localize");
                var value = json[key];
                localizeElement(elem, key, value);
            });
            if (callback) {
                callback();
            }
        } else {
            if (callback) {
                callback();
            }
        }
    });
}

function localizeElement(elem, key, value) {
    if (elem.is('input')) {
        localizeInputElement(elem, key, value);
    } else if (elem.is('textarea')) {
        localizeInputElement(elem, key, value);
    } else if (elem.is('img')) {
        localizeImageElement(elem, key, value);
    } else if (elem.is('optgroup')) {
        localizeOptgroupElement(elem, key, value);
    } else if (elem.data("toggle") == "tooltip") {
        localizeToolTipElement(elem, key, value);
    } else if (!$.isPlainObject(value)) {
        elem.html(value);
    }
    if ($.isPlainObject(value)) {
        return localizeForSpecialKeys(elem, value);
    }
};

function localizeInputElement(elem, key, value) {
    var val;
    val = $.isPlainObject(value) ? value.value : value;
    if (elem.is("[placeholder]")) {
        return elem.attr("placeholder", val);
    } else {
        return elem.val(val);
    }
};

function localizeImageElement(elem, key, value) {
    setAttrFromValueForKey(elem, "alt", value);
    return setAttrFromValueForKey(elem, "src", value);
};

function localizeOptgroupElement(elem, key, value) {
    return elem.attr("label", value);
};

function localizeToolTipElement(elem, key, value) {
    elem.attr("title", value);
    elem.attr("data-original-title", value);
    return elem.data("original-title", value);
}

function localizeForSpecialKeys(elem, value) {
    setAttrFromValueForKey(elem, "title", value);
    setAttrFromValueForKey(elem, "href", value);
    return setTextFromValueForKey(elem, "text", value);
};

function setAttrFromValueForKey(elem, key, value) {
    value = valueForKey(key, value);
    if (value != null) {
        return elem.attr(key, value);
    }
};

function setTextFromValueForKey(elem, key, value) {
    value = valueForKey(key, value);
    if (value != null) {
        return elem.text(value);
    }
};

function valueForKey(key, data) {
    var keys, value, _i, _len;
    keys = key.split(/\./);
    value = data;
    for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        value = value != null ? value[key] : null;
    }
    return value;
};