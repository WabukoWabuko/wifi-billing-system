# users/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone = models.CharField(max_length=15)
    user_type = models.CharField(max_length=10, choices=[('PPPoE', 'PPPoE'), ('Hotspot', 'Hotspot')])
    status = models.CharField(max_length=10, choices=[('Active', 'Active'), ('Expired', 'Expired')], default='Active')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
