from django.shortcuts import render, redirect
from .models import User

def index(request):
	user= User.objects.validate("Ekta")
	return render(request,'first_app/index.html')


def success(request):
	if request.method == 'POST':
		print request.POST
		User.objects.create(username= request.POST['username'])
		test=User.objects.all()
		print test
		context = {
		'all_usernames': test
		}
		return render(request, 'first_app/success.html', context)	
	else: 
		return redirect('/')
