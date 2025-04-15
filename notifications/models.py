# notifications/models.py

from django.db import models
from users.models import User

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    type = models.CharField(max_length=10, choices=[('Email', 'Email'), ('SMS', 'SMS')])
    status = models.CharField(max_length=10, choices=[('Pending', 'Pending'), ('Sent', 'Sent')], default='Pending')  # Add status
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            models.Index(fields=['user'], name='idx_notification_user'),
        ]

    def __str__(self):
        return f"Notification for {self.user.username}"
