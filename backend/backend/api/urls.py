from django.urls import path
from .views import ApartmentsList, ContactView
from . import views

urlpatterns = [
    path("apartments/", ApartmentsList.as_view(), name="apartments-list"),
    path("contact/", ContactView.as_view(), name="contact"),
    path('my-form-page/', views.my_page, name='my_form_page'),
]
