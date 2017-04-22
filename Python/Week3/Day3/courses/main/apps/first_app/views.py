from django.shortcuts import render, redirect
from .models import Course


def index(request):
	context ={
		'all_courses': Course.objects.all()
	}
	return render(request,'first_app/index.html',context)


def create(request):
	if request.method == 'POST':
		course=Course.objects.create(name = request.POST['name'], description = request.POST['description'])
		print course
	return redirect('/')


def remove(request, id):
	courses = Course.objects.get(id=id)
	context = {
		'courses': courses
	}
	return render(request, 'first_app/destroy.html', context)

def delete(request, id):
	if request.method == 'POST':
		Course.objects.get(id =id).delete()
		return redirect('/')
