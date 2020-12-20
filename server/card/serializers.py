from card.models import Card
from rest_framework import serializers


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'deck_id', 'question', 'answer', 'next_time_to_show']