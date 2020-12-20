from card.models import Card
from rest_framework import viewsets
from rest_framework import permissions
from card.serializers import CardSerializer, CardCreateSerializer


# Create your views here.
class CardViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows cards to be viewed or edited.
    """
    queryset = Card.objects.all().order_by('-id')
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.action == 'create':
            serializer_class = CardCreateSerializer
        else:
            serializer_class = CardSerializer

        return serializer_class

