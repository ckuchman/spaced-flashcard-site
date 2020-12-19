from deck.models import Deck, UserDeck
from rest_framework import serializers


class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = ['id', 'deck_name', 'deck_description']


class UserDeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDeck
        fields = ['id', 'user_id', 'deck_id']
