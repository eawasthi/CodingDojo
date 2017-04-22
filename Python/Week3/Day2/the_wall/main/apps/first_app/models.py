# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class User(models.Model):
	#  column_name = models.Column_Type(optional_params)
	first_name = models.CharField(max_length = 45)
	last_name = models.CharField(max_length = 45)
	email = models.CharField(max_length = 45)
	password = models.CharField(max_length = 45)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)


class Messege(models.Model):
	user_id = models.ForeignKey(User)
	messege= models.TextField(max_length = 1000)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)



class Comment(models.Model):
	user_id = models.ForeignKey(User)
	messege_id = models.ForeignKey(Messege)
	comment= models.TextField(max_length = 1000)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

