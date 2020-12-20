from deck.models import Deck
from rest_framework import viewsets
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
    queryset = Deck.objects.all().order_by('-id')
    serializer_class = UserDeckSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(methods=['get'], detail=True)
    def card_list(self, request, pk=None):
        user_deck = self.get_object()
        # serializer_class = CardSerializer

        return Response({'deck': 'tester'})
