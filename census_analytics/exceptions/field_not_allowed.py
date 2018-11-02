class FieldNotAllowed(Exception):
    def __init__(self, field: str):
        self._field = field

    def get_message(self) -> str:
        return '{} not allowed'.format(self._field)
