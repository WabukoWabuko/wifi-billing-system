from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsageLogViewSet

# URLs for Usage Logs API. Data usage tracking is a go! – Me
router = DefaultRouter()
router.register(r'', UsageLogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
