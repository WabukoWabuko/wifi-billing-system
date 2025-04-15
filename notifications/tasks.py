# notifications/tasks.py

from celery import shared_task
from .models import Notification

@shared_task
def send_notification(notification_id):
    notification = Notification.objects.get(id=notification_id)
    print(f"Sending {notification.type} to {notification.user.username}: {notification.message}")
    return True
