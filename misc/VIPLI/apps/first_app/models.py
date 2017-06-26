from __future__ import unicode_literals
from django.db import models
import re
import bcrypt
# datetime import datetime, date
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
	def register(self, postData):
		# print date1
		registration_errors=[]

		if not len(postData['name']):
			registration_errors.append('Name is needed')

		if len(postData['name']) <3:
			registration_errors.append('Name Must be three characters or long.')


		if not len(postData['username']):
			registration_errors.append('Username is needed')

		if len(postData['username'])<3:
			registration_errors.append('Username has to be three characters or long')

		if Users.run.filter(username=postData['username']):
      			registration_errors.append("Username already taken!")

		if len(postData['password']) <1:
			registration_errors.append('Your password cannot be empty')
			

		if len(postData['password']) <8:
			registration_errors.append('Your password must be 8 or more characters long')

		if len(postData['confirmpass']) < 1:
			registration_errors.append('Your password cannot be empty')

		if postData['password'] != postData['confirmpass']:
			registration_errors.append("Password must match password confirmation") 

		if len(registration_errors) == 0:
      			hashed_pw = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())


		# if len(postData['datehired'])<8:
		# 	registration_errors.append('Date cannot be empty.')

		# if (postData['datehired']) > str(date1):
		# 	registration_errors.append('Date cannot be in future.')


		response_to_views={}
		if registration_errors:
			response_to_views['status']=False
			response_to_views['errors']=registration_errors
		else:
			user=self.create(name= postData['name'], username= postData['username'], password=hashed_pw)
			response_to_views['status']=True
			response_to_views['user']=user		
		return response_to_views	


	def login1(self, postData):
		login_errors = []
		if not len(postData['username']):
			login_errors.append('Please enter a username!')

		if len(postData['username'])<3:
			login_errors.append('Username has to be three characters or long')
		else:
			if not len(self.filter(username=postData['username'])):
				login_errors.append('Please register before you login')
			else:
				db_user1=self.filter(username=postData['username'])
				db_user=db_user1[0]			

				if not len(postData['password']):
					login_errors.append('Please enter a password!')

				hashed_pw = bcrypt.hashpw(postData['password'].encode(), db_user.password.encode())
				if hashed_pw!=db_user.password:
					login_errors.append('Please enter a right password!')

		response={}
		if login_errors:
			response['status']=False
			response['errors']=login_errors
		else:
			response['status']=True
			response['db_user']=db_user
		return response

		
class Users(models.Model):
	name = models.CharField(max_length = 45)
	username = models.CharField(max_length = 45)
	password = models.CharField(max_length = 45)
	datehired = models.DateField(max_length =8)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	run = UserManager()