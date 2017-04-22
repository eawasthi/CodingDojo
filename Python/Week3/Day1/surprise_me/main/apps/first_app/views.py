from django.shortcuts import render, redirect
import random
import string

def index(request):
	return render(request,'first_app/index.html')


def results(request):
	list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
	if request.method == 'POST':
		number=int(request.POST['intake'])
		print number
		i = 0
		r_content="\n"
		while i < number:
			r_number=(random.choice(list))
			r_content += "Item " +  r_number + "\n"
			i=i+1
		print r_content
		context = {
		"ekta":r_content
 		}
	else:
	   return redirect('/')
	return render(request,'first_app/results.html',context)