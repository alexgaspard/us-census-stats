from django.conf.urls import url

from census_analytics.views import stats

urlpatterns = [
    url(r'^stats', stats, name='stats'),
]
