# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-25 20:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0004_auto_20170425_1929'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appoitments',
            name='date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='appoitments',
            name='time',
            field=models.TimeField(),
        ),
    ]