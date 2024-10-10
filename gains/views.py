from rest_framework.views import APIView,View
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json

# Registration View
class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        category = request.data.get('category')

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create user with category and email
        user = User.objects.create_user(username=username, password=password, email=email)
        user.profile.category = category  # Assuming 'Profile' is a related model for user categories
        user.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username')
        password = data.get('password')

        # Authenticate user
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
