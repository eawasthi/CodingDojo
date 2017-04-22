from django.shortcuts import render, HttpResponse,redirect
from .models import Book
from django.contrib import messages
def index(request):
	context ={
		'all_books': Book.run.all() 
	}
	return render(request,'first_app/index.html',context)

def create(request):
	if request.method == 'POST':
		print request.POST
		response_from_models = Book.run.validateBook(request.POST)

		print response_from_models
		if not response_from_models['status']:
			for model_error in response_from_models['errors']:
				messages.error(request, model_error)
		else:
			print response_from_models['book']

	return redirect('/')
		#book=Book.objects.create( title = request.POST['title'],author = request.POST['author'])
		#print book