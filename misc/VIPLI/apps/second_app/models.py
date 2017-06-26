from __future__ import unicode_literals
from django.db import models
from ..first_app.models import Users

class WishlistManager(models.Manager):
	def addwishlist(self, postData,id):
		wishlist_errors= []
		if not len(postData['item']):
			wishlist_errors.append('Please enter your item/product.')

		if len(postData['item']) < 3:
			wishlist_errors.append('Your wish list must be three characters or long.')

		response={}
		if wishlist_errors:
			response['status']=False
			response['errors']=wishlist_errors
		else:
			user=self.create(item=postData['item'],fusers_id=id)
			response['status']=True
			response['user']=user
		return response

class Wishlist(models.Model):
	item = models.CharField(max_length = 45)
	created_at = models.DateField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	fusers=models.ForeignKey(Users)
	joiningwish=models.ManyToManyField(Users, related_name="joining")
	run1=WishlistManager()