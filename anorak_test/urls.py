from django.conf.urls import url
from django.contrib.staticfiles.storage import staticfiles_storage
from django.urls import include
from django.views.generic import RedirectView

from anorak_test.views import index

urlpatterns = [
    url(r'^api/', include('census_analytics.urls')),
    url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
        # RedirectView.as_view(url='/static/%(path)s', permanent=False)),
        RedirectView.as_view(url=staticfiles_storage.url('%(path)s'), permanent=False)),
    url(r'', index, name='index'),
]
