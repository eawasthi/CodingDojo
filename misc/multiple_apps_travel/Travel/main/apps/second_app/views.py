from django.shortcuts import render, redirect
from .models import Travelplan
from ..first_app.models import Users
from django.contrib import messages
from datetime import datetime

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
		return render(request, 'second_app/travels.html',context)
	else:
		return redirect('/')


def add(request):
	if 'id' in request.session:
		context = {
				'otheruser1' :  Travelplan.run1.all(),
		}
		return render(request, 'second_app/add.html', context)
	else:
		return redirect('/')

def destination(request,id):
	if 'id' in request.session:
		context = {
			'otheruser1' :  Travelplan.run1.get(id =id),
		}
		return render(request, 'second_app/destination.html', context)
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

