from django.conf.urls import url

from census_analytics.views import test

urlpatterns = [
    url(r'^stats', test, name='stats'),
]
