from django.shortcuts import render, redirect

def index(request):
	return render(request,'first_app/index.html')

def test(request):
	return render(request,'first_app/allninjas.html')

def ninjas(request, color):
	context = {
		"color" : color  
	}
	return render(request,'first_app/ninjas.html', context)