from django.shortcuts import render, redirect
from .models import Users, Secrets
from django.contrib import messages
from django.db.models import Count
def index(request):
	return render(request,'first_app/index.html')

def register(request):
	if request.method == 'POST':
		response_from_models = Users.run.register(request.POST)
		if not response_from_models['status']:
			for model_error in response_from_models['errors']:
				messages.error(request, model_error)
				return redirect('/')
		else:
			request.session['firstname'] = response_from_models['user'].firstname
			request.session['lastname'] = response_from_models['user'].lastname
			request.session['email'] = response_from_models['user'].email
			request.session['id'] = response_from_models['user'].id
			return redirect('/secrets')


def login(request):
    if request.method == "POST":
        validation = Users.run.logVal(request.POST)

        if validation[0]:
            request.session['firstname']=validation[1].firstname
            request.session['lastname']=validation[1].lastname
            request.session['email'] = validation[1].email
            request.session['id'] = validation[1].id
            return redirect('/secrets')
        else:
            for error in validation[1]:
                messages.error(request, error)
            return redirect('/')

def secrets(request):
	context ={
			'firstname': request.session['firstname'],
			'lastname': request.session['lastname'],
			'email': request.session['email'],
			'current_user_id': request.session['id'],
			'all_secrets' : Secrets.objects.all().annotate(num_likes=Count('mlikes')).order_by('-id','-num_likes')

		}
	return render(request,'first_app/secrets.html', context)


def create(request):
		if request.method == 'POST':
			current_post=Secrets.objects.create(Secret= request.POST['secrets'], fusers_id=request.session['id'])
			users = Users.run.all()
		return redirect('/secrets')


def delete(request,id):
	Secrets.objects.get(id=id).delete()
		#toDelete = Secrets.objects.filter(fusers=request.session['id']).delete()
	return redirect('/secrets')


def popular(request):
	context ={
		'firstname': request.session['firstname'],
		'lastname': request.session['lastname'],
		'email': request.session['email'],
		'current_user_id': request.session['id'],
		'all_secrets' : Secrets.objects.all().annotate(num_likes=Count('mlikes')).order_by('-num_likes')[:5]

	}
	return render(request,'first_app/secrets.html', context)

def like(request,id):
	this_users = Users.run.get(id=request.session['id'])
	this_secrets = Secrets.objects.get(id=id)
	this_secrets.mlikes.add(this_users)
	return redirect('/secrets')

def logout(request):
	request.session.clear()
	return redirect('/')