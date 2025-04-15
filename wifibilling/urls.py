# wifibilling/urls.py

from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="WiFi Billing System API",
        default_version='v1',
        description="API for managing WiFi billing, users, and network stats",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.authtoken')),
    path('api/users/', include('users.urls')),
    path('api/plans/', include('plans.urls')),
    path('api/transactions/', include('transactions.urls')),
    path('api/usage/', include('usage.urls')),
    path('api/tickets/', include('tickets.urls')),
    path('api/notifications/', include('notifications.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
