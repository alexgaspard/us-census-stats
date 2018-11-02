from django import setup

# Set environment variable DJANGO_SETTINGS_MODULE=anorak_test.settings
setup()

from django.contrib.auth.models import AnonymousUser
from django.test import TestCase, RequestFactory

from census_analytics.views import index


class TestIndex(TestCase):
    def setUp(self):
        self.factory = RequestFactory()

    def test_index_should_return_200(self):
        request = self.factory.get("/")
        request.user = AnonymousUser()
        response = index(request)
        self.assertEqual(response.status_code, 200)
