# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-21 20:55
from __future__ import unicode_literals

from django.db import migrations
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='register',
            managers=[
                ('run', django.db.models.manager.Manager()),
            ],
        ),
        migrations.RenameField(
            model_name='register',
            old_name='first_name',
            new_name='firstname',
        ),
    ]