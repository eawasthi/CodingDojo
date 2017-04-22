# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class UserManager(models.Manager):
	def validateUser(self, postData):
		errors = []
		if not len(postdata['username']):
			errors.append('username is required!')
		response_to_views= {}
		if errors:
			response_to_views['status'] = False
			response_to_views['errors'] = errors
		else:
			name = self.create(username = postData['username'])
			response_to_views['status'] = True
			response_to_views['name'] = name
		return response_to_views

class User(models.Model):
	#  column_name = models.Column_Type(optional_params)
	username = models.CharField(max_length = 45)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

	objects = UserManager()