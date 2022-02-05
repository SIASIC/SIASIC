from django.urls import path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.get_routes, name="routes"),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('jenis-cuti/', views.get_jatah_cuti, name="jenis-cuti"),

    path('role/admin/', views.get_role_admin, name="role-admin"),
    path('role/atasan/', views.get_role_atasan, name="role-atasan"),
    path('role/pejabat/', views.get_role_pejabat, name="role-pejabat"),
    path('role/bapeg/', views.get_role_bapeg, name="role-bapeg"),
]
