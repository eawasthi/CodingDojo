from django.shortcuts import render, redirect
from .models import Register,Books,Author
from django.contrib import messages
# from django.db.models import Count

def index(request):
	return render(request,'first_app/index.html')


def display(request):
	if request.method == 'POST':
		response_from_models = Register.run.validateUser(request.POST)
		if not response_from_models['status']:
			for model_error in response_from_models['errors']:
				messages.error(request, model_error)
				return redirect('/')
		else:
			request.session['firstname'] = response_from_models['user'].firstname
			request.session['id'] = response_from_models['user'].id
			return redirect('/books')



def books(request):
	context ={
			'vip': request.session['firstname']

		}
	return render(request,'first_app/books.html', context)




def add(request):
	context ={
		"authorsList" : Author.objects.all()
	}
	return render(request, 'first_app/add.html', context)



def addbook(request , id):
	if request.method == 'POST':
		book=Books.objects.create(title = request.POST['title'], review=request.POST['review'], rating=request.POST['rating'])
		author=Author.objects.create(authorName=request.POST['addnewauthor'])
		context ={
			"books" : book,
			"authors" : author
		}
		return render(request, 'first_app/bookreview.html', context)






def logout(request):
	request.session.clear()
	return redirect('/')

def cleardata(request):
	Register.run.all().delete(),
	Books.objects.all().delete(),
	Author.objects.all().delete()
	return redirect('/')