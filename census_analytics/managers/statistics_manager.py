from typing import Dict, List

from census_analytics.adapters.sqlite import SQLite
from census_analytics.exceptions.field_not_allowed import FieldNotAllowed

ALLOWED_FIELDS = ['age', 'class of worker', 'industry code', 'occupation code', 'education', 'wage per hour',
                  'last education', 'marital status', 'major industry code', 'major occupation code', 'mace',
                  'hispanice', 'sex', 'member of labor', 'reason for unemployment', 'fulltime', 'capital gain',
                  'capital loss', 'dividends', 'income tax liability', 'previous residence region',
                  'previous residence state', 'household-with-family', 'household-simple', 'weight', 'msa-change',
                  'reg-change', 'within-reg-change', 'lived-here', 'migration prev res in sunbelt',
                  'num persons worked for employer', 'father birth country', 'mother birth country', 'birth country',
                  'citizenship', 'own business or self employed', 'veterans benefits', 'weeks worked in year', 'year',
                  'salary range']


class StatisticsManager(object):
    def __init__(self, db: SQLite):
        self._db = db

    def get_statistics(self, field: str) -> List[Dict[str, str]]:
        if field not in ALLOWED_FIELDS:
            raise FieldNotAllowed(field)
        return self._db.read(
            'select {0} as value, count(*) as count, avg(age) as age_average, (select count(distinct {0}) '
            'from census_learn_sql) as total from census_learn_sql group by {0} '
            'order by {0} desc limit 100'.format(field))
