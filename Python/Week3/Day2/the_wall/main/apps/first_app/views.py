from django.shortcuts import render, redirect
from .models import User, Messege, Comment

def index(request):
	User.objects.create(first_name="Ekta",last_name="Awasthi", email="ekta@gmail.com", password="123123123")
	users= User.objects.all()
	print users
	return render(request,'first_app/index.html')
