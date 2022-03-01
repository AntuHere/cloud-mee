from unittest.mock import patch
from . import models 
from . import views
from django.urls import path


urlpatterns = [
    path('',views.index)
]
