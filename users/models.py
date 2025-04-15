# users/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone = models.CharField(max_length=15)
    user_type = models.CharField(max_length=10, choices=[('PPPoE', 'PPPoE'), ('Hotspot', 'Hotspot')])
    status = models.CharField(max_length=10, choices=[('Active', 'Active'), ('Expired', 'Expired')], default='Active')
    created_at = models.DateTimeField(auto_now_add=True)

    # Add related_name to avoid clashes
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_groups',  # Unique related name
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions',  # Unique related name
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

    def __str__(self):
        return self.username
