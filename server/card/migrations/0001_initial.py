# Generated by Django 3.1.4 on 2020-12-19 23:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('deck', '0002_userdeck'),
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=500)),
                ('answer', models.CharField(max_length=500)),
                ('next_time_to_show', models.DateTimeField()),
                ('deck_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='deck.deck')),
            ],
        ),
    ]