FRTool = {}

FRTool.Age = function(name) {
    this.Name = name;
    FRTool.Age[name] = this;
    FRTool.Ages.push(this);
}

FRTool.Odds = function(name, cooldown) {
    this.Name = name;
    this.CoolDown = cooldown;
    FRTool.Odds[name] = this;
    FRTool.Oddss.push(this);
}

FRTool.Gender = function(name) {
    this.Name = name;
    FRTool.Gender[name] = this;
    FRTool.Genders.push(this);
}

FRTool.ModernPrimaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.ModernPrimaryGene[name] = this;
    FRTool.ModernPrimaryGenes.push(this);
}

FRTool.ModernSecondaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.ModernSecondaryGene[name] = this;
    FRTool.ModernSecondaryGenes.push(this);
}

FRTool.ModernTertiaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.ModernTertiaryGene[name] = this;
    FRTool.ModernTertiaryGenes.push(this);
}

FRTool.GaolerPrimaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.GaolerPrimaryGene[name] = this;
    FRTool.GaolerPrimaryGenes.push(this);
}

FRTool.GaolerSecondaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.GaolerSecondaryGene[name] = this;
    FRTool.GaolerSecondaryGenes.push(this);
}

FRTool.GaolerTertiaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.GaolerTertiaryGene[name] = this;
    FRTool.GaolerTertiaryGenes.push(this);
}

FRTool.BanescalePrimaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.BanescalePrimaryGene[name] = this;
    FRTool.BanescalePrimaryGenes.push(this);
}

FRTool.BanescaleSecondaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.BanescaleSecondaryGene[name] = this;
    FRTool.BanescaleSecondaryGenes.push(this);
}

FRTool.BanescaleTertiaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.BanescaleTertiaryGene[name] = this;
    FRTool.BanescaleTertiaryGenes.push(this);
}

FRTool.VeilspunPrimaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.VeilspunPrimaryGene[name] = this;
    FRTool.VeilspunPrimaryGenes.push(this);
}

FRTool.VeilspunSecondaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.VeilspunSecondaryGene[name] = this;
    FRTool.VeilspunSecondaryGenes.push(this);
}

FRTool.VeilspunTertiaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.VeilspunTertiaryGene[name] = this;
    FRTool.VeilspunTertiaryGenes.push(this);
}

FRTool.AberrationPrimaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.AberrationPrimaryGene[name] = this;
    FRTool.AberrationPrimaryGenes.push(this);
}

FRTool.AberrationSecondaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.AberrationSecondaryGene[name] = this;
    FRTool.AberrationSecondaryGenes.push(this);
}

FRTool.AberrationTertiaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.AberrationTertiaryGene[name] = this;
    FRTool.AberrationTertiaryGenes.push(this);
}

FRTool.UndertidePrimaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.UndertidePrimaryGene[name] = this;
    FRTool.UndertidePrimaryGenes.push(this);
}

FRTool.UndertideSecondaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.UndertideSecondaryGene[name] = this;
    FRTool.UndertideSecondaryGenes.push(this);
}

FRTool.UndertideTertiaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.UndertideTertiaryGene[name] = this;
    FRTool.UndertideTertiaryGenes.push(this);
}

FRTool.AetherPrimaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.AetherPrimaryGene[name] = this;
    FRTool.AetherPrimaryGenes.push(this);
}

FRTool.AetherSecondaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.AetherSecondaryGene[name] = this;
    FRTool.AetherSecondaryGenes.push(this);
}

FRTool.AetherTertiaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.AetherTertiaryGene[name] = this;
    FRTool.AetherTertiaryGenes.push(this);
}

FRTool.Color = function(name, color) {
    this.Name = name;
    this.Color = color;
    this.Id = function() {
        return FRTool.Colors.indexOf(this) + 1;
    }
    FRTool.Color[name] = this;
    FRTool.Colors.push(this);
}

FRTool.ModernBreed = function(name, odds, diet) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Diet = diet;
    FRTool.ModernBreed[name] = this;
    FRTool.ModernBreeds.push(this);
}

FRTool.AncientBreed = function(name, odds, diet) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Diet = diet;
    FRTool.AncientBreed[name] = this;
    FRTool.AncientBreeds.push(this);
}


FRTool.initFR = function(data) {
    FRTool.Genders = [];
    FRTool.Oddss = [];
    FRTool.ModernPrimaryGenes = [];
    FRTool.ModernSecondaryGenes = [];
    FRTool.ModernTertiaryGenes = [];
    FRTool.GaolerPrimaryGenes = [];
    FRTool.GaolerSecondaryGenes = [];
    FRTool.GaolerTertiaryGenes = [];
    FRTool.BanescalePrimaryGenes = [];
    FRTool.BanescaleSecondaryGenes = [];
    FRTool.BanescaleTertiaryGenes = [];
    FRTool.VeilspunPrimaryGenes = [];
    FRTool.VeilspunSecondaryGenes = [];
    FRTool.VeilspunTertiaryGenes = [];
    FRTool.AberrationPrimaryGenes = [];
    FRTool.AberrationSecondaryGenes = [];
    FRTool.AberrationTertiaryGenes = [];
    FRTool.UndertidePrimaryGenes = [];
    FRTool.UndertideSecondaryGenes = [];
    FRTool.UndertideTertiaryGenes = [];
    FRTool.AetherPrimaryGenes = [];
    FRTool.AetherSecondaryGenes = [];
    FRTool.AetherTertiaryGenes = [];
    FRTool.ModernBreeds = [];
    FRTool.AncientBreeds = [];
    FRTool.Colors = [];
    FRTool.BreedRoles = {};
    FRTool.GeneRoles = {};
    FRTool.Ages = [];
    for (var i = 0; i < data.Age.length; i++) {
        new FRTool.Age(data.Age[i]);
    };

    for (var i = 0; i < data.OddsList.length; i++) {
        new FRTool.Odds(data.OddsList[i][0], data.OddsList[i][1]);
    };

    for (var i = 0; i < data.GenderList.length; i++) {
        new FRTool.Gender(data.GenderList[i][0]);
    };

    for (var i = 0; i < data.ModernPrimaryGeneList.length; i++) {
        new FRTool.ModernPrimaryGene(data.ModernPrimaryGeneList[i][0], data.ModernPrimaryGeneList[i][1], data.ModernPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.ModernSecondaryGeneList.length; i++) {
        new FRTool.ModernSecondaryGene(data.ModernSecondaryGeneList[i][0], data.ModernSecondaryGeneList[i][1], data.ModernSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.ModernTertiaryGeneList.length; i++) {
        new FRTool.ModernTertiaryGene(data.ModernTertiaryGeneList[i][0], data.ModernTertiaryGeneList[i][1], data.ModernTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.GaolerPrimaryGeneList.length; i++) {
        new FRTool.GaolerPrimaryGene(data.GaolerPrimaryGeneList[i][0], data.GaolerPrimaryGeneList[i][1], data.GaolerPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.GaolerSecondaryGeneList.length; i++) {
        new FRTool.GaolerSecondaryGene(data.GaolerSecondaryGeneList[i][0], data.GaolerSecondaryGeneList[i][1], data.GaolerSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.GaolerTertiaryGeneList.length; i++) {
        new FRTool.GaolerTertiaryGene(data.GaolerTertiaryGeneList[i][0], data.GaolerTertiaryGeneList[i][1], data.GaolerTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.BanescalePrimaryGeneList.length; i++) {
        new FRTool.BanescalePrimaryGene(data.BanescalePrimaryGeneList[i][0], data.BanescalePrimaryGeneList[i][1], data.BanescalePrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.BanescaleSecondaryGeneList.length; i++) {
        new FRTool.BanescaleSecondaryGene(data.BanescaleSecondaryGeneList[i][0], data.BanescaleSecondaryGeneList[i][1], data.BanescaleSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.BanescaleTertiaryGeneList.length; i++) {
        new FRTool.BanescaleTertiaryGene(data.BanescaleTertiaryGeneList[i][0], data.BanescaleTertiaryGeneList[i][1], data.BanescaleTertiaryGeneList[i][2]);
    };

     for (var i = 0; i < data.VeilspunPrimaryGeneList.length; i++) {
        new FRTool.VeilspunPrimaryGene(data.VeilspunPrimaryGeneList[i][0], data.VeilspunPrimaryGeneList[i][1], data.VeilspunPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.VeilspunSecondaryGeneList.length; i++) {
        new FRTool.VeilspunSecondaryGene(data.VeilspunSecondaryGeneList[i][0], data.VeilspunSecondaryGeneList[i][1], data.VeilspunSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.VeilspunTertiaryGeneList.length; i++) {
        new FRTool.VeilspunTertiaryGene(data.VeilspunTertiaryGeneList[i][0], data.VeilspunTertiaryGeneList[i][1], data.VeilspunTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AberrationPrimaryGeneList.length; i++) {
        new FRTool.AberrationPrimaryGene(data.AberrationPrimaryGeneList[i][0], data.AberrationPrimaryGeneList[i][1], data.AberrationPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AberrationSecondaryGeneList.length; i++) {
        new FRTool.AberrationSecondaryGene(data.AberrationSecondaryGeneList[i][0], data.AberrationSecondaryGeneList[i][1], data.AberrationSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AberrationTertiaryGeneList.length; i++) {
        new FRTool.AberrationTertiaryGene(data.AberrationTertiaryGeneList[i][0], data.AberrationTertiaryGeneList[i][1], data.AberrationTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.UndertidePrimaryGeneList.length; i++) {
        new FRTool.UndertidePrimaryGene(data.UndertidePrimaryGeneList[i][0], data.UndertidePrimaryGeneList[i][1], data.UndertidePrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.UndertideSecondaryGeneList.length; i++) {
        new FRTool.UndertideSecondaryGene(data.UndertideSecondaryGeneList[i][0], data.UndertideSecondaryGeneList[i][1], data.UndertideSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.UndertideTertiaryGeneList.length; i++) {
        new FRTool.UndertideTertiaryGene(data.UndertideTertiaryGeneList[i][0], data.UndertideTertiaryGeneList[i][1], data.UndertideTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AetherPrimaryGeneList.length; i++) {
        new FRTool.AetherPrimaryGene(data.AetherPrimaryGeneList[i][0], data.AetherPrimaryGeneList[i][1], data.AetherPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AetherSecondaryGeneList.length; i++) {
        new FRTool.AetherSecondaryGene(data.AetherSecondaryGeneList[i][0], data.AetherSecondaryGeneList[i][1], data.AetherSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AetherTertiaryGeneList.length; i++) {
        new FRTool.AetherTertiaryGene(data.AetherTertiaryGeneList[i][0], data.AetherTertiaryGeneList[i][1], data.AetherTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.ColorList.length; i++) {
        new FRTool.Color(data.ColorList[i][0], data.ColorList[i][1]);
    };

    for (var i = data.BreedRuleList.length - 1; i >= 0; i--) {
        FRTool.BreedRoles[data.BreedRuleList[i][0]] = data.BreedRuleList[i][1];
    };

    for (var i = data.GeneRuleList.length - 1; i >= 0; i--) {
        FRTool.GeneRoles[data.GeneRuleList[i][0]] = data.GeneRuleList[i][1];
    };

    for (var i = 0; i < data.ModernBreedList.length; i++) {
        new FRTool.ModernBreed(data.ModernBreedList[i][0], data.ModernBreedList[i][1], data.ModernBreedList[i][2], data.ModernBreedList[i][3]);
    };

    for (var i = 0; i < data.AncientBreedList.length; i++) {
        new FRTool.AncientBreed(data.AncientBreedList[i][0], data.AncientBreedList[i][1], data.AncientBreedList[i][2], data.AncientBreedList[i][3]);
    };
}

FRTool.getColorRange = function(color1, color2) {
    if (color1 instanceof FRTool.Color && color2 instanceof FRTool.Color) {
        if (color1 == color2) {
            return [color1];
        }

        var small = color1;
        var big = color2;
        if (color1.Id() > color2.Id()) {
            small = color2;
            big = color1;
        }

        left = FRTool.Colors.slice(0, small.Id() - 1);
        center = FRTool.Colors.slice(small.Id(), big.Id() - 1);
        right = FRTool.Colors.slice(big.Id());


        if (big.Id() - small.Id() < FRTool.Colors.length / 2) {
            return [small].concat(center).concat([big]);
        } else {
            return [big].concat(right).concat(left).concat(small);
        }
    }
    return null;
}

FRTool.getBreedRate = function(breed1, breed2) {
    if (breed1 instanceof FRTool.AncientBreed && breed2 instanceof FRTool.AncientBreed || breed1 instanceof FRTool.ModernBreed && breed2 instanceof FRTool.ModernBreed) {
        if (breed1 == breed2) {
            return [1];
        }
        if (FRTool.BreedRoles[breed1.Odds.Name + ',' + breed2.Odds.Name] != undefined) {
            return [FRTool.BreedRoles[breed1.Odds.Name + ',' + breed2.Odds.Name][0], FRTool.BreedRoles[breed1.Odds.Name + ',' + breed2.Odds.Name][1]];
        } else if (FRTool.BreedRoles[breed2.Odds.Name + ',' + breed1.Odds.Name] != undefined) {
            return [FRTool.BreedRoles[breed2.Odds.Name + ',' + breed1.Odds.Name][1], FRTool.BreedRoles[breed2.Odds.Name + ',' + breed1.Odds.Name][0]];
        }
    }

    return [];
}

FRTool.getBreed = function(odds, age) {
    var breeds = [];
    if (age == 'Modern') {
        for (var i = 0; i < FRTool[age + "Breeds"].length; i++) {
            if (FRTool[age + "Breeds"][i].Odds == odds) {
                breeds.push(FRTool[age + "Breeds"][i]);
            }
        };
    } else {
        for (var i = 0; i < FRTool["AncientBreeds"].length; i++) {
            if (FRTool["AncientBreeds"][i].Odds == odds && FRTool["AncientBreeds"][i].Name == age) {
                breeds.push(FRTool["AncientBreeds"][i]);
            }
        }
    }
    return breeds;
}

FRTool.getGene = function(odds, type, age) {
    var genes = [];
    for (var i = 0; i < FRTool[age + type + "Genes"].length; i++) {
        if (FRTool[age + type + "Genes"][i].Odds == odds) {
            genes.push(FRTool[age + type + "Genes"][i]);
        }
    };

    return genes;
}

FRTool.getGeneRate = function(gene1, gene2) {
    if ((gene1 instanceof FRTool.ModernPrimaryGene && gene2 instanceof FRTool.ModernPrimaryGene) 
        || (gene1 instanceof FRTool.ModernSecondaryGene && gene2 instanceof FRTool.ModernSecondaryGene) 
        || (gene1 instanceof FRTool.ModernTertiaryGene && gene2 instanceof FRTool.ModernTertiaryGene 
        || gene1 instanceof FRTool.GaolerPrimaryGene && gene2 instanceof FRTool.GaolerPrimaryGene) 
        || (gene1 instanceof FRTool.GaolerSecondaryGene && gene2 instanceof FRTool.GaolerSecondaryGene) 
        || (gene1 instanceof FRTool.GaolerTertiaryGene && gene2 instanceof FRTool.GaolerTertiaryGene)
        || (gene1 instanceof FRTool.BanescalePrimaryGene && gene2 instanceof FRTool.BanescalePrimaryGene) 
        || (gene1 instanceof FRTool.BanescaleSecondaryGene && gene2 instanceof FRTool.BanescaleSecondaryGene) 
        || (gene1 instanceof FRTool.BanescaleTertiaryGene && gene2 instanceof FRTool.BanescaleTertiaryGene)
        || (gene1 instanceof FRTool.VeilspunPrimaryGene && gene2 instanceof FRTool.VeilspunPrimaryGene) 
        || (gene1 instanceof FRTool.VeilspunSecondaryGene && gene2 instanceof FRTool.VeilspunSecondaryGene) 
        || (gene1 instanceof FRTool.VeilspunTertiaryGene && gene2 instanceof FRTool.VeilspunTertiaryGene)
        || (gene1 instanceof FRTool.AberrationPrimaryGene && gene2 instanceof FRTool.AberrationPrimaryGene) 
        || (gene1 instanceof FRTool.AberrationSecondaryGene && gene2 instanceof FRTool.AberrationSecondaryGene) 
        || (gene1 instanceof FRTool.AberrationTertiaryGene && gene2 instanceof FRTool.AberrationTertiaryGene)
        || (gene1 instanceof FRTool.UndertidePrimaryGene && gene2 instanceof FRTool.UndertidePrimaryGene) 
        || (gene1 instanceof FRTool.UndertideSecondaryGene && gene2 instanceof FRTool.UndertideSecondaryGene) 
        || (gene1 instanceof FRTool.UndertideTertiaryGene && gene2 instanceof FRTool.UndertideTertiaryGene)
        || (gene1 instanceof FRTool.AetherPrimaryGene && gene2 instanceof FRTool.AetherPrimaryGene) 
        || (gene1 instanceof FRTool.AetherSecondaryGene && gene2 instanceof FRTool.AetherSecondaryGene) 
        || (gene1 instanceof FRTool.AetherTertiaryGene && gene2 instanceof FRTool.AetherTertiaryGene)) {
        if (gene1 == gene2) {
            return [1];
        }
        if (FRTool.GeneRoles[gene1.Odds.Name + ',' + gene2.Odds.Name] != undefined) {
            return [FRTool.GeneRoles[gene1.Odds.Name + ',' + gene2.Odds.Name][0], FRTool.GeneRoles[gene1.Odds.Name + ',' + gene2.Odds.Name][1]];
        } else if (FRTool.GeneRoles[gene2.Odds.Name + ',' + gene1.Odds.Name] != undefined) {
            return [FRTool.GeneRoles[gene2.Odds.Name + ',' + gene1.Odds.Name][1], FRTool.GeneRoles[gene2.Odds.Name + ',' + gene1.Odds.Name][0]];
        }
    }

    return [];
}

FRTool.calRate = function(info1, info2, target, age) {
    var result = 1.0;
    var ageBreed = age;
    if (target.gender != undefined) {
        result *= 0.5;
    }

    if (age != FRTool.Age["Modern"].Name) {
        age = FRTool.Age["Ancient"].Name;
    }

    if (target.breed != undefined) {
        var breed = FRTool[age + "Breed"][target.breed]
        var breed1 = FRTool[age + "Breed"][info1.breed];
        var breed2 = FRTool[age + "Breed"][info2.breed];
        var rate = FRTool.getBreedRate(breed1, breed2);
        if (breed == breed1) {
            result *= rate[0];
        } else if (breed == breed2) {
            result *= rate[1];
        } else {
            return 0;
        }
    }

    if (target.primaryColor != undefined) {
        var primaryColor = FRTool.Color[target.primaryColor]
        var primaryColor1 = FRTool.Color[info1.primaryColor];
        var primaryColor2 = FRTool.Color[info2.primaryColor];
        var range = FRTool.getColorRange(primaryColor1, primaryColor2);
        if (range.indexOf(primaryColor) >= 0) {
            result /= range.length;
        } else {
            return 0;
        }
    }

    if (target.secondaryColor != undefined) {
        var secondaryColor = FRTool.Color[target.secondaryColor]
        var secondaryColor1 = FRTool.Color[info1.secondaryColor];
        var secondaryColor2 = FRTool.Color[info2.secondaryColor];
        var range = FRTool.getColorRange(secondaryColor1, secondaryColor2);
        if (range.indexOf(secondaryColor) >= 0) {
            result /= range.length;
        } else {
            return 0;
        }
    }

    if (target.tertiaryColor != undefined) {
        var tertiaryColor = FRTool.Color[target.tertiaryColor]
        var tertiaryColor1 = FRTool.Color[info1.tertiaryColor];
        var tertiaryColor2 = FRTool.Color[info2.tertiaryColor];
        var range = FRTool.getColorRange(tertiaryColor1, tertiaryColor2);
        if (range.indexOf(tertiaryColor) >= 0) {
            result /= range.length;
        } else {
            return 0;
        }
    }

    if (target.primaryGene != undefined) {
        var primaryGene = FRTool[ageBreed + "PrimaryGene"][target.primaryGene]
        var primaryGene1 = FRTool[ageBreed + "PrimaryGene"][info1.primaryGene];
        var primaryGene2 = FRTool[ageBreed + "PrimaryGene"][info2.primaryGene];
        var rate = FRTool.getGeneRate(primaryGene1, primaryGene2);
        if (primaryGene == primaryGene1) {
            result *= rate[0];
        } else if (primaryGene == primaryGene2) {
            result *= rate[1];
        } else {
            return 0;
        }
    }

    if (target.secondaryGene != undefined) {
        var secondaryGene = FRTool[ageBreed + "SecondaryGene"][target.secondaryGene]
        var secondaryGene1 = FRTool[ageBreed + "SecondaryGene"][info1.secondaryGene];
        var secondaryGene2 = FRTool[ageBreed + "SecondaryGene"][info2.secondaryGene];
        var rate = FRTool.getGeneRate(secondaryGene1, secondaryGene2);
        if (secondaryGene == secondaryGene1) {
            result *= rate[0];
        } else if (secondaryGene == secondaryGene2) {
            result *= rate[1];
        } else {
            return 0;
        }
    }

    if (target.tertiaryGene != undefined) {
        var tertiaryGene = FRTool[ageBreed + "TertiaryGene"][target.tertiaryGene]
        var tertiaryGene1 = FRTool[ageBreed + "TertiaryGene"][info1.tertiaryGene];
        var tertiaryGene2 = FRTool[ageBreed + "TertiaryGene"][info2.tertiaryGene];
        var rate = FRTool.getGeneRate(tertiaryGene1, tertiaryGene2);
        if (tertiaryGene == tertiaryGene1) {
            result *= rate[0];
        } else if (tertiaryGene == tertiaryGene2) {
            result *= rate[1];
        } else {
            return 0;
        }
    }

    return result
}
