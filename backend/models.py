from django.db import models

# Create your models here.
class LoginModel(models.Model):
    FirstName=models.CharField(max_length=120)
    LastName=models.CharField(max_length=60)
    
