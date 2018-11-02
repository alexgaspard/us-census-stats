from django.http import HttpRequest, HttpResponse, HttpResponseNotAllowed
from django.shortcuts import render


def index(request: HttpRequest) -> HttpResponse:
    if request.method not in ['GET']:
        return HttpResponseNotAllowed(['GET'])
    return render(request, "index.html")
