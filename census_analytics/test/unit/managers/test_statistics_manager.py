from unittest import TestCase
from unittest.mock import Mock

from census_analytics.adapters.sqlite import SQLite
from census_analytics.exceptions.field_not_allowed import FieldNotAllowed
from census_analytics.managers.statistics_manager import StatisticsManager


class TestStatisticsManager(TestCase):
    def setUp(self):
        self._db = Mock(spec=SQLite)  # type: SQLite
        self._manager = StatisticsManager(self._db)

        # return self._db.read(
        #     'select {0} as value, count(*) as count, avg(age) as age_average, (select count(distinct {0}) '
        #     'from census_learn_sql) as total from census_learn_sql group by {0} '
        #     'order by {0} desc limit 100'.format(field))

    def test_get_statistics_should_read(self):
        field = 'citizenship'
        self._manager.get_statistics(field)
        self._db.read.assert_called_once_with(
            'select {0} as value, count(*) as count, avg(age) as age_average from census_learn_sql where {0} <> \'\' '
            'group by {0} order by {0} desc limit 100'.format(field))

    def test_get_statistics_should_not_fail(self):
        expected = {'key': 'value'}
        self._db.read.return_value = expected
        result = self._manager.get_statistics('citizenship')
        self.assertEqual(expected, result)

    def test_get_statistics_when_unallowed_field_should_raise_exception(self):
        with self.assertRaises(FieldNotAllowed):
            self._manager.get_statistics('')
