from django import setup

# Set environment variable DJANGO_SETTINGS_MODULE=anorak_test.settings
setup()

from django.contrib.auth.models import AnonymousUser
from django.test import TestCase, RequestFactory

from census_analytics.views import stats


class TestAPI(TestCase):
    def setUp(self):
        self.factory = RequestFactory()

    def test_stats_should_return_200(self):
        request = self.factory.get("/?field=citizenship")
        request.user = AnonymousUser()
        response = stats(request)
        self.assertEqual(response.status_code, 200)
