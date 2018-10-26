from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotAllowed, HttpRequest, JsonResponse, HttpResponseBadRequest

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
        version = cur.fetchone()
        
        cur.execute('select education, count(*) as c, avg(age), (select count(distinct education) from census_learn_sql) as e from census_learn_sql group by education order by education desc limit 100')
        data = cur.fetchall()

        #select * from census_learn_sql where rowid=215094;
        return JsonResponse({'version':'SQLite version: %s'%version,'data':data})
    except Error as e:
        return JsonResponse({'error':'%s'%e.args[0]})
    finally:
        if con:
            con.close()
