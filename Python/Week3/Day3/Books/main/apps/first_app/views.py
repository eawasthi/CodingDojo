from django.shortcuts import render, redirect
from .models import Book

def index(request):
	context ={
		'all_books': Book.objects.all()
	}
	return render(request,'first_app/index.html',context)


def create(request):
	if request.method == 'POST':
		book=Book.objects.create(title = request.POST['title'], category = request.POST['category'], author = request.POST['author'])
		print book
	return redirect('/')