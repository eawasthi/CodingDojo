# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-23 22:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0006_remove_books_fofregister'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Register',
            new_name='User',
        ),
        migrations.RemoveField(
            model_name='author',
            name='authorAndBook',
        ),
        migrations.DeleteModel(
            name='Author',
        ),
        migrations.DeleteModel(
            name='Books',
        ),
    ]