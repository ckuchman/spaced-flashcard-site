from deck.models import Deck, UserDeck
from card.models import Card
from rest_framework import status, viewsets
from rest_framework import permissions

from rest_framework.decorators import action
from rest_framework.response import Response

from deck.serializers import DeckSerializer, UserDeckSerializer, UserDeckCreateSerializer
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
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.action == 'create':
            serializer_class = UserDeckCreateSerializer
        else:
            serializer_class = UserDeckSerializer

        return serializer_class

    @action(methods=['get'], detail=False)
    def user_list(self, request):
        print(request.query_params)
        if 'user' not in request.query_params:
            return Response({'error': 'must pass id value'}, status=status.HTTP_400_BAD_REQUEST)

        user_decks = UserDeck.objects.all().filter(user_id__exact=request.query_params.get('user'))
        serializer = UserDeckSerializer(user_decks, many=True)

        return Response(serializer.data)

    @action(methods=['get'], detail=False)
    def card_list(self, request):
        """
        API endpoint that lists the cards associated with userdeck.
        """
        if 'userdeck' not in request.query_params:
            return Response({'error': 'must pass id value'}, status=status.HTTP_400_BAD_REQUEST)

        cards = Card.objects.all().filter(user_deck_id__exact=request.query_params.get('userdeck'))
        serializer = CardSerializer(cards, many=True)

        return Response(serializer.data)
