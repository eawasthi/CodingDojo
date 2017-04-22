from django.shortcuts import render, redirect
from .models import Product

def index(request):
	Product.objects.create(name="bottle", description="Hello, I am a water bottle", weight=1, price=2, cost=2)
	products = Product.objects.all()
	for product in products:
		print product.name
		print product.description 
		print product.weight
		print product.price
		print product.cost
	return render(request,'first_app/index.html')