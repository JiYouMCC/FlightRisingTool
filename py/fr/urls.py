from django.conf.urls import patterns, url
from django.views.generic import RedirectView
# from views import tool
# from views import data
# from views import cal_breed
# from views import cal_gene
# from views import cal_color
# from views import cal_target


urlpatterns = patterns(
    '',
    url(r'^$',  RedirectView.as_view(url='http://fr.jithee.name')),
    url(r'^data$', RedirectView.as_view(url='http://fr.jithee.name/data.html')),
    # url(r'^$', tool),
    # url(r'^data$', data),
    # url(r'^cal_breed$', cal_breed),
    # url(r'^cal_gene$', cal_gene),
    # url(r'^cal_color$', cal_color),
    # url(r'^cal_target$', cal_target),
)
