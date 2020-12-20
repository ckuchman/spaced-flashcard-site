from card.models import Card
from rest_framework import serializers


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'
        depth = 1


class CardCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'user_deck_id', 'question', 'answer', 'next_time_to_show']
