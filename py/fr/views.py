# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response
from django.shortcuts import RequestContext
from utils import init_fr
from utils import Breed
from utils import BreedOdds, PrimaryGene, SecondaryGene, TertiaryGene, Odds
from utils import DragonColor
from utils import GetBreedRate
from utils import GetGeneRate
from utils import GetColorRange
from utils import Role
from utils import Gender
from utils import calTarget
import collections
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from project.views import is_vaild_or404
import json


def data(request):
    init_fr()
    return render_to_response(
        "fr/data.html",
        {
            'page_title': 'Flight Rising 数据',
            'breadcrumb': [
                {'name': '主页',
                 'link': '/'},
                {'name': '工具',
                 'link': None},
                {'name': 'Flight Rising 工具',
                 'link': '/fr'},
                {'name': 'Flight Rising 数据',
                 'link': None},
            ],
            'oddss': BreedOdds.BreedOddss,
            'breeds': Breed.Breeds,
            'primaryGenes': PrimaryGene.PrimaryGenes,
            'secondaryGenes': SecondaryGene.SecondaryGenes,
            'tertiaryGenes': TertiaryGene.TertiaryGenes,
            'colors': DragonColor.DragonColors,
            'breedRoles': Role.BreedRoles,
            'geneRoles': Role.GeneRoles,
            'genders': Gender.Genders,
        },
        context_instance=RequestContext(request),
    )


def tool(request):
    init_fr()
    breeds = collections.OrderedDict()
    primaryGenes = collections.OrderedDict()
    secondaryGenes = collections.OrderedDict()
    tertiaryGenes = collections.OrderedDict()
    for odds in Odds.Oddss:
        primaryGenes[odds] = []
        secondaryGenes[odds] = []
        tertiaryGenes[odds] = []
    for breedOdds in BreedOdds.BreedOddss:
        breeds[breedOdds] = []
    for breed in Breed.Breeds:
        breeds[breed.odds].append(breed)
    for primaryGene in PrimaryGene.PrimaryGenes:
        primaryGenes[primaryGene.odds].append(primaryGene)
    for secondaryGene in SecondaryGene.SecondaryGenes:
        secondaryGenes[secondaryGene.odds].append(secondaryGene)
    for tertiaryGene in TertiaryGene.TertiaryGenes:
        tertiaryGenes[tertiaryGene.odds].append(tertiaryGene)
    return render_to_response(
        "fr/tool.html",
        {
            'page_title': 'Flight Rising 工具',
            'breadcrumb': [
                {'name': '主页',
                 'link': '/'},
                {'name': '工具',
                 'link': None},
                {'name': 'Flight Rising 工具',
                 'link': None},
            ],
            'odds': Odds.Oddss,
            'breeds': breeds,
            'primaryGenes': primaryGenes,
            'secondaryGenes': secondaryGenes,
            'tertiaryGenes': tertiaryGenes,
            'colors': DragonColor.DragonColors,
            'genders': Gender.Genders,
        },
        context_instance=RequestContext(request),
    )


@csrf_exempt
def cal_breed(request):
    is_vaild_or404(request)
    init_fr()
    breed1 = str(request.POST.get('breed1', ''))
    breed2 = str(request.POST.get('breed2', ''))
    if hasattr(Breed, breed1) and hasattr(Breed, breed2):
        breed1 = getattr(Breed, breed1)
        breed2 = getattr(Breed, breed2)
        result = GetBreedRate(breed1, breed2)
        return JsonResponse(
            {
                'status': True,
                'result': [
                    {
                        'name': breed.name,
                        'name_zh': breed.name_zh,
                        'rate': rate
                    } for breed, rate in result.items()]
            }
        )
    return JsonResponse({'status': False})


@csrf_exempt
def cal_gene(request):
    is_vaild_or404(request)
    init_fr()
    gene_class = str(request.POST.get('gene', ''))
    gene1 = str(request.POST.get('gene1', ''))
    gene2 = str(request.POST.get('gene2', ''))
    gene_class = eval(gene_class)
    if hasattr(gene_class, gene1) and hasattr(gene_class, gene2):
        gene1 = getattr(gene_class, gene1)
        gene2 = getattr(gene_class, gene2)
        result = GetGeneRate(gene1, gene2)
        return JsonResponse(
            {
                'status': True,
                'result': [
                    {
                        'name': gene.name,
                        'name_zh': gene.name_zh,
                        'rate': rate
                    } for gene, rate in result.items()]
            }
        )
    return JsonResponse({'status': False})


@csrf_exempt
def cal_color(request):
    is_vaild_or404(request)
    init_fr()
    color1 = str(request.POST.get('color1', ''))
    color2 = str(request.POST.get('color2', ''))
    if hasattr(DragonColor, color1) and hasattr(DragonColor, color2):
        color1 = getattr(DragonColor, color1)
        color2 = getattr(DragonColor, color2)
        result = GetColorRange(color1, color2)
        return JsonResponse(
            {
                'status': True,
                'result': [
                    {
                        'name': color.name,
                        'name_zh': color.name_zh,
                        'hex': color.color.hex_l
                    } for color in result]
            }
        )
    return JsonResponse({'status': False})


@csrf_exempt
def cal_target(request):
    is_vaild_or404(request)
    init_fr()
    info1 = json.loads(str(request.POST.get('info1', '')))
    info2 = json.loads(str(request.POST.get('info2', '')))
    target = json.loads(str(request.POST.get('target', '')))
    return JsonResponse(
        {'status': True,
         'result': calTarget(info1, info2, target)
         }
    )
