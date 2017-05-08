from django.shortcuts import render, redirect
from .models import Users,Books,Author
from django.contrib import messages
from django.db.models import Count

def index(request):
	return render(request,'first_app/index.html')

def check(request):
	if request.method == 'POST':
		response_from_models = Users.run.validateUser(request.POST)
		if not response_from_models['status']:
			for model_error in response_from_models['errors']:
				messages.error(request, model_error)
				return redirect('/')
		else:
			request.session['firstname'] = response_from_models['user'].firstname
			request.session['id'] = response_from_models['user'].id
			return redirect('/displayBooks')
	return redirect('/displayBooks')


def displayBooks(request):
	recentReviews= Books.objects.exclude(review=None).order_by('-id')[:3]
	context ={
			'firstname': request.session['firstname'],
			'current_user_id': request.session['id'],
			'reviews': recentReviews,
			'allAuthors':Author.objects.all()
		}
	return render(request,'first_app/allBooks.html', context)



def addBook(request):
	context ={
			'authorList': Author.objects.all(),
			#'book_id': request.session['book_id']
		}
	return render(request, 'first_app/newBook.html',context)


def addBookstoDB(request):
	if request.method == 'POST':
		oldauthor=request.POST['oldauthor']
		book=Books.objects.create(title = request.POST['title'], review=request.POST['review'], rating=request.POST['rating'], fUsers_id= request.session['id'])
		if len(request.POST['addnewauthor']) > 1:
			author=Author.objects.create(authorName=request.POST['addnewauthor'])
			print author
		else:
			author=Author.objects.get(authorName=oldauthor)
		this_book=Books.objects.get(id=book.id)
		this_author=Author.objects.get(id=author.id)
		this_author.authorAndBook.add(this_book)
		request.session['bookTitle'] = book.title
		request.session['authorName'] = author.authorName
		return redirect('/goToEachBook')



def goToEachBook(request):
	context ={
	'currentBook': request.session['bookTitle'],
	'currentAuthor':request.session['authorName'],
	'allBooks': Books.objects.all(),
	'allAuthors':Author.objects.all(),
	'current_user_id': request.session['id'],
	#'bookid1': request.session['book_id'],
	}
	return render(request, 'first_app/eachBook.html',context)


def iUser(request,id):
	
	iUser=Users.run.get(id=id)
	reviews=Books.objects.get()
	context={
	'iUser':iUser
	}
	print iUser.lastname
	return render(request, 'first_app/users.html',context)



def delete(request,id):
	Books.objects.filter(id=id).update(review="")
	return redirect('/goToEachBook')

def logout(request):
	request.session.clear()
	return redirect('/')


def clearData(request):
	Users.run.all().delete(),
	Books.objects.all().delete(),
	Author.objects.all().delete()
	return redirect('/')