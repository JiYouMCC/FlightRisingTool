var FRData = {};

FRData.OddsList = [
    ['Plentiful', '丰富',15],
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
    ['Iridescent', '身闪', 'Rare']
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
    ['White', '白色', '#FFFFFF'],
    ['Ice', '冰蓝', '#F1F3FF'],
    ['Platinum', '银灰', '#C8BECE'],
    ['Silver', '银色', '#BBBABF'],
    ['Grey', '灰色', '#808080'],
    ['Charcoal', '炭灰', '#545454'],
    ['Coal', '煤黑', '#4B4946'],
    ['Black', '黑色', '#333333'],
    ['Obsidian', '黑曜', '#1D2224'],
    ['Midnight', '午夜', '#292B38'],
    ['Shadow', '影黑', '#392D43'],
    ['Mulberry', '紫红色', '#545454'],
    ['Thistle', '蓟紫', '#8F7C8B'],
    ['Lavender', '淡紫', '#CCA4E0'],
    ['Purple', '紫色', '#A261CF'],
    ['Violet', '紫罗兰', '#643F9C'],
    ['Royal', '皇家紫', '#4D2C89'],
    ['Storm', '风暴蓝', '#757ADB'],
    ['Navy', '藏青', '#212B5F'],
    ['Blue', '蓝色', '#324BA9'],
    ['Splash', '泼蓝', '#6394DD'],
    ['Sky', '天蓝', '#AEC8FF'],
    ['Stonewash', '石磨蓝', '#7895C1'],
    ['Steel', '钢青', '#556979'],
    ['Denim', '牛仔布蓝', '#2F4557'],
    ['Azure', '湛蓝', '#0A3D67'],
    ['Caribbean', '加勒比蓝', '#0086CE'],
    ['Teal', '鸭绿', '#2B768F'],
    ['Aqua', '水色', '#72C4C4'],
    ['Seafoam', '海泡色', '#B2E2BD'],
    ['Jade', '碧绿', '#61AB89'],
    ['Emerald', '翠绿', '#20603F'],
    ['Jungle', '丛林绿', '#1E361A'],
    ['Forest', '森林绿', '#425035'],
    ['Swamp', '沼泽绿', '#687F67'],
    ['Avocado', '鳄梨色', '#567C34'],
    ['Green', '绿色', '#629C3F'],
    ['Leaf', '叶绿', '#A5E32D'],
    ['Spring', '春绿', '#A9A032'],
    ['Goldenrod', '金桔色', '#BEA55D'],
    ['Lemon', '柠檬', '#FFE63B'],
    ['Banana', '蕉黄', '#FFEC80'],
    ['Ivory', '象牙', '#FFD297'],
    ['Gold', '金色', '#E8AF49'],
    ['Sunshine', '阳光色', '#FA912B'],
    ['Orange', '橘色', '#D5602B'],
    ['Fire', '火红', '#EF5C23'],
    ['Tangerine', '橙黄', '#FF7360'],
    ['Sand', '沙色', '#B27749'],
    ['Beige', '米色', '#CABBA2'],
    ['Stone', '石灰', '#827A64'],
    ['Slate', '岩灰', '#564D48'],
    ['Soil', '泥色', '#5A4534'],
    ['Brown', '褐色', '#8E5B3F'],
    ['Chocolate', '巧克力色', '#563012'],
    ['Rust', '锈红', '#8B3220'],
    ['Tomato', '蕃茄红', '#BA311C'],
    ['Crimson', '深茜红', '#850012'],
    ['Blood', '血色', '#451717'],
    ['Maroon', '栗色', '#652127'],
    ['Red', '红色', '#C1272D'],
    ['Carmine', '胭脂红', '#B13A3A'],
    ['Coral', '珊瑚红', '#CC6F6F'],
    ['Magenta', '洋红', '#E934AA'],
    ['Pink', '粉红', '#E77FBF'],
    ['Rose', '玫瑰色', '#FFD6F6']
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
