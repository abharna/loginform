from rest_framework import serializers
from .models import LoginModel

class loginSerialiser(serializers.ModelSerializer):
    class Meta():
        model=LoginModel
        fields=('__all__')