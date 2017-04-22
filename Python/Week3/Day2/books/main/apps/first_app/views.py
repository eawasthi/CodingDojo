from django.shortcuts import render, redirect
from .models import Book

def index(request):
	Book.objects.create(title="Harry Potter", author="J.K.Rowling",category="funny", in_print= True)
	books = Book.objects.all()
	for book in books:
		print book.title
		print book.author
		print book.published
		print book.category
		print book.in_print
	return render(request,'first_app/index.html')