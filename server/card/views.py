from card.models import Card
from rest_framework import viewsets
from rest_framework import permissions
from card.serializers import CardSerializer


# Create your views here.
class CardViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows cards to be viewed or edited.
    """
    queryset = Card.objects.all().order_by('-id')
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated]
