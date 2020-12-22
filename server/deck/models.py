from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Deck(models.Model):
    deck_name = models.CharField(max_length=50)
    deck_description = models.CharField(max_length=500, blank=True)


class UserDeck(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, db_column='user_id')
    deck_id = models.ForeignKey(Deck, on_delete=models.SET_NULL, null=True, db_column='deck_id')
    date_created = models.DateTimeField(null=True)
