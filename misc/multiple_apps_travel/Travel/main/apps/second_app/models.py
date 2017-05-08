from __future__ import unicode_literals
from django.db import models
from ..first_app.models import Users
from datetime import datetime

class TravelplanManager(models.Manager):
	def addtrips(self, postData,id,today):
		trip_errors= []
		if not len(postData['destination']):
			trip_errors.append('Please enter your destination.')

		if not len(postData['description']):
			trip_errors.append('Please enter your description.')

		if not len(postData['tsd']):
			trip_errors.append('Please enter your travel date from.')

		if str(today) > str(postData['tsd']):
			trip_errors.append('Travel cant be in past.')

		if not len(postData['ted']):
			trip_errors.append('Please enter your travel date to.')

		if str(today) > str(postData['ted']):
			trip_errors.append('Travel cant be in past.')

		if str(postData['tsd']) > str(postData['ted']):
			trip_errors.append('Travel cant end before starting, you got to be kidding here bro!!!')

		response={}
		if trip_errors:
			response['status']=False
			response['errors']=trip_errors
		else:
			destination=self.create(destination=postData['destination'],description=postData['description'],tsd=postData['tsd'], ted=postData['ted'],fusers_id=id)
			response['status']=True
			response['user']=destination
		return response

class Travelplan(models.Model):
	destination = models.CharField(max_length = 45)
	description = models.CharField(max_length = 1000)
	tsd = models.DateField(auto_now_add = False)
	ted = models.DateField(auto_now_add = False)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	fusers=models.ForeignKey(Users)
	joiningTable=models.ManyToManyField(Users, related_name="joining")
	run1=TravelplanManager()