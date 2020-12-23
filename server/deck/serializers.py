from rest_framework import serializers

from deck.models import Deck, UserDeck
from django.contrib.auth.models import User

from card.serializers import CardSerializer


class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = ['id', 'deck_name', 'deck_description']


# Serializer that filters what gets passed about the user when wrapped
# in the UserDeck serializer
class UserFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = (
            'password', 'last_login', 'is_superuser', 'user_permissions',
        )


class UserDeckSerializer(serializers.ModelSerializer):
    # Filter out sensitive user information
    user_id = UserFilterSerializer()

    class Meta:
        model = UserDeck
        fields = '__all__'
        depth = 1


# Serializer only for POST creations to minimize information sent back
# and properly populate foreign fields (doen not seem to work with __all__)
class UserDeckCreateSerializer(serializers.ModelSerializer):
    cards = CardSerializer(many=True, read_only=True)

    class Meta:
        model = UserDeck
        fields = ['id', 'user_id', 'deck_id', 'cards']
