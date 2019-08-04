FRTool = {}

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

FRTool.PrimaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.PrimaryGene[name] = this;
    FRTool.PrimaryGenes.push(this);
}

FRTool.SecondaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.SecondaryGene[name] = this;
    FRTool.SecondaryGenes.push(this);
}

FRTool.TertiaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.TertiaryGene[name] = this;
    FRTool.TertiaryGenes.push(this);
}

FRTool.AncientPrimaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.AncientPrimaryGene[name] = this;
    FRTool.AncientPrimaryGenes.push(this);
}

FRTool.AncientSecondaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.AncientSecondaryGene[name] = this;
    FRTool.AncientSecondaryGenes.push(this);
}

FRTool.AncientTertiaryGene = function(name, odds, price) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Price = price;
    FRTool.AncientTertiaryGene[name] = this;
    FRTool.AncientTertiaryGenes.push(this);
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

FRTool.Breed = function(name, odds, diet) {
    this.Name = name;
    this.Odds = FRTool.Odds[odds];
    this.Diet = diet;
    FRTool.Breed[name] = this;
    FRTool.Breeds.push(this);
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
    FRTool.PrimaryGenes = [];
    FRTool.SecondaryGenes = [];
    FRTool.TertiaryGenes = [];
    FRTool.AncientPrimaryGenes = [];
    FRTool.AncientSecondaryGenes = [];
    FRTool.AncientTertiaryGenes = [];
    FRTool.Breeds = [];
    FRTool.AncientBreeds = [];
    FRTool.Colors = [];
    FRTool.BreedRoles = {};
    FRTool.GeneRoles = {};
    for (var i = 0; i < data.OddsList.length; i++) {
        new FRTool.Odds(data.OddsList[i][0], data.OddsList[i][1]);
    };

    for (var i = 0; i < data.GenderList.length; i++) {
        new FRTool.Gender(data.GenderList[i][0]);
    };

    for (var i = 0; i < data.PrimaryGeneList.length; i++) {
        new FRTool.PrimaryGene(data.PrimaryGeneList[i][0], data.PrimaryGeneList[i][1], data.PrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.SecondaryGeneList.length; i++) {
        new FRTool.SecondaryGene(data.SecondaryGeneList[i][0], data.SecondaryGeneList[i][1], data.SecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.TertiaryGeneList.length; i++) {
        new FRTool.TertiaryGene(data.TertiaryGeneList[i][0], data.TertiaryGeneList[i][1], data.TertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AncientPrimaryGeneList.length; i++) {
        new FRTool.AncientPrimaryGene(data.AncientPrimaryGeneList[i][0], data.AncientPrimaryGeneList[i][1], data.AncientPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AncientSecondaryGeneList.length; i++) {
        new FRTool.AncientSecondaryGene(data.AncientSecondaryGeneList[i][0], data.AncientSecondaryGeneList[i][1], data.AncientSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AncientTertiaryGeneList.length; i++) {
        new FRTool.AncientTertiaryGene(data.AncientTertiaryGeneList[i][0], data.AncientTertiaryGeneList[i][1], data.AncientTertiaryGeneList[i][2]);
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

    for (var i = 0; i < data.BreedList.length; i++) {
        new FRTool.Breed(data.BreedList[i][0], data.BreedList[i][1], data.BreedList[i][2], data.BreedList[i][3]);
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
    if (breed1 instanceof FRTool.Breed && breed2 instanceof FRTool.Breed) {
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

FRTool.getBreed = function(odds) {
    var breeds = [];
    for (var i = 0; i < FRTool.Breeds.length; i++) {
        if (FRTool.Breeds[i].Odds == odds) {
            breeds.push(FRTool.Breeds[i]);
        }
    };
    return breeds;
}

FRTool.getGene = function(odds, type) {
    var genes = [];
    for (var i = 0; i < FRTool[type + "Genes"].length; i++) {
        if (FRTool[type + "Genes"][i].Odds == odds) {
            genes.push(FRTool[type + "Genes"][i]);
        }
    };

    return genes;
}

FRTool.getGeneRate = function(gene1, gene2) {
    if ((gene1 instanceof FRTool.PrimaryGene && gene2 instanceof FRTool.PrimaryGene) || (gene1 instanceof FRTool.SecondaryGene && gene2 instanceof FRTool.SecondaryGene) || (gene1 instanceof FRTool.TertiaryGene && gene2 instanceof FRTool.TertiaryGene)) {
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

FRTool.calRate = function(info1, info2, target) {
    var result = 1.0
    if (target.gender != undefined) {
        result *= 0.5;
    }

    if (target.breed != undefined) {
        var breed = FRTool.Breed[target.breed]
        var breed1 = FRTool.Breed[info1.breed];
        var breed2 = FRTool.Breed[info2.breed];
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
        var primaryGene = FRTool.PrimaryGene[target.primaryGene]
        var primaryGene1 = FRTool.PrimaryGene[info1.primaryGene];
        var primaryGene2 = FRTool.PrimaryGene[info2.primaryGene];
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
        var secondaryGene = FRTool.SecondaryGene[target.secondaryGene]
        var secondaryGene1 = FRTool.SecondaryGene[info1.secondaryGene];
        var secondaryGene2 = FRTool.SecondaryGene[info2.secondaryGene];
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
        var tertiaryGene = FRTool.TertiaryGene[target.tertiaryGene]
        var tertiaryGene1 = FRTool.TertiaryGene[info1.tertiaryGene];
        var tertiaryGene2 = FRTool.TertiaryGene[info2.tertiaryGene];
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