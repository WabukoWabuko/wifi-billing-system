from django.db import models
from django.contrib.auth.models import AbstractUser

# I’m defining the User model for our system. This will handle users, admins, and resellers! – Me
class User(AbstractUser):
    phone = models.CharField(max_length=15, blank=True, null=True)
    role = models.CharField(max_length=20, choices=[('user', 'User'), ('admin', 'Admin'), ('reseller', 'Reseller')])
    mac_address = models.CharField(max_length=17, blank=True, null=True)
    status = models.CharField(max_length=20, choices=[('active', 'Active'), ('expired', 'Expired'), ('offline', 'Offline')], default='offline')
    created_at = models.DateTimeField(auto_now_add=True)

    # Adding related_name to avoid clashes with auth.User. This should fix the error! – Me
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Unique name to avoid clash
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',  # Unique name to avoid clash
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

    def __str__(self):
        return self.username
