# tickets/models.py

from django.db import models
from users.models import User

class Ticket(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.CharField(max_length=200)
    description = models.TextField()
    status = models.CharField(max_length=10, choices=[('Open', 'Open'), ('Closed', 'Closed')], default='Open')
    priority = models.CharField(max_length=10, choices=[('Low', 'Low'), ('Medium', 'Medium'), ('High', 'High')], default='Medium')  # Add priority
    resolution = models.TextField(blank=True, null=True)  # Add resolution field
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            models.Index(fields=['user'], name='idx_ticket_user'),
        ]

    def __str__(self):
        return self.subject
