from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth import get_user_model

class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('The Username field must be set')
        
        full_name = extra_fields.pop('full_name', None)
        if full_name:
            names = full_name.split(' ', 1)
            extra_fields['first_name'] = names[0]
            extra_fields['last_name'] = names[1] if len(names) > 1 else ''
        
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, password, **extra_fields)

    def get_by_natural_key(self, email):
        return self.get(email=email)

class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    address = models.TextField(blank=True, null=True)
    user_type = models.CharField(max_length=10, choices=[('PPPoE', 'PPPoE'), ('Hotspot', 'Hotspot')])
    status = models.CharField(max_length=10, choices=[('Active', 'Active'), ('Expired', 'Expired')], default='Active')
    active_plan = models.ForeignKey('plans.Plan', on_delete=models.SET_NULL, null=True, blank=True, related_name='users')  # Fixed typo
    created_at = models.DateTimeField(auto_now_add=True)

    # Add related_name to avoid clashes
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_groups',
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'  # Use email for authentication
    REQUIRED_FIELDS = ['username']  # Still require username for superuser creation

    class Meta:
        indexes = [
            models.Index(fields=['username'], name='idx_user_username'),
        ]

    def __str__(self):
        return self.username
