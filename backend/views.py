from django.shortcuts import render
from rest_framework import status 
from rest_framework.response import Response 
# Create your views here.
from django.http import Http404
from rest_framework.decorators import api_view
from .models import LoginModel
from .serializer import loginSerialiser
@api_view(['POST','GET'])
def loginForm(request):

    if request.method=='GET':
        snippets = LoginModel.objects.all()
        serializer = loginSerialiser(snippets, many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer = loginSerialiser(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
