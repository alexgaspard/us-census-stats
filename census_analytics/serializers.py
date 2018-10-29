from rest_framework import serializers

from census_analytics.models import Statistics


class StatisticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistics
        fields = ('value', 'count', 'average', 'total')
