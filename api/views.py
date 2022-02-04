from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import JatahCutiSerializer
from .models import JatahCuti

# Create your views here.

@api_view(['GET'])
def get_routes(request):
    return Response("Halo")

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_jatah_cuti(request):

    jt = JatahCuti.objects.all()
    serializer = JatahCutiSerializer(jt, many=True)

    return Response(serializer.data)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer