colors = [["Maize", "fffdea"],
          ["White", "ffffff"],
          ["Ice", "f1f3ff"],
          ["Platinum", "c8bece"],
          ["Silver", "bbbabf"],
          ["Grey", "808080"],
          ["Charcoal", "545454"],
          ["Coal", "4b4946"],
          ["Black", "333333"],
          ["Obsidian", "1d2224"],
          ["Midnight", "292b38"],
          ["Shadow", "392d43"],
          ["Mulberry", "6e235d"],
          ["Thistle", "8f7c8b"],
          ["Lavender", "cca4e0"],
          ["Purple", "a261cf"],
          ["Violet", "643f9c"],
          ["Royal", "4d2c89"],
          ["Storm", "757adb"],
          ["Navy", "212b5f"],
          ["Blue", "324ba9"],
          ["Splash", "6394dd"],
          ["Sky", "aec8ff"],
          ["Stonewash", "7895c1"],
          ["Steel", "556979"],
          ["Denim", "2f4557"],
          ["Azure", "0a3d67"],
          ["Caribbean", "0086ce"],
          ["Teal", "2b768f"],
          ["Aqua", "72c4c4"],
          ["Seafoam", "b2e2bd"],
          ["Jade", "61ab89"],
          ["Emerald", "20603f"],
          ["Jungle", "1e361a"],
          ["Forest", "425035"],
          ["Swamp", "687f67"],
          ["Avocado", "567c34"],
          ["Green", "629c3f"],
          ["Leaf", "a5e32d"],
          ["Spring", "a9a032"],
          ["Goldenrod", "bea55d"],
          ["Lemon", "ffe63b"],
          ["Banana", "ffec80"],
          ["Ivory", "ffd297"],
          ["Gold", "e8af49"],
          ["Sunshine", "fa912b"],
          ["Orange", "d5602b"],
          ["Fire", "ef5c23"],
          ["Tangerine", "ff7360"],
          ["Sand", "b27749"],
          ["Beige", "cabba2"],
          ["Stone", "827a64"],
          ["Slate", "564d48"],
          ["Soil", "5a4534"],
          ["Brown", "8e5b3f"],
          ["Chocolate", "563012"],
          ["Rust", "8b3220"],
          ["Tomato", "ba311c"],
          ["Crimson", "850012"],
          ["Blood", "451717"],
          ["Maroon", "652127"],
          ["Red", "c1272d"],
          ["Carmine", "b13a3a"],
          ["Coral", "cc6f6f"],
          ["Magenta", "e934aa"],
          ["Pink", "e77fbf"],
          ["Rose", "ffd6f6"]]


def get_color(str):
    return int('0x' + str, 16)

for color, color_hex in colors:
    r = get_color(color_hex[0:2])
    g = get_color(color_hex[2:4])
    b = get_color(color_hex[4:])
    if (r + g + b) > 0xff * 0x2:
        background = "#000"
    else:
        background = "#fff"

    print ".%s { background-image: none; background-color: #%s; color: %s; text-shadow: 1px 0 1px #%s, 0 1px 1px #%s, -1px 0 1px #%s, 0 -1px 1px #%s;}" % (color, color_hex, background, color_hex,color_hex,color_hex,color_hex)
