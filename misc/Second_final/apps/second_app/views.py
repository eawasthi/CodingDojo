from django.shortcuts import render, redirect
from .models import Wishlist
from ..first_app.models import Users
from django.contrib import messages

def addwishlist(request):
	if request.method == 'POST':
		addplan_models=Wishlist.run1.addwishlist(request.POST, request.session['id'])
		if not addplan_models['status']:
			for i in addplan_models['errors']:
				messages.error(request, i)
				return redirect('/wish_items/create')
		else:
			return redirect('/dashboard')

def dashboard(request):
	if 'id' in request.session:
		context ={
				'name' : request.session['name'],
				'current_user_id' : request.session['id'],
				'list_me' : Wishlist.run1.filter(fusers=request.session['id'])| Wishlist.run1.filter(joiningwish=request.session['id']).order_by(),
				'other_users' : Wishlist.run1.all().exclude(fusers=request.session['id']).exclude(joiningwish=request.session['id']),
		}
		return render(request, 'second_app/dashboard.html', context)
	else:
		return redirect('/')

def create(request):
	if 'id' in request.session:
		return render(request, 'second_app/wishlist.html')
	else:
		return redirect('/')

def joiningwish(request,id):
	this_users=Users.run.get(id=request.session['id'])
	this_wishlist=Wishlist.run1.get(id=id)
	this_wishlist.joiningwish.add(this_users)
	return redirect('/dashboard')

def delete(request,id):
	Wishlist.run1.get(id=id).delete()
	return redirect('/dashboard')

def remove(request,id):
	this_users=Users.run.get(id=request.session['id'])
	this_wishlist=Wishlist.run1.get(id=id)
	this_wishlist.joiningwish.remove(this_users)
	return redirect('/dashboard')

def item(request,id):
	if 'id' in request.session:
		context = {
			'items':Wishlist.run1.get(id=id)
		}
		return render(request, 'second_app/item.html',context)
	else:
		return redirect('/')

def logout(request):
	if request.method == 'GET':
		request.session.clear()
	return redirect('/')

def home(request):
    return render(request,'second_app/dashboard.html')