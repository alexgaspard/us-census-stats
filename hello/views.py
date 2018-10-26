from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting
from sqlite3 import connect, Error

# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})

def test(request):
    try:
        con = connect('us-census.db')
        cur = con.cursor()    
        cur.execute('SELECT SQLITE_VERSION()')
        data = cur.fetchone()
        return '{"message":"SQLite version: %s"}'%data
    except Error as e:
        return '{"error":"%s"}'%e.args[0]
    finally:
        if con:
            con.close()
