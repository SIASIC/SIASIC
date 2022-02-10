from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.models import User
from .serializers import JenisCutiSerializer, UserLevelSerializer, UserSerializer
from .models import JenisCuti, UserLevel
from .permissions import RoleAdmin, RoleAtasan, RolePejabat, RoleBapeg

# Create your views here.

@api_view(['GET'])
def get_routes(request):
    return Response("Halo")

# User
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = request.user
    user_level = UserLevel.objects.get(user=request.user.id)
    serializer = UserSerializer(user, many=False)

    result = serializer.data
    result['role'] = user_level.get_level_display()

    return Response(result)

# Role permission testing
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_jatah_cuti(request):

    jt = JenisCuti.objects.all()
    serializer = JenisCutiSerializer(jt, many=True)

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_role(request):

    userLV = UserLevel.objects.get(user=request.user.id)
    serializer = UserLevelSerializer(userLV, many=False)

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([RoleAdmin])
def get_role_admin(request):

    userLV = UserLevel.objects.get(user=request.user.id)
    serializer = UserLevelSerializer(userLV, many=False)
    # role = request.user.username

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([RoleAtasan])
def get_role_atasan(request):

    userLV = UserLevel.objects.get(user=request.user.id)
    serializer = UserLevelSerializer(userLV, many=False)
    # role = request.user.username

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([RolePejabat|RoleAdmin])
def get_role_pejabat(request):

    userLV = UserLevel.objects.get(user=request.user.id)
    serializer = UserLevelSerializer(userLV, many=False)
    # role = request.user.username

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([RoleBapeg])
def get_role_bapeg(request):

    userLV = UserLevel.objects.get(user=request.user.id)
    serializer = UserLevelSerializer(userLV, many=False)
    # role = request.user.username

    return Response(serializer.data)

# Token
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        user_level = UserLevel.objects.get(user=user.id)

        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['user_level'] = user_level.level
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer