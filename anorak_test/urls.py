from django.urls import include, path

# admin.autodiscover()

# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

urlpatterns = [
    path(r'', include('census_analytics.urls')),
    # path("", census_analytics.views.index, name="index"),
    # path("db/", census_analytics.views.db, name="db"),
    # path("test/", census_analytics.views.test, name="(test"),
    # path("admin/", admin.site.urls),
]
