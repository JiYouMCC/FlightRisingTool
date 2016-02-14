from . import *
from colour import Color
import collections


class Item(object):

    def __init__(self, name, name_zh):
        self.name = name
        self.name_zh = name_zh
        attr_string = '%ss' % (self.__class__.__name__)
        if not hasattr(self.__class__, attr_string):
            setattr(self.__class__, attr_string, [])
        getattr(self.__class__, attr_string).append(self)

    def __str__(self):
        return '%s' % self.name_zh if self.name_zh else self.name

    @staticmethod
    def Count():
        attr_string = '%ss' % (self.__class__.__name__)
        if not hasattr(self.__class__, attr_string):
            return 0
        return len(getattr(self.__class__, attr_string))

    @property
    def id(self):
        attr_string = '%ss' % (self.__class__.__name__)
        return getattr(self.__class__, attr_string).index(self) + 1


class Odds(Item):
    pass


class Gender(Item):
    pass


class GeneType(Item):
    pass


class Element(Item):
    pass


class Food(Item):
    pass


class BreedOdds(Odds):

    def __init__(self, odds, cooldown):
        super(self.__class__, self).__init__(odds.name, odds.name_zh)
        self.cooldown = cooldown


class Breed(Item):

    def __init__(self, name, name_zh, odds, diet):
        super(self.__class__, self).__init__(name, name_zh)
        self.odds = odds
        self.diet = diet


class Gene(Item):

    def __init__(self, name, name_zh, odds, type):
        super(Gene, self).__init__(name, name_zh)
        self.odds = odds
        self.type = type


class PrimaryGene(Gene):

    def __init__(self, name, name_zh, odds):
        super(self.__class__, self).__init__(
            name, name_zh, odds, GeneType.Primary)


class SecondaryGene(Gene):

    def __init__(self, name, name_zh, odds):
        super(self.__class__, self).__init__(
            name, name_zh, odds, GeneType.Secondary)


class TertiaryGene(Gene):

    def __init__(self, name, name_zh, odds):
        super(self.__class__, self).__init__(
            name, name_zh, odds, GeneType.Tertiary)


class DragonColor(Item):

    def __init__(self, name, name_zh, color):
        super(self.__class__, self).__init__(name, name_zh)
        self.color = color


class Role(object):
    BreedRoles = {}
    GeneRoles = {}


def init_fr():
    if not hasattr(DragonColor, 'DragonColors'):
        for name, name_zh in odds_list:
            setattr(Odds, name, Odds(name, name_zh))

        for name, name_zh in gender_list:
            setattr(Gender, name, Gender(name, name_zh))

        for name, name_zh in gene_type_list:
            setattr(GeneType, name, GeneType(name, name_zh))

        for name, name_zh in element_list:
            setattr(Element, name, Element(name, name_zh))

        for name, name_zh in food_list:
            setattr(Food, name, Food(name, name_zh))

        for name, cooldown in breed_odds_list:
            setattr(BreedOdds, name, BreedOdds(getattr(Odds, name), cooldown))

        for name, name_zh, odds, diet_list in breed_list:
            diet = [getattr(Food, food) for food in diet_list]
            setattr(Breed, name, Breed(name, name_zh,
                                       getattr(BreedOdds, odds), diet))

        for name, name_zh, odds in primary_gene_list:
            setattr(PrimaryGene, name, PrimaryGene(
                name, name_zh, getattr(Odds, odds)))

        for name, name_zh, odds in secondary_gene_list:
            setattr(SecondaryGene, name, SecondaryGene(
                name, name_zh, getattr(Odds, odds)))

        for name, name_zh, odds in tertiary_gene_list:
            setattr(TertiaryGene, name, TertiaryGene(
                name, name_zh, getattr(Odds, odds)))

        for name, name_zh, color in color_list:
            setattr(DragonColor, name, DragonColor(
                name, name_zh, Color(color)))

        for key, value in breed_rule_list.items():
            key1, key2 = key
            odds1, odds2 = getattr(BreedOdds, key1), getattr(BreedOdds, key2)
            value1, value2 = value
            if not (odds1, odds2) in Role.BreedRoles:
                Role.BreedRoles[(odds1, odds2)] = (value1, value2)
            if not (odds2, odds1) in Role.BreedRoles:
                Role.BreedRoles[(odds2, odds1)] = (value2, value1)

        for key, value in gene_rule_list.items():
            key1, key2 = key
            odds1, odds2 = getattr(Odds, key1), getattr(Odds, key2)
            value1, value2 = value
            if not (odds1, odds2) in Role.GeneRoles:
                Role.GeneRoles[(odds1, odds2)] = (value1, value2)
            if not (odds2, odds1) in Role.GeneRoles:
                Role.GeneRoles[(odds2, odds1)] = (value2, value1)

                
def GetColorRange(color1, color2):
    if isinstance(color1, DragonColor) and isinstance(color2, DragonColor):
        if color1 is color2:
            return [color1]
        small, big = (color1, color2) if color1.id < color2.id else (
            color2, color1)
        left = DragonColor.DragonColors[0:small.id - 1]
        center = DragonColor.DragonColors[small.id: big.id - 1]
        right = DragonColor.DragonColors[big.id:]
        if big.id - small.id < len(DragonColor.DragonColors) / 2.0:
            return [small] + center + [big]
        else:
            return [big] + right + left + [small]
    else:
        return None


def GetBreedRate(breed1, breed2):
    if isinstance(breed1, Breed) and isinstance(breed2, Breed):
        if breed1 is breed2:
            return {
                breed1: 1
            }
        if (breed1.odds, breed2.odds) in Role.BreedRoles:
            rate1, rate2 = Role.BreedRoles[breed1.odds, breed2.odds]
            result = collections.OrderedDict()
            result[breed1] = rate1
            result[breed2] = rate2
            return result
    return None


def GetGeneRate(gene1, gene2):
    if type(gene1) is type(gene2) and isinstance(gene1, Gene):
        if gene1 is gene2:
            return {
                gene1: 1
            }
        if (gene1.odds, gene2.odds) in Role.GeneRoles:
            rate1, rate2 = Role.GeneRoles[gene1.odds, gene2.odds]
            result = collections.OrderedDict()
            result[gene1] = rate1
            result[gene2] = rate2
            return result
    return None


def calRate(result, target):
    rate = 1.0
    if 'gender' in target:
        rate *= 0.5
    if 'breed' in target:
        breed = target['breed']
        if hasattr(Breed, breed):
            breed = getattr(Breed, breed)
        if breed in result['breed']:
            rate *= result['breed'][breed]
        else:
            return 0
    if 'primaryColor' in target:
        color = target['primaryColor']
        if hasattr(DragonColor, color):
            color = getattr(DragonColor, color)
        if color in result['primaryColor']:
            rate /= len(result['primaryColor'])
        else:
            return 0
    if 'secondaryColor' in target:
        color = target['secondaryColor']
        if hasattr(DragonColor, color):
            color = getattr(DragonColor, color)
        if color in result['secondaryColor']:
            rate /= len(result['secondaryColor'])
        else:
            return 0
    if 'tertiaryColor' in target:
        color = target['tertiaryColor']
        if hasattr(DragonColor, color):
            color = getattr(DragonColor, color)
        if color in result['tertiaryColor']:
            rate /= len(result['tertiaryColor'])
        else:
            return 0
    if 'primaryGene' in target:
        gene = target['primaryGene']
        if hasattr(PrimaryGene, gene):
            gene = getattr(PrimaryGene, gene)
        if gene in result['primaryGene']:
            rate *= result['primaryGene'][gene]
        else:
            return 0
    if 'secondaryGene' in target:
        gene = target['secondaryGene']
        if hasattr(SecondaryGene, gene):
            gene = getattr(SecondaryGene, gene)
        if gene in result['secondaryGene']:
            rate *= result['secondaryGene'][gene]
        else:
            return 0
    if 'tertiaryGene' in target:
        gene = target['tertiaryGene']
        if hasattr(TertiaryGene, gene):
            gene = getattr(TertiaryGene, gene)
        if gene in result['tertiaryGene']:
            rate *= result['tertiaryGene'][gene]
        else:
            return 0
    return rate


def processInfo(info):
    result = info
    info_list = [
        ('gender', Gender),
        ('breed', Breed),
        ('primaryColor', DragonColor),
        ('secondaryColor', DragonColor),
        ('tertiaryColor', DragonColor),
        ('primaryGene', PrimaryGene),
        ('secondaryGene', SecondaryGene),
        ('tertiaryGene', TertiaryGene)]
    for str_item, item_class in info_list:
        if str_item in result:
            if hasattr(item_class, result[str_item]):
                result[str_item] = getattr(item_class, result[str_item])
            else:
                result[str_item] = None
    return result


def calTarget(info1, info2, target):
    info1 = processInfo(info1)
    info2 = processInfo(info2)
    target = processInfo(target)
    rate = 1.0
    if 'gender' in target and target['gender']:
        rate = rate * 0.5
    for item_str, get_rate_function in [
            ('breed', GetBreedRate),
            ('primaryGene', GetGeneRate),
            ('secondaryGene', GetGeneRate),
            ('tertiaryGene', GetGeneRate)]:
        if item_str in target:
            target_item = target[item_str]
            if target_item:
                gene_rate = get_rate_function(info1[item_str], info2[item_str])
                if target_item in gene_rate:
                    rate = rate * gene_rate[target_item]
                else:
                    return 0
    for color_str in ['primaryColor', 'secondaryColor', 'tertiaryColor']:
        if color_str in target:
            target_color = target[color_str]
            if target_color:
                color_range = GetColorRange(info1[color_str], info2[color_str])
                if target_color in color_range:
                    rate = rate / len(color_range)
                else:
                    return 0
    return rate
