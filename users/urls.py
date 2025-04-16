# users/urls.py

from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import UserViewSet
from .views_auth import CustomTokenObtainPairView, RegisterView

router = DefaultRouter()
router.register(r'', UserViewSet, basename='user')

urlpatterns = [
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='register'),
] + router.urls
