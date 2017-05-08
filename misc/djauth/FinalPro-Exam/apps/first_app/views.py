from django.shortcuts import render, redirect
from .models import Users, Appoitments
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
			request.session['firstname'] = response_from_models['user'].firstname
			request.session['email'] = response_from_models['user'].email
			request.session['id'] = response_from_models['user'].id
			return redirect('/appoitments')

def login(request):
	if request.method == 'POST':
		login_1=Users.run.login1(request.POST)
		if not login_1['status']:
			for i in login_1['errors']:
				messages.error(request,i)
				return redirect('/')
		else:
			request.session['firstname'] = login_1['db_email'].firstname
			request.session['email'] = login_1['db_email'].email
			request.session['id'] = login_1['db_email'].id
			return redirect('/appoitments')


def addappoitments(request):
	date=datetime.now().date()
	time1=datetime.now().time()
	time=time1.replace(microsecond=0, second=0)
	if request.method == 'POST':
		variable1=Appoitments.run1.addAppoitment(request.POST,request.session['id'],date,time)
		if not variable1['status']:
			for i in variable1['errors']:
				messages.error(request, i)
				return redirect('/appoitments')
		else:
			return redirect('/appoitments')

def index(request):
		return render(request,'first_app/index.html')


def appoitments(request):
	context ={
			'date':datetime.now().date(),
			'firstname': request.session['firstname'],
			'current_user_id': request.session['id'],
			'appoitments' : Appoitments.run1.filter(fusers_id=request.session['id']).order_by('time', 'date')
			# 'appoitments' : Appoitments.run1.all()
	}
	return render(request,'first_app/appoitments.html', context)

def delete(request,id):
	Appoitments.run1.get(id=id).delete()
	return redirect('/appoitments')



def edit(request,id):
	if 'id' in request.session:
		update=Appoitments.run1.get(id=id)
		print type(update.time)
		context = {
			'updateq' : update,
		}
		return render(request, 'first_app/update.html', context)
	else:
		return redirect('/')


def update(request,id):
	id_from_html= id
	date1=datetime.now().date()
	time3=datetime.now().time()
	time1=time3.replace(microsecond=0, second=0)
	if request.method == 'POST':
		variable2=Appoitments.run1.update1(request.POST, date1, time1, id_from_html)
		if not variable2['status']:
			for i in variable2['errors']:
				messages.error(request, i)
				var3="/edit/" + id_from_html
				return redirect(var3)
		else:
			return redirect('/appoitments')
	return redirect('/appoitments')
	
def logout(request):
    if request.method == "GET":
    	request.session.clear()
    return redirect('/')