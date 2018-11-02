class DatabaseException(Exception):
    def __init__(self, message: str = 'Exception occured during database operation'):
        self._message = message

    def get_message(self) -> str:
        return self._message
