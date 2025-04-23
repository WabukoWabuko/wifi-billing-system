from celery import shared_task
from .models import UsageLog, UserPackage
from django.utils import timezone

# A task to update data usage for users. I’m simulating usage updates here! – Me
@shared_task
def update_data_usage(user_id, upload, download):
    user_package = UserPackage.objects.filter(user_id=user_id).first()
    if user_package:
        user_package.data_used += (upload + download)
        user_package.save()

        UsageLog.objects.create(
            user_id=user_id,
            upload=upload,
            download=download,
            created_at=timezone.now()
        )
    return f"Updated usage for user {user_id}"
