from django.db import models

class Deck(models.Model):
    deck_name = models.CharField(max_length=50)
    deck_description = models.CharField(max_length=500, blank=True)

class UserDeck(models.Model):
    user_id = models.ForeignKey(models.User, on_delete=models.SET_NULL)
    deck_id = models.ForeignKey(Deck, on_delete=models.SET_NULL)
    date_created = models.DateTimeField()

class Card(models.Model):
    deck_id = models.ForeignKey(Deck, on_delete=models.SET_NULL)
    question = models.CharField(max_length=500)
    answer = models.CharField(max_length=500)
    next_time_to_show = models.DateTimeField()

