from django.shortcuts import render, redirect

def index(request):
	return render(request,'first_app/index.html')


def test(request, number):
	number1=int(number)
	context = {
		"ekta" : number1  
	}
	return render(request,'first_app/result.html', context)