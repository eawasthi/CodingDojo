# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class UserManager(models.Manager):
	def validateUser(self, postData):
		validation_errors=[]

		
		if not len(postData['username']):
			validation_errors.append('Username is needed')


		response_to_views={}
		if validation_errors:
			response_to_views['status']=False
			response_to_views['errors']=validation_errors
		else:
			user=self.create(username= postData['username'])
			response_to_views['status']=True
			response_to_views['user']=user

		return response_to_views

class User(models.Model):
	#  column_name = models.Column_Type(optional_params)
	username = models.CharField(max_length = 45)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

	run = UserManager()