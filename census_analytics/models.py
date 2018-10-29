from django.db import models


class Statistics(models.Model):
    value = models.CharField(default='', max_length=200)
    count = models.IntegerField(default=0)
    average = models.FloatField(default=0)
    total = models.IntegerField(default=0)

    def __str__(self):
        return self.value

    class Meta:
        db_table = "census_learn_sql"
