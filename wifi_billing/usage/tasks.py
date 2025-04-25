from celery import shared_task
from packages.models import UserPackage # Corrected import
from .models import UsageLog

@shared_task
def log_usage(user_package_id, bytes_used):
    user_package = UserPackage.objects.get(id=user_package_id)
    UsageLog.objects.create(
        user_package=user_package,
        bytes_used=bytes_used
    )
    user_package.bytes_used += bytes_used
    user_package.save()
