from typing import Dict, List

from census_analytics.adapters.sqlite import SQLite
from census_analytics.exceptions.field_not_allowed import FieldNotAllowed

LIMIT = 100

TABLE_NAME = 'census_learn_sql'

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
            'select "{0}" as value, count(*) as count, avg(age) as age_average from {1} where "{0}" <> \'\' '
            'group by "{0}" order by "{0}" desc limit {2}'.format(field, TABLE_NAME, LIMIT))

    def get_total(self, field: str) -> int:
        if field not in ALLOWED_FIELDS:
            raise FieldNotAllowed(field)
        total = self._db.read('select count(distinct "{0}") from {1}'.format(field, TABLE_NAME))
        return int(next(iter(total[0].values())))

    def get_skipped_lines_count(self, field: str) -> int:
        if field not in ALLOWED_FIELDS:
            raise FieldNotAllowed(field)
        skipped_lines_count = self._db.read(
            'select count(*) from {1} group by "{0}" order by "{0}" desc limit -1 offset {2}'.format(field, TABLE_NAME,
                                                                                                 LIMIT))
        total_count = 0
        for count in skipped_lines_count:
            total_count += next(iter(count.values()))
        return total_count
