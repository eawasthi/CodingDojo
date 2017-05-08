from __future__ import unicode_literals
from django.db import models
import re
import bcrypt
# datetime import datetime, date
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
	def register(self, postData):
		registration_errors=[]

		if not len(postData['firstname']):
			registration_errors.append('First Name is needed')

		if len(postData['firstname']) <2:
			registration_errors.append('First Name Must be two characters or long.')

		if len(Users.run.filter(email=postData['email'])) > 0:
      			registration_errors.append("Email Address already taken!")

		if not len(postData['email']):
			registration_errors.append('Email Name is needed')

		elif not EMAIL_REGEX.match(postData['email']):
			registration_errors.append('Email must be Valid')

		if len(postData['password']) <1:
			registration_errors.append('Your password cannot be empty')

		if len(postData['password']) <8:
			registration_errors.append('Your password must be 8 or more characters long')

		if len(postData['confirmpass']) < 1:
			registration_errors.append('Your password cannot be empty')

		if postData['password'] != postData['confirmpass']:
			registration_errors.append("Password must match password confirmation") 

		if len(postData['dob']) < 1:
			registration_errors.append('Your Date of Birth cannot be empty')

		if len(registration_errors) == 0:
      			hashed_pw = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt()) 

		response_to_views={}
		if registration_errors:
			response_to_views['status']=False
			response_to_views['errors']=registration_errors
		else:
			user=self.create(firstname= postData['firstname'],password=hashed_pw, email= postData['email'], dob= postData['dob'])
			response_to_views['status']=True
			response_to_views['user']=user		
		return response_to_views	


	def login1(self, postData):
		login_errors = []
		if not len(postData['email']):
			login_errors.append('Please enter a email!')
		else:
			db_email1=self.filter(email=postData['email'])
			db_email=db_email1[0]
			if not db_email:
				login_errors.append('Please register before you login')
			if not len(postData['password']):
				login_errors.append('Please enter a password!')

			hashed_pw = bcrypt.hashpw(postData['password'].encode(), db_email.password.encode())
			if hashed_pw!=db_email1[0].password:
				login_errors.append('Please enter a right password!')

		response={}
		if login_errors:
			response['status']=False
			response['errors']=login_errors
		else:
			response['status']=True
			response['db_email']=db_email
		return response



class AppoitmentsManager(models.Manager):
	def addAppoitment(self, postData,id,date,time):
		appoitment_errors= []
		if not len(postData['date1']):
			appoitment_errors.append('Please provide Date.')

		if str(date) > str(postData['date1']):
			appoitment_errors.append('Date cant be in past.')

		if not len(postData['time1']):
			appoitment_errors.append('Please provide Time.')

		if str(time) > str(postData['time1']):
			appoitment_errors.append('Time cant be in past.')

		if not len(postData['tasks']):
			appoitment_errors.append('Please provide Task.')

		response_to_views={}
		if appoitment_errors:
			response_to_views['status']=False
			response_to_views['errors']=appoitment_errors
		else:
			user=self.create(tasks=postData['tasks'],time=postData['time1'], date=postData['date1'], fusers_id= id, status= "Pending")
			response_to_views['status']=True
			response_to_views['user']=user
			print user.tasks
		return response_to_views

	def update1(self, postData, date1, time1, id_from_html):
		update_errors=[]
		if not len(postData['tasks']):
			update_errors.append("Please provide Task!")

		if not len(postData['status']):
			update_errors.append("Please provide Status!")

		if not len(postData['date']):
			update_errors.append("Please provide Date!")

		if str(date1) > str(postData['date']):
			update_errors.append('Date cant be in past')

		if not len(postData['time']):
			update_errors.append("Please provide Time!")

		if str(time1) > str(postData['time']):
			update_errors.append('Time cant be in past.')

		response_to_views={}
		if update_errors:
			response_to_views['status']= False
			response_to_views['errors']= update_errors
		else:
			appoitments=self.filter(id=id_from_html).update(tasks=postData['tasks'], status=postData['status'], date=postData['date'], time=postData['time'])
			response_to_views['status']= True
			response_to_views['appoitments']= appoitments
		return response_to_views


class Users(models.Model):
	firstname = models.CharField(max_length = 45)
	email = models.CharField(max_length = 45)
	password = models.CharField(max_length = 45)
	dob= models.DateField(max_length = 8)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	run = UserManager()

class Appoitments(models.Model):
	tasks = models.CharField(max_length = 45)
	time = models.TimeField(auto_now_add = False)
	status = models.CharField(max_length = 45)
	date=models.DateField(auto_now_add = False)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	fusers=models.ForeignKey(Users)
	run1=AppoitmentsManager()








