from django.conf.urls import url
from django.contrib.staticfiles.storage import staticfiles_storage
from django.urls import path
from django.views.generic import RedirectView

from census_analytics.views import index, test

# router = routers.DefaultRouter(trailing_slash=false)
# router.register(r'stats', statsviewset)

urlpatterns = [
    path(r'api/stats', test, name='stats'),
    url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
        RedirectView.as_view(url=staticfiles_storage.url('%(path)s'), permanent=False)),
    url(r'', index, name='index'),
]
