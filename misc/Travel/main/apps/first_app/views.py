from django.shortcuts import render, redirect
from .models import Users, Travelplan
from django.contrib import messages
from datetime import datetime

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


def addplan(request):
	today=datetime.now().date()
	if request.method == 'POST':
		variable=Travelplan.run1.addtrips(request.POST,request.session['id'], today)
		if not variable['status']:
			for i in variable['errors']:
				messages.error(request, i)
				return redirect('/travels/add')
		else:
			return redirect('/travels')

def travels(request):
	if 'id' in request.session:
		context ={
				'name' : request.session['name'],
				'current_user_id' : request.session['id'],
				#'travelplan' : Travelplan.run1.all(),
				'travelplan_me' : Travelplan.run1.filter(fusers=request.session['id'])| Travelplan.run1.filter(joiningTable=request.session['id']),
				'travelplan_other' : Travelplan.run1.all().exclude(fusers=request.session['id']).exclude(joiningTable=request.session['id']),
				'today':datetime.now().date()
		}
		return render(request, 'first_app/travels.html',context)
	else:
		return redirect('/')


def add(request):
	if 'id' in request.session:
		context = {
				'otheruser1' :  Travelplan.run1.all(),
		}
		return render(request, 'first_app/add.html')
	else:
		return redirect('/')

def destination(request,id):
	if 'id' in request.session:
		context = {
			'otheruser1' :  Travelplan.run1.filter(id =id),
			'joininguser' : Travelplan.run1.filter(joiningTable=id),
		}
		return render(request, 'first_app/destination.html', context)
	else:
		return redirect('/')

def joiningtable(request,id):
	this_users=Users.run.get(id=request.session['id'])
	this_destination=Travelplan.run1.get(id=id)
	this_destination.joiningTable.add(this_users)
	return redirect('/travels')


def logout(request):
	if request.method == "GET":
		request.session.clear()
	return redirect('/')