from django.db import models
from users.models import User

# Packages for our WiFi system! Users will subscribe to these. – Me
class Package(models.Model):
    name = models.CharField(max_length=100)
    speed = models.CharField(max_length=20)  # e.g., '15Mbps'
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.IntegerField()  # Duration in days

    def __str__(self):
        return self.name

# This links users to their packages. I’m tracking data usage here too! – Me
class UserPackage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    package = models.ForeignKey(Package, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    expiry_date = models.DateTimeField()
    data_limit = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    data_used = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return f"{self.user.username} - {self.package.name}"
