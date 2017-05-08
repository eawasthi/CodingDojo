from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
	def register(self, postData):
		registration_errors=[]

		if not len(postData['firstname']):
			registration_errors.append('First Name is needed')

		if len(postData['firstname']) <2:
			registration_errors.append('First Name Must be two characters or long.')
		
		if not len(postData['lastname']):
			registration_errors.append('Last Name is needed')

		if len(postData['lastname']) <2:
			registration_errors.append('Last Name Must be two characters or long.')

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

		if len(registration_errors) == 0:
      			hashed_pw = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt()) 

		response_to_views={}
		if registration_errors:
			response_to_views['status']=False
			response_to_views['errors']=registration_errors
		else:
			user=self.create(firstname= postData['firstname'], lastname= postData['lastname'],password=hashed_pw, email= postData['email'])
			response_to_views['status']=True
			response_to_views['user']=user		
		return response_to_views	


	def logVal(self, postData):
		login_errors = []
		if not len(postData['email']):
			login_errors.append("Email must not be blank")
		else:
			user2 = self.filter(email = postData['email'])
			user=user2[0]
			if not user:
				login_errors.append("Invalid email")

			if not len(postData['password']):
				login_errors.append("Password must not be blank")
			else:
				password_entered = bcrypt.hashpw(postData['password'].encode(),user.password.encode())
				if password_entered != user.password:
					login_errors.append("Incorrect password")
		if len(login_errors) > 0:
			return (False, login_errors)
		else:
			return (True, user)

class Users(models.Model):
	firstname = models.CharField(max_length = 45)
	lastname= models.CharField(max_length = 45)
	email = models.CharField(max_length = 45)
	password = models.CharField(max_length = 45)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	run = UserManager()

class Secrets(models.Model):
	Secret = models.TextField(max_length = 1000)
	created_at = models.DateTimeField(auto_now_add = True)
	fusers=models.ForeignKey(Users)
	mlikes = models.ManyToManyField(Users, related_name="rlikes")
	
		
