from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet

# URLs for Transactions API. Payment history at users’ fingertips! – Me
router = DefaultRouter()
router.register(r'', TransactionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
