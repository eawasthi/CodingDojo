# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class UserManager(models.Manager):
	def validateUser(self, postData):
		validation_errors=[]

		if not len(postData['firstname']):
			validation_errors.append('First Name is needed')

		if not len(postData['lastname']):
			validation_errors.append('Last Name is needed')

		if not len(postData['email']):
			validation_errors.append('Email Name is needed')

		if len(postData['password']) < 8:
			validation_errors.append('Your password must be 8 or more characters long')


		if len(postData['confirmpass']) < 8:
			validation_errors.append('Your password must be 8 or more characters long')


		response_to_views={}
		if validation_errors:
			response_to_views['status']=False
			response_to_views['errors']=validation_errors
		else:
			user=self.create(firstname= postData['firstname'])
			response_to_views['status']=True
			response_to_views['user']=user

			
		return response_to_views

class Register(models.Model):
	#  column_name = models.Column_Type(optional_params)
	firstname = models.CharField(max_length = 45)
	lastname= models.CharField(max_length = 45)
	email = models.CharField(max_length = 45)
	password = models.CharField(max_length = 45)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	run = UserManager()


class Books(models.Model):
	title = models.CharField(max_length = 45)
	review = models.TextField(max_length = 1000)
	rating = models.IntegerField()
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

class Author(models.Model):
	authorName = models.CharField(max_length = 45)
	authorAndBook = models.ManyToManyField(Books, related_name="author_related")
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)