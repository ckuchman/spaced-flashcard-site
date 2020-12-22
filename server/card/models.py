from django.db import models
from deck.models import UserDeck


# Create your models here.
class Card(models.Model):
    user_deck_id = models.ForeignKey(UserDeck, on_delete=models.SET_NULL, null=True, db_column='user_deck_id')
    question = models.CharField(max_length=500)
    answer = models.CharField(max_length=500)
    next_time_to_show = models.DateTimeField()
