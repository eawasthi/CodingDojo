from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^addwishlist$', views.addwishlist),
	url(r'^dashboard$', views.dashboard , name='home'),
	url(r'^wish_items/create$', views.create),
	url(r'^joiningwish/(?P<id>\d+)$', views.joiningwish),
	url(r'^delete/(?P<id>\d+)$', views.delete),
	url(r'^remove/(?P<id>\d+)$', views.remove),
	url(r'^item/(?P<id>\d+)$', views.item),
	url(r'^logout$', views.logout),
]

