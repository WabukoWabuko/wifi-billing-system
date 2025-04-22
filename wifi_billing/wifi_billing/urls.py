from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="WiFi Billing API",
        default_version='v1',
        description="API for the massive WiFi billing system, starting with Kenya! – Me",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/packages/', include('packages.urls')),
    path('api/transactions/', include('transactions.urls')),
    path('api/usage/', include('usage.urls')),
    path('api/notifications/', include('notifications.urls')),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
