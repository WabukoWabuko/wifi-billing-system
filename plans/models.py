# plans/models.py

from django.db import models

class Plan(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    speed = models.CharField(max_length=50)
    duration = models.CharField(max_length=50)

    def __str__(self):
        return self.name
