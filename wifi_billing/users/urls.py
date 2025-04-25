from django.urls import path
from . import views

# I’m defining the URLs for the users app! – Me
urlpatterns = [
    path('', views.UserList.as_view(), name='user-list'),
]
