# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-28 19:57
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0004_auto_20170428_0551'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='travelplan',
            name='fusers',
        ),
        migrations.RemoveField(
            model_name='travelplan',
            name='joiningTable',
        ),
        migrations.DeleteModel(
            name='Travelplan',
        ),
    ]