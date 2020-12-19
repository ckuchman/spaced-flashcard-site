from deck.models import Deck
from rest_framework import viewsets
from rest_framework import permissions
from deck.serializers import DeckSerializer, UserDeckSerializer


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
