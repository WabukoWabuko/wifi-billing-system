from django.db import models
from django.contrib.auth.models import AbstractUser

# I’m defining the User model for our system. This will handle users, admins, and resellers! – Me
class User(AbstractUser):
    phone = models.CharField(max_length=15, blank=True, null=True)
    role = models.CharField(max_length=20, choices=[('user', 'User'), ('admin', 'Admin'), ('reseller', 'Reseller')])
    mac_address = models.CharField(max_length=17, blank=True, null=True)
    status = models.CharField(max_length=20, choices=[('active', 'Active'), ('expired', 'Expired'), ('offline', 'Offline')], default='offline')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
