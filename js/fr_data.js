var FRData = {};

FRData.OddsList = [
    ['Plentiful', '丰富', 15],
    ['Common', '常见', 20],
    ['Uncommon', '罕见', 25],
    ['Limited', '限定', 30],
    ['Rare', '稀有', 35]
];

FRData.GenderList = [
    ['Male', '雄性'],
    ['Female', '雌性']
];

FRData.PrimaryGeneList = [
    ['Basic', '基础', 'Plentiful'],
    ['Clown', '小丑', 'Common'],
    ['Piebald', '奶牛', 'Common'],
    ['Speckle', '霉斑', 'Common'],
    ['Tiger', '虎纹', 'Common'],
    ['Giraffe', '长颈鹿', 'Common'],
    ['Bar', '豹纹', 'Uncommon'],
    ['Cherub', '花卷', 'Uncommon'],
    ['Ripple', '水纹', 'Uncommon'],
    ['Vipera', '蛇纹', 'Uncommon'],
    ['Poison', '毒药', 'Limited'],
    ['Crystal', '水晶', 'Rare'],
    ['Iridescent', '身闪', 'Rare'],
    ['Petals', '花瓣', 'Rare']
]

FRData.SecondaryGeneList = [
    ['Basic', '基础', 'Plentiful'],
    ['Current', '水纹', 'Common'],
    ['Daub', '豹纹', 'Common'],
    ['EyeSpots', '眼斑', 'Common'],
    ['Freckle', '霉斑', 'Common'],
    ['Paint', '奶牛', 'Common'],
    ['Peregrine', '游隼', 'Common'],
    ['Stripes', '条纹', 'Common'],
    ['Hex', '六边形', 'Common'],
    ['Hypnotic', '迷幻', 'Uncommon'],
    ['Seraph', '天使', 'Uncommon'],
    ['Toxin', '毒雾', 'Limited'],
    ['Facet', '水晶', 'Rare'],
    ['Shimmer', '翅闪', 'Rare'],
    ['Butterfly', '蝴蝶', 'Rare']
]

FRData.TertiaryGeneList = [
    ['Basic', '基础', 'Plentiful'],
    ['Underbelly', '肚皮', 'Common'],
    ['Thylacine', '袋狼', 'Common'],
    ['Contour', '校服', 'Common'],
    ['Crackle', '裂纹', 'Uncommon'],
    ['Okapi', '丝袜', 'Uncommon'],
    ['Smoke', '烟纹', 'Uncommon'],
    ['Gembond', '宝石', 'Limited'],
    ['Spines', '脊刺', 'Limited'],
    ['Circuit', '电路', 'Rare'],
    ['Glimmer', '闪肚', 'Rare'],
    ['Stained', '滤镜', 'Rare']
]

FRData.ColorList = [
    ['Maize', '嫩黄色', '#FFFDEA'],
    ['Cream', '', '#FFEFDC'],
    ['Antique', '', '#D8D6CD'],
    ['White', '白色', '#FFFFFF'],
    ['Moon', '', '#D8D7D8'],
    ['Ice', '冰蓝', '#F1F3FF'],
    ['Orca', '', '#E0DFFF'],
    ['Platinum', '银灰', '#C8BECE'],
    ['Silver', '银色', '#BBBABF'],
    ['Dust', '', '#9C9C9E'],
    ['Grey', '灰色', '#808080'],
    ['Smoke', '', '#9494A9'],
    ['Gloom', '', '#535264'],
    ['Lead', '', '#413C3F'],
    ['Shale', '', '#4D4850'],
    ['Flint', '', '#626268'],
    ['Charcoal', '炭灰', '#545454'],
    ['Coal', '煤黑', '#4B4946'],
    ['Oilslick', '', '#342B25'],
    ['Black', '黑色', '#333333'],
    ['Obsidian', '黑曜', '#1D2224'],
    ['Eldritch', '', '#252A25'],
    ['Midnight', '午夜', '#292B38'],
    ['Shadow', '影黑', '#392D43'],
    ['Blackberry', '', '#4B294F'],
    ['Mulberry', '紫红色', '#545454'],
    ['Plum', '', '#853390'],
    ['Wisteria', '', '#724E7B'],
    ['Thistle', '蓟紫', '#8F7C8B'],
    ['Fog', '', '#A593B0'],
    ['Mist', '', '#E1CEFF'],
    ['Lavender', '淡紫', '#CCA4E0'],
    ['Heather', '', '#9777BD'],
    ['Purple', '紫色', '#A261CF'],
    ['Orchid', '', '#D950FF'],
    ['Amethyst', '', '#993BD0'],
    ['Nightshade', '', '#782EB2'],
    ['Violet', '紫罗兰', '#643F9C'],
    ['Grape', '', '#570FC0'],
    ['Royal', '皇家紫', '#4D2C89'],
    ['Eggplant', '', '#332B65'],
    ['Iris', '', '#535195'],
    ['Storm', '风暴蓝', '#757ADB'],
    ['Twilight', '', '#474AA0'],
    ['Indigo', '', '#2D237A'],
    ['Sapphire', '', '#0D095B'],
    ['Navy', '藏青', '#212B5F'],
    ['Cobalt', '', '#003484'],
    ['Ultramarine', '', '#1C51E7'],
    ['Blue', '蓝色', '#324BA9'],
    ['Periwinkle', '', '#4866D5'],
    ['Lapis', '', '#2B84FF'],
    ['Splash', '泼蓝', '#6394DD'],
    ['Cornflower', '', '#75A8FF'],
    ['Sky', '天蓝', '#AEC8FF'],
    ['Stonewash', '石磨蓝', '#7895C1'],
    ['Overcast', '', '#444F69'],
    ['Steel', '钢青', '#556979'],
    ['Denim', '牛仔布蓝', '#2F4557'],
    ['Abyss', '', '#0D1E24'],
    ['Phtalo', '', '#0B2D46'],
    ['Azure', '湛蓝', '#0A3D67'],
    ['Caribbean', '加勒比蓝', '#0086CE'],
    ['Teal', '鸭绿', '#2B768F'],
    ['Cerulean', '', '#00B4D6'],
    ['Cyan', '', '#00FFF0'],
    ['Robin', '', '#9AEAEF'],
    ['Aqua', '水色', '#72C4C4'],
    ['Turquoise', '', '#3AA0A1'],
    ['Spruce', '', '#8BBBB2'],
    ['Pistachio', '', '#E2FFE6'],
    ['Seafoam', '海泡色', '#B2E2BD'],
    ['Mint', '', '#9AFFC7'],
    ['Jade', '碧绿', '#61AB89'],
    ['Spearmint', '', '#148E67'],
    ['Thicket', '', '#005E48'],
    ['Peacock', '', '#1F4739'],
    ['Emerald', '翠绿', '#20603F'],
    ['Shamrock', '', '#236925'],
    ['Jungle', '丛林绿', '#1E361A'],
    ['Hunter', '', '#1D2715'],
    ['Forest', '森林绿', '#425035'],
    ['Camo', '', '#51684C'],
    ['Algae', '', '#97AF8B'],
    ['Swamp', '沼泽绿', '#687F67'],
    ['Avocado', '鳄梨色', '#567C34'],
    ['Green', '绿色', '#629C3F'],
    ['Fern', '', '#7ECE73'],
    ['Mantis', '', '#99FF9C'],
    ['Pear', '', '#8ECD55'],
    ['Leaf', '叶绿', '#A5E32D'],
    ['Radioactive', '', '#C6FF00'],
    ['Honeydew', '', '#D0E672'],
    ['Peridot', '', '#E8FFB5'],
    ['Chartreuse', '', '#B4CD3C'],
    ['Spring', '春绿', '#A9A032'],
    ['Crocodile', '', '#828335'],
    ['Olive', '', '#697135'],
    ['Murk', '', '#4B4420'],
    ['Moss', '', '#7E7745'],
    ['Goldenrod', '金桔色', '#BEA55D'],
    ['Amber', '', '#C18E1B'],
    ['Honey', '', '#D1B300'],
    ['Lemon', '柠檬', '#FFE63B'],
    ['Yellow', '', '#F9E255'],
    ['Grapefruit', '', '#F7FF6F'],
    ['Banana', '蕉黄', '#FFEC80'],
    ['Sanddollar', '', '#EBE7AE'],
    ['Flaxen', '', '#FDE9AE'],
    ['Ivory', '象牙', '#FFD297'],
    ['Buttercup', '', '#F6BF6B'],
    ['Gold', '金色', '#E8AF49'],
    ['Metals', '', '#D1B046'],
    ['Marigold', '', '#FFB43B'],
    ['Sunshine', '阳光色', '#FA912B'],
    ['Saffron', '', '#FF8400'],
    ['Sunset', '', '#FFA248'],
    ['Peach', '', '#FFB576'],
    ['Cantaloupe', '', '#FF984F'],
    ['Orange', '橘色', '#D5602B'],
    ['Bronze', '', '#B2560D'],
    ['Terracotta', '', '#B23B07'],
    ['Carrot', '', '#FF5500'],
    ['Fire', '火红', '#EF5C23'],
    ['Pumpkin', '', '#FF6840'],
    ['Tangerine', '橙黄', '#FF7360'],
    ['Cinnamon', '', '#C05A39'],
    ['Caramel', '', '#C67047'],
    ['Sand', '沙色', '#B27749'],
    ['Tan', '', '#C49A70'],
    ['Beige', '米色', '#CABBA2'],
    ['Stone', '石灰', '#827A64'],
    ['Taupe', '', '#6D665A'],
    ['Slate', '岩灰', '#564D48'],
    ['Driftwood', '', '#766359'],
    ['Latte', '', '#977B6C'],
    ['Dirt', '', '#76483F'],
    ['Clay', '', '#603F3D'],
    ['Sable', '', '#57372C'],
    ['Umber', '', '#2F1E1A'],
    ['Soil', '泥色', '#5A4534'],
    ['Hickory', '', '#725639'],
    ['Tarnish', '', '#855C32'],
    ['Ginger', '', '#90532B'],
    ['Brown', '褐色', '#8E5B3F'],
    ['Chocolate', '巧克力色', '#563012'],
    ['Auburn', '', '#7B3C1D'],
    ['Copper', '', '#A44B28'],
    ['Rust', '锈红', '#8B3220'],
    ['Tomato', '蕃茄红', '#BA311C'],
    ['Vermillion', '', '#E22D17'],
    ['Ruby', '', '#CD000E'],
    ['Cherry', '', '#AA0024'],
    ['Crimson', '深茜红', '#850012'],
    ['Garnet', '', '#5B0F14'],
    ['Sanguine', '', '#2E0002'],
    ['Blood', '血色', '#451717'],
    ['Maroon', '栗色', '#652127'],
    ['Berry', '', '#8B272C'],
    ['Red', '红色', '#C1272D'],
    ['Strawberry', '', '#DE3235'],
    ['Cerise', '', '#A22929'],
    ['Carmine', '胭脂红', '#B13A3A'],
    ['Brick', '', '#9A534D'],
    ['Coral', '珊瑚红', '#CC6F6F'],
    ['Blush', '', '#FFA2A2'],
    ['Cottoncandy', '', '#EB7997'],
    ['Watermelon', '', '#DB518D'],
    ['Magenta', '洋红', '#E934AA'],
    ['Fuchsia', '', '#EC0089'],
    ['Raspberry', '', '#8A0249'],
    ['Wine', '', '#4D0F28'],
    ['Mauve', '', '#9C4875'],
    ['Pink', '粉红', '#E77FBF'],
    ['Bubblegum', '', '#EAA9FF'],
    ['Rose', '玫瑰色', '#FFD6F6'],
    ['Pearl', '', '#FBE9F8']
]

FRData.BreedList = [
    ['Fae', '精灵', 'Plentiful', ['Insects']],
    ['Guardian', '守护', 'Plentiful', ['Meet', 'Seafood', 'Insects', 'Plants']],
    ['Tundra', '毛毛', 'Plentiful', ['Plants']],
    ['Mirror', '镜子', 'Plentiful', ['Meet', 'Seafood']],
    ['Pearlcatcher', '寻珠', 'Common', ['Insects', 'Plants']],
    ['Ridgeback', '山脊', 'Common', ['Seafood']],
    ['Snapper', '肥肥', 'Common', ['Plants', 'Seafood']],
    ['Spiral', '圈圈', 'Common', ['Insects', 'Meet']],
    ['Skydancer', '天舞', 'Uncommon', ['Plants', 'Insects']],
    ['Imperial', '帝王', 'Limited', ['Insects', 'Meet', 'Seafood', 'Plants']],
    ['Nocturne', '夜曲', 'Limited', ['Meet', 'Insects']],
    ['Wildclaw', '野爪', 'Rare', ['Meet']],
    ['Coatl', '羽蛇', 'Rare', ['Seafood']]
]

FRData.BreedRuleList = [
    [
        ['Plentiful', 'Plentiful'],
        [0.5, 0.5]
    ],
    [
        ['Plentiful', 'Common'],
        [0.7, 0.3]
    ],
    [
        ['Plentiful', 'Uncommon'],
        [0.85, 0.15]
    ],
    [
        ['Plentiful', 'Limited'],
        [0.95, 0.05]
    ],
    [
        ['Plentiful', 'Rare'],
        [0.99, 0.01]
    ],
    [
        ['Common', 'Common'],
        [0.5, 0.5]
    ],
    [
        ['Common', 'Uncommon'],
        [0.75, 0.25]
    ],
    [
        ['Common', 'Limited'],
        [0.89, 0.11]
    ],
    [
        ['Common', 'Rare'],
        [0.99, 0.01]
    ],
    [
        ['Uncommon', 'Uncommon'],
        [0.5, 0.5]
    ],
    [
        ['Uncommon', 'Limited'],
        [0.86, 0.14]
    ],
    [
        ['Uncommon', 'Rare'],
        [0.98, 0.02]
    ],
    [
        ['Limited', 'Limited'],
        [0.5, 0.5]
    ],
    [
        ['Limited', 'Rare'],
        [0.97, 0.03]
    ],
    [
        ['Rare', 'Rare'],
        [0.5, 0.5]
    ]
]

FRData.GeneRuleList = [
    [
        ['Plentiful', 'Plentiful'],
        [0.5, 0.5]
    ],
    [
        ['Plentiful', 'Common'],
        [0.7, 0.3]
    ],
    [
        ['Plentiful', 'Uncommon'],
        [0.85, 0.15]
    ],
    [
        ['Plentiful', 'Limited'],
        [0.95, 0.05]
    ],
    [
        ['Plentiful', 'Rare'],
        [0.99, 0.01]
    ],
    [
        ['Common', 'Common'],
        [0.5, 0.5]
    ],
    [
        ['Common', 'Uncommon'],
        [0.75, 0.25]
    ],
    [
        ['Common', 'Limited'],
        [0.92, 0.08]
    ],
    [
        ['Common', 'Rare'],
        [0.99, 0.01]
    ],
    [
        ['Uncommon', 'Uncommon'],
        [0.5, 0.5]
    ],
    [
        ['Uncommon', 'Limited'],
        [0.85, 0.15]
    ],
    [
        ['Uncommon', 'Rare'],
        [0.98, 0.02]
    ],
    [
        ['Limited', 'Limited'],
        [0.5, 0.5]
    ],
    [
        ['Limited', 'Rare'],
        [0.97, 0.03]
    ],
    [
        ['Rare', 'Rare'],
        [0.5, 0.5]
    ]
]