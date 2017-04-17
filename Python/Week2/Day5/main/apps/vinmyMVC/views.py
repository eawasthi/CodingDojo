# -*- coding: utf-8 -*-
from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request, 'vinmyMVC/index.html')


def about(request):
	print (request.method)
	return render(request, 'vinmyMVC/about.html')

def project(request):
	print (request.method)
	return render(request, 'vinmyMVC/project.html')
def testi(request):
	print (request.method)
	return render(request, 'vinmyMVC/testi.html')