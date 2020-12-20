from django.db import models
from deck.models import Deck


# Create your models here.
class Card(models.Model):
    deck_id = models.ForeignKey(Deck, on_delete=models.SET_NULL, null=True)
    question = models.CharField(max_length=500)
    answer = models.CharField(max_length=500)
    next_time_to_show = models.DateTimeField()
