from django.conf.urls import url
from . import views         

urlpatterns = [
	url(r'^$', views.index),
	url(r'^login$', views.login),
	url(r'^create$', views.addappoitments),
	url(r'^register$', views.register),
	url(r'^appoitments$', views.appoitments),
	url(r'^logout$', views.logout),
	url(r'^delete/(?P<id>\d+)$', views.delete),
	url(r'^edit/(?P<id>\d+)$', views.edit),
	url(r'^update/(?P<id>\d+)$', views.update),
]