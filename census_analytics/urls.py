from django.urls import path

from census_analytics.views import index, test

# router = routers.DefaultRouter(trailing_slash=false)
# router.register(r'stats', statsviewset)

urlpatterns = [
    path(r'api/stats', test, name='stats'),
    path(r'', index, name='index'),
]
