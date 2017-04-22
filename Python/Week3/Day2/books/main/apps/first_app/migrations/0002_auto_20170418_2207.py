# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-18 22:07
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='category',
            field=models.CharField(default='a book', max_length=45),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='book',
            name='in_print',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='book',
            name='published',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
