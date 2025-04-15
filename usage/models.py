# usage/models.py

from django.db import models
from users.models import User

class Usage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    data_used = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)  # In MB
    data_limit = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)  # In MB
    session_start = models.DateTimeField(null=True, blank=True)
    session_end = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=10, choices=[('Active', 'Active'), ('Inactive', 'Inactive')], default='Active')  # Add session status

    class Meta:
        indexes = [
            models.Index(fields=['user'], name='idx_usage_user'),
        ]

    def __str__(self):
        return f"Usage for {self.user.username}"
