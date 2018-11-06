[![DepShield Badge](https://depshield.sonatype.org/badges/alexgaspard/us-census-stats/depshield.svg)](https://github.com/alexgaspard/us-census-stats/issues)

# US census stats

A Django app using Angular as frontend, which can easily be deployed to Heroku. This webapp allows to visualize results from us-census.db by field. When selecting a field, it displays the first 100 different values for this field with the number of answers and the age average of the people answering per value. If there are more than 100 different values,the number of non-displayed
values and the number of non-displayed lines are given above the table.

This Django application is originated from [Getting Started with Python on Heroku](https://devcenter.heroku.com/articles/getting-started-with-python). It has then evolved to keep only what was needed for this project. As the database was an outside input, it made no sense to modify it thus everything related to migrations has been removed. 

The effort was on splitting the code into independent modules. The Angular project in folder front-end is independant. Webapp census_analytics is independant from the front-end and handles API calls only. Using Heroku, I had to commit static files generated from Angular project with `ng build --prod` since Heroku executes only `python manage.py collectstatic` before running the app. 

The Angular app follows architecture guidelines from [this article](https://medium.com/@cyrilletuzi/architecture-in-angular-projects-242606567e40). See README.md in front-end folder for more information.

## Running Locally

Make sure you have Python 3.7 [installed locally](http://install.python-guide.org). To push to Heroku, you'll need to install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

```sh
$ git clone https://github.com/alexgaspard/us-census-stats.git
$ cd us-census-stats

$ python3 -m venv venv && . venv/bin/activate
$ pip install -r requirements.txt

$ python manage.py collectstatic

$ heroku local
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

Or instead of using Heroku, you can deploy directly:

```sh
$ python manage.py runserver
```

Your app should now be running on [localhost:8000](http://localhost:8000/).

If you make changes to front-end project, do not forget to build and collect static files to see your changes:

```sh
$ cd front-end && ng build --prod && cd -
$ python manage.py collectstatic
```

Or run `ng serve` for a dev server on [localhost:4200](http://localhost:4200/). You will need a server running the Django app on localhost:8000 and something to disable CORS protection like [this extension](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/).

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)
