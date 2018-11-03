from json import dumps

from django.http import JsonResponse, HttpRequest, HttpResponse, HttpResponseNotAllowed, HttpResponseBadRequest
from django.utils.html import escape

from census_analytics.adapters.sqlite import SQLite
from census_analytics.exceptions.database_exception import DatabaseException
from census_analytics.exceptions.field_not_allowed import FieldNotAllowed
from census_analytics.managers.statistics_manager import StatisticsManager

APPLICATION_JSON = 'application/json'

db = SQLite('us-census.db')
statistics_manager = StatisticsManager(db)


def stats(request: HttpRequest) -> HttpResponse:
    if request.method not in ['GET']:
        return HttpResponseNotAllowed(['GET'])
    try:
        # TODO Use Marshmallow or other to validate input
        if 'field' not in request.GET:
            return HttpResponseBadRequest(dumps({'error': '"field" is mandatory'}), content_type=APPLICATION_JSON)
        if not isinstance(request.GET['field'], str):
            return HttpResponseBadRequest(dumps({'error': '"field" should be a string'}),
                                          content_type=APPLICATION_JSON)
        field = escape(request.GET['field'])
        statistics = statistics_manager.get_statistics(field)
        total = statistics_manager.get_total(field)
        skipped_lines_count = 0
        if total > len(statistics):
            skipped_lines_count = statistics_manager.get_skipped_lines_count(field)
        return JsonResponse({'data': statistics, 'total': total, 'skipped_lines_count': skipped_lines_count})
    except FieldNotAllowed as e:
        return HttpResponseBadRequest(dumps({'error': e.get_message()}), content_type=APPLICATION_JSON)
    except DatabaseException as e:
        return JsonResponse({'error': e.get_message()})
