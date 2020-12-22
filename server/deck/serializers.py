from deck.models import Deck, UserDeck
from rest_framework import serializers

from card.serializers import CardSerializer


class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = ['id', 'deck_name', 'deck_description']


class UserDeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDeck
        fields = '__all__'
        depth = 1


class UserDeckCreateSerializer(serializers.ModelSerializer):
    cards = CardSerializer(many=True, read_only=True)

    class Meta:
        model = UserDeck
        fields = ['id', 'user_id', 'deck_id', 'cards']
