# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Product(models.Model):
	#  column_name = models.Column_Type(optional_params)
	name = models.CharField(max_length = 45)
	description = models.TextField(max_length = 1000)
	weight = models.IntegerField()
	price = models.IntegerField()
	cost = models.IntegerField()
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)


   