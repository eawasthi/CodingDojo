# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class BookManager(models.Manager):
	def validateBook(self, postData):
		validation_errors=[]
		print "ektavipul"
		
		if not len(postData['title']):
			validation_errors.append('title is needed')


		response_to_views={}
		if validation_errors:
			response_to_views['status']=False
			response_to_views['errors']=validation_errors
		else:
			book=self.create(title = postData['title'],author = postData['author'])
			response_to_views['status']=True
			response_to_views['book']=book

		return response_to_views

# Create your models here.
class Book(models.Model):
	title = models.CharField(max_length = 45)
	author = models.CharField(max_length = 45) 
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

	run=BookManager()