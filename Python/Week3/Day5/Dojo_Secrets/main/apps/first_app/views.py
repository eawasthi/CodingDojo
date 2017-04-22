from django.shortcuts import render, redirect
from .models import Register, Secretbox
from django.contrib import messages

def index(request):
	return render(request,'first_app/index.html')

def secrets(request):
	if request.method == 'POST':
		response_from_models = Register.run.validateUser(request.POST)
		if not response_from_models['status']:
			for model_error in response_from_models['errors']:
				messages.error(request, model_error)
				return redirect('/')
		else:
			request.session['firstname'] = response_from_models['user'].firstname
			request.session['id'] = response_from_models['user'].id
			return redirect('/display')

	return redirect('/display')
	
def create(request):
	if request.method == 'POST':
		Secretbox.objects.create(secret = request.POST['descripiton'], register_id=request.session['id'])
		users = Register.run.all()
	return redirect('/display')

def display(request):
	print request.session['id']
	context ={
			'all_posts': Secretbox.objects.all().order_by('-id'),
			'firstname': request.session['firstname'],
			'current_user_id': request.session['id']
		}
	return render(request,'first_app/secrets.html', context)

def delete(request,id):
	Secretbox.objects.get(id=id).delete()
	return redirect('/display')
