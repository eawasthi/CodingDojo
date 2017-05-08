from django.shortcuts import render, redirect
from .models import Users
from django.contrib import messages

def register(request):
	if request.method == 'POST':
		response_from_models = Users.run.register(request.POST)
		if not response_from_models['status']:
			for model_error in response_from_models['errors']:
				messages.error(request, model_error)
				return redirect('/')
		else:
			request.session['name'] = response_from_models['user'].name
			request.session['id'] = response_from_models['user'].id
			return redirect('/travels')

def login(request):
	if request.method == 'POST':
		print "Post method"
		response_from_models1=Users.run.login1(request.POST)
		if not response_from_models1['status']:
			for i in response_from_models1['errors']:
				messages.error(request,i)
				return redirect('/')
		else:
			request.session['name'] = response_from_models1['db_user'].name
			request.session['username'] = response_from_models1['db_user'].username
			request.session['id'] = response_from_models1['db_user'].id
			return redirect('/travels')
	else:
		return redirect('/')

def index(request):
	return render(request, 'first_app/index.html')

