from django.db import models
from users.models import User

# Usage logs to track how much data users are consuming. This is key! – Me
class UsageLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    upload = models.DecimalField(max_digits=10, decimal_places=2)
    download = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.created_at}"
