from card.models import Card
from rest_framework import serializers


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'
        depth = 1


# Serializer only for POST creations to minimize information sent back
# and properly populate foreign fields (doen not seem to work with __all__)
class CardCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'user_deck_id', 'question', 'answer', 'next_time_to_show']
