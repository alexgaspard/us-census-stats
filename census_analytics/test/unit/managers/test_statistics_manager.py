from unittest import TestCase
from unittest.mock import Mock

from census_analytics.adapters.sqlite import SQLite
from census_analytics.exceptions.field_not_allowed import FieldNotAllowed
from census_analytics.managers.statistics_manager import StatisticsManager, LIMIT, TABLE_NAME


class TestStatisticsManager(TestCase):
    def setUp(self):
        self._db = Mock(spec=SQLite)  # type: SQLite
        self._manager = StatisticsManager(self._db)

    def test_get_statistics_should_read(self):
        field = 'citizenship'
        self._manager.get_statistics(field)
        self._db.read.assert_called_once_with(
            'select "{0}" as value, count(*) as count, avg(age) as age_average from {1} where "{0}" <> \'\' '
            'group by "{0}" order by "{0}" desc limit {2}'.format(field, TABLE_NAME, LIMIT))

    def test_get_statistics_should_not_fail(self):
        expected = [{'key': 'value'}]
        self._db.read.return_value = expected
        result = self._manager.get_statistics('citizenship')
        self.assertEqual(expected, result)

    def test_get_statistics_when_unknown_field_should_raise_exception(self):
        with self.assertRaises(FieldNotAllowed):
            self._manager.get_statistics('')

    def test_get_total_should_read(self):
        self._db.read.return_value = [{'key': 0}]
        field = 'citizenship'
        self._manager.get_total(field)
        self._db.read.assert_called_once_with('select count(distinct "{0}") from {1}'.format(field, TABLE_NAME))

    def test_get_total_should_not_fail(self):
        expected = 1
        self._db.read.return_value = [{'key': expected}]
        result = self._manager.get_total('citizenship')
        self.assertEqual(expected, result)

    def test_get_total_when_unknown_field_should_raise_exception(self):
        self._db.read.return_value = [{'key': 0}]
        with self.assertRaises(FieldNotAllowed):
            self._manager.get_total('')

    def test_get_skipped_lines_count_should_read(self):
        self._db.read.return_value = [{'key': 0}]
        field = 'citizenship'
        self._manager.get_skipped_lines_count(field)
        self._db.read.assert_called_once_with(
            'select count(*) from {1} group by "{0}" order by "{0}" desc limit -1 offset {2}'.format(field, TABLE_NAME,
                                                                                                 LIMIT))

    def test_get_skipped_lines_count_should_not_fail(self):
        first = 1
        second = 2
        self._db.read.return_value = [{'key': first}, {'other': second}]
        result = self._manager.get_skipped_lines_count('citizenship')
        self.assertEqual(first + second, result)

    def test_get_skipped_lines_count_when_unknown_field_should_raise_exception(self):
        self._db.read.return_value = [{'key': 0}]
        with self.assertRaises(FieldNotAllowed):
            self._manager.get_skipped_lines_count('')
