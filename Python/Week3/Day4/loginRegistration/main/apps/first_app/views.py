from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages

def index(request):
	return render(request,'first_app/index.html')


def success(request):
	if request.method == 'POST':
		print request.POST
		response_from_models = User.run.validateUser(request.POST)

		request.session['username'] = response_from_models['user'].username
		if not response_from_models['status']:
			for model_error in response_from_models['errors']:
				messages.error(request, model_error)
				return redirect('/')
		else:
			 return redirect('/display')
	
def display(request):
	users = User.run.all()
	context ={
		'all_users': User.run.all(),
		'username': request.session['username']
	}
	return render(request, 'first_app/success.html', context)