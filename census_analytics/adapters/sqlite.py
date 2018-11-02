from sqlite3 import connect, Error, Row
from typing import Dict, List

from census_analytics.exceptions.database_exception import DatabaseException


class SQLite(object):
    def __init__(self, db_path: str):
        self._db_path = db_path

    def read(self, query: str, parameters: Dict[str, str] = None) -> List[Dict[str, str]]:
        parameters = {} if parameters is None else parameters
        try:
            with connect(self._db_path) as connection:
                connection.row_factory = Row
                cursor = connection.cursor()
                cursor.execute(query, parameters)
                return [dict(row) for row in cursor.fetchall()]
        except Error as e:
            raise DatabaseException(str(e.args[0]))

    def write(self, query: str, parameters: Dict[str, str] = None):
        parameters = {} if parameters is None else parameters
        try:
            with connect(self._db_path) as connection:
                try:
                    cursor = connection.cursor()
                    cursor.execute(query, parameters)
                    connection.commit()
                except Error as e:
                    connection.rollback()
                    raise e
        except Error as e:
            raise DatabaseException(str(e.args[0]))
