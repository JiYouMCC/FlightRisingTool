var FRData = {};

FRData.OddsList = [
    ['Plentiful', 15],
    ['Common', 20],
    ['Uncommon', 25],
    ['Limited', 30],
    ['Rare', 35]
];

FRData.GenderList = [
    ['Male'],
    ['Female']
];

FRData.PrimaryGeneList = [
    ['Basic', 'Plentiful'],
    ['Clown', 'Common'],
    ['Piebald', 'Common'],
    ['Speckle', 'Common'],
    ['Tiger', 'Common'],
    ['Giraffe', 'Common'],
    ['Bar', 'Uncommon'],
    ['Cherub', 'Uncommon'],
    ['Ripple', 'Uncommon'],
    ['Vipera', 'Uncommon'],
    ['Poison', 'Limited'],
    ['Crystal', 'Rare'],
    ['Iridescent', 'Rare'],
    ['Petals', 'Rare'],
    ['Jupiter','Uncommon']
]

FRData.SecondaryGeneList = [
    ['Basic', 'Plentiful'],
    ['Current', 'Common'],
    ['Daub', 'Common'],
    ['EyeSpots', 'Common'],
    ['Freckle', 'Common'],
    ['Paint', 'Common'],
    ['Peregrine', 'Common'],
    ['Stripes', 'Common'],
    ['Hex', 'Common'],
    ['Hypnotic', 'Uncommon'],
    ['Seraph', 'Uncommon'],
    ['Toxin', 'Limited'],
    ['Facet', 'Rare'],
    ['Shimmer', 'Rare'],
    ['Butterfly', 'Rare'],
    ['Saturn','Common']
]

FRData.TertiaryGeneList = [
    ['Basic', 'Plentiful'],
    ['Underbelly', 'Common'],
    ['Thylacine', 'Common'],
    ['Contour', 'Common'],
    ['Crackle', 'Uncommon'],
    ['Okapi', 'Uncommon'],
    ['Smoke', 'Uncommon'],
    ['Gembond', 'Limited'],
    ['Spines', 'Limited'],
    ['Circuit', 'Rare'],
    ['Glimmer', 'Rare'],
    ['Stained', 'Rare']
]

FRData.ColorList = [
    ['Maize', '#FFFDEA'],
    ['Cream', '#FFEFDC'],
    ['Antique', '#D8D6CD'],
    ['White', '#FFFFFF'],
    ['Moon', '#D8D7D8'],
    ['Ice', '#F1F3FF'],
    ['Orca', '#E0DFFF'],
    ['Platinum', '#C8BECE'],
    ['Silver', '#BBBABF'],
    ['Dust', '#9C9C9E'],
    ['Grey', '#808080'],
    ['Smoke', '#9494A9'],
    ['Gloom', '#535264'],
    ['Lead', '#413C3F'],
    ['Shale', '#4D4850'],
    ['Flint', '#626268'],
    ['Charcoal', '#545454'],
    ['Coal', '#4B4946'],
    ['Oilslick', '#342B25'],
    ['Black', '#333333'],
    ['Obsidian', '#1D2224'],
    ['Eldritch', '#252A25'],
    ['Midnight', '#292B38'],
    ['Shadow', '#392D43'],
    ['Blackberry', '#4B294F'],
    ['Mulberry', '#545454'],
    ['Plum', '#853390'],
    ['Wisteria', '#724E7B'],
    ['Thistle', '#8F7C8B'],
    ['Fog', '#A593B0'],
    ['Mist', '#E1CEFF'],
    ['Lavender', '#CCA4E0'],
    ['Heather', '#9777BD'],
    ['Purple', '#A261CF'],
    ['Orchid', '#D950FF'],
    ['Amethyst', '#993BD0'],
    ['Nightshade', '#782EB2'],
    ['Violet', '#643F9C'],
    ['Grape', '#570FC0'],
    ['Royal', '#4D2C89'],
    ['Eggplant', '#332B65'],
    ['Iris', '#535195'],
    ['Storm', '#757ADB'],
    ['Twilight', '#474AA0'],
    ['Indigo', '#2D237A'],
    ['Sapphire', '#0D095B'],
    ['Navy', '#212B5F'],
    ['Cobalt', '#003484'],
    ['Ultramarine', '#1C51E7'],
    ['Blue', '#324BA9'],
    ['Periwinkle', '#4866D5'],
    ['Lapis', '#2B84FF'],
    ['Splash', '#6394DD'],
    ['Cornflower', '#75A8FF'],
    ['Sky', '#AEC8FF'],
    ['Stonewash', '#7895C1'],
    ['Overcast', '#444F69'],
    ['Steel', '#556979'],
    ['Denim', '#2F4557'],
    ['Abyss', '#0D1E24'],
    ['Phthalo', '#0B2D46'],
    ['Azure', '#0A3D67'],
    ['Caribbean', '#0086CE'],
    ['Teal', '#2B768F'],
    ['Cerulean', '#00B4D6'],
    ['Cyan', '#00FFF0'],
    ['Robin', '#9AEAEF'],
    ['Aqua', '#72C4C4'],
    ['Turquoise', '#3AA0A1'],
    ['Spruce', '#8BBBB2'],
    ['Pistachio', '#E2FFE6'],
    ['Seafoam', '#B2E2BD'],
    ['Mint', '#9AFFC7'],
    ['Jade', '#61AB89'],
    ['Spearmint', '#148E67'],
    ['Thicket', '#005E48'],
    ['Peacock', '#1F4739'],
    ['Emerald', '#20603F'],
    ['Shamrock', '#236925'],
    ['Jungle', '#1E361A'],
    ['Hunter', '#1D2715'],
    ['Forest', '#425035'],
    ['Camo', '#51684C'],
    ['Algae', '#97AF8B'],
    ['Swamp', '#687F67'],
    ['Avocado', '#567C34'],
    ['Green', '#629C3F'],
    ['Fern', '#7ECE73'],
    ['Mantis', '#99FF9C'],
    ['Pear', '#8ECD55'],
    ['Leaf', '#A5E32D'],
    ['Radioactive', '#C6FF00'],
    ['Honeydew', '#D0E672'],
    ['Peridot', '#E8FFB5'],
    ['Chartreuse', '#B4CD3C'],
    ['Spring', '#A9A032'],
    ['Crocodile', '#828335'],
    ['Olive', '#697135'],
    ['Murk', '#4B4420'],
    ['Moss', '#7E7745'],
    ['Goldenrod', '#BEA55D'],
    ['Amber', '#C18E1B'],
    ['Honey', '#D1B300'],
    ['Lemon', '#FFE63B'],
    ['Yellow', '#F9E255'],
    ['Grapefruit', '#F7FF6F'],
    ['Banana', '#FFEC80'],
    ['Sanddollar', '#EBE7AE'],
    ['Flaxen', '#FDE9AE'],
    ['Ivory', '#FFD297'],
    ['Buttercup', '#F6BF6B'],
    ['Gold', '#E8AF49'],
    ['Metals', '#D1B046'],
    ['Marigold', '#FFB43B'],
    ['Sunshine', '#FA912B'],
    ['Saffron', '#FF8400'],
    ['Sunset', '#FFA248'],
    ['Peach', '#FFB576'],
    ['Cantaloupe', '#FF984F'],
    ['Orange', '#D5602B'],
    ['Bronze', '#B2560D'],
    ['Terracotta', '#B23B07'],
    ['Carrot', '#FF5500'],
    ['Fire', '#EF5C23'],
    ['Pumpkin', '#FF6840'],
    ['Tangerine', '#FF7360'],
    ['Cinnamon', '#C05A39'],
    ['Caramel', '#C67047'],
    ['Sand', '#B27749'],
    ['Tan', '#C49A70'],
    ['Beige', '#CABBA2'],
    ['Stone', '#827A64'],
    ['Taupe', '#6D665A'],
    ['Slate', '#564D48'],
    ['Driftwood', '#766359'],
    ['Latte', '#977B6C'],
    ['Dirt', '#76483F'],
    ['Clay', '#603F3D'],
    ['Sable', '#57372C'],
    ['Umber', '#2F1E1A'],
    ['Soil', '#5A4534'],
    ['Hickory', '#725639'],
    ['Tarnish', '#855C32'],
    ['Ginger', '#90532B'],
    ['Brown', '#8E5B3F'],
    ['Chocolate', '#563012'],
    ['Auburn', '#7B3C1D'],
    ['Copper', '#A44B28'],
    ['Rust', '#8B3220'],
    ['Tomato', '#BA311C'],
    ['Vermillion', '#E22D17'],
    ['Ruby', '#CD000E'],
    ['Cherry', '#AA0024'],
    ['Crimson', '#850012'],
    ['Garnet', '#5B0F14'],
    ['Sanguine', '#2E0002'],
    ['Blood', '#451717'],
    ['Maroon', '#652127'],
    ['Berry', '#8B272C'],
    ['Red', '#C1272D'],
    ['Strawberry', '#DE3235'],
    ['Cerise', '#A22929'],
    ['Carmine', '#B13A3A'],
    ['Brick', '#9A534D'],
    ['Coral', '#CC6F6F'],
    ['Blush', '#FFA2A2'],
    ['Cottoncandy', '#EB7997'],
    ['Watermelon', '#DB518D'],
    ['Magenta', '#E934AA'],
    ['Fuchsia', '#EC0089'],
    ['Raspberry', '#8A0249'],
    ['Wine', '#4D0F28'],
    ['Mauve', '#9C4875'],
    ['Pink', '#E77FBF'],
    ['Bubblegum', '#EAA9FF'],
    ['Rose', '#FFD6F6'],
    ['Pearl', '#FBE9F8']
]

FRData.BreedList = [
    ['Fae', 'Plentiful', ['Insects']],
    ['Guardian', 'Plentiful', ['Meet', 'Seafood', 'Insects', 'Plants']],
    ['Tundra', 'Plentiful', ['Plants']],
    ['Mirror', 'Plentiful', ['Meet', 'Seafood']],
    ['Pearlcatcher', 'Common', ['Insects', 'Plants']],
    ['Ridgeback', 'Common', ['Seafood']],
    ['Snapper', 'Common', ['Plants', 'Seafood']],
    ['Spiral', 'Common', ['Insects', 'Meet']],
    ['Skydancer', 'Uncommon', ['Plants', 'Insects']],
    ['Imperial', 'Limited', ['Insects', 'Meet', 'Seafood', 'Plants']],
    ['Nocturne', 'Limited', ['Meet', 'Insects']],
    ['Wildclaw', 'Rare', ['Meet']],
    ['Coatl', 'Rare', ['Seafood']]
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
