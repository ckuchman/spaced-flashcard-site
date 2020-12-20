from deck.models import Deck, UserDeck
from card.models import Card
from rest_framework import status, viewsets
from rest_framework import permissions

from rest_framework.decorators import action
from rest_framework.response import Response

from deck.serializers import DeckSerializer, UserDeckSerializer
from card.serializers import CardSerializer


# Create your views here.
class DeckViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows decks to be viewed or edited.
    """
    queryset = Deck.objects.all().order_by('-id')
    serializer_class = DeckSerializer
    permission_classes = [permissions.IsAuthenticated]


class UserDeckViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user decks to be viewed or edited.
    """
    queryset = UserDeck.objects.all().order_by('-id')
    serializer_class = UserDeckSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(methods=['get'], detail=False)
    def user_list(self, request):

        if 'user' not in request.data:
            return Response({'error': 'must pass id value'}, status=status.HTTP_400_BAD_REQUEST)

        user_decks = UserDeck.objects.all().filter(user_id__exact=request.data['user'])
        serializer = UserDeckSerializer(user_decks, many=True)

        return Response(serializer.data)

    @action(methods=['get'], detail=False)
    def card_list(self, request):

        if 'userdeck' not in request.data:
            return Response({'error': 'must pass id value'}, status=status.HTTP_400_BAD_REQUEST)

        # user_deck = UserDeck.objects.get(pk=request.data['userdeck'])
        # deck_id = user_deck.deck_id
        cards = Card.objects.all().filter(user_deck_id__exact=request.data['userdeck'])
        serializer = CardSerializer(cards, many=True)

        return Response(serializer.data)
