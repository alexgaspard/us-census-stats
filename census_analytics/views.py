from django.http import JsonResponse, HttpRequest, HttpResponse, HttpResponseNotAllowed, HttpResponseBadRequest
from django.shortcuts import render
from django.utils.html import escape

from census_analytics.adapters.sqlite import SQLite
from census_analytics.exceptions.database_exception import DatabaseException
from census_analytics.managers.statistics_manager import StatisticsManager

db = SQLite('us-census.db')
statistics_manager = StatisticsManager(db)


def index(request: HttpRequest) -> HttpResponse:
    if request.method not in ['GET']:
        return HttpResponseNotAllowed(['GET'])
    return render(request, "index.html")


def stats(request: HttpRequest) -> HttpResponse:
    if request.method not in ['GET']:
        return HttpResponseNotAllowed(['GET'])
    try:
        field = escape(request.GET['field'])
        if not isinstance(field, str):
            return HttpResponseBadRequest('"field" should be a string')
        result = statistics_manager.get_statistics(field)
        return JsonResponse({'data': result})
    except DatabaseException as e:
        return JsonResponse({'error': e.get_message()})
