from django.http import JsonResponse, HttpRequest, HttpResponse, HttpResponseNotAllowed, HttpResponseBadRequest
from django.utils.html import escape

from census_analytics.adapters.sqlite import SQLite
from census_analytics.exceptions.database_exception import DatabaseException
from census_analytics.managers.statistics_manager import StatisticsManager

db = SQLite('us-census.db')
statistics_manager = StatisticsManager(db)


def stats(request: HttpRequest) -> HttpResponse:
    if request.method not in ['GET']:
        return HttpResponseNotAllowed(['GET'])
    try:
        field = escape(request.GET['field'])
        if not isinstance(field, str):
            return HttpResponseBadRequest('"field" should be a string')
        statistics = statistics_manager.get_statistics(field)
        total = statistics_manager.get_total(field)
        skipped_lines_count = 0
        if total > len(statistics):
            skipped_lines_count = statistics_manager.get_skipped_lines_count(field)
        return JsonResponse({'data': statistics, 'total': total, 'skipped_lines_count': skipped_lines_count})
    except DatabaseException as e:
        return JsonResponse({'error': e.get_message()})
