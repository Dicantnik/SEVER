"""
URL configuration for sever project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from sever_1 import views
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView
app_name = 'sever_1'

urlpatterns = [
    path("", TemplateView.as_view(template_name="landing.html"), name='main'),
    path("basket/", TemplateView.as_view(template_name="basket.html"), name='basket'),
    path("product/<id>", views.product, name='product'),
    path("search/", views.search_products, name='search'),
    path("profile", views.profile, name='profile'),
    path("order/<id>", views.order, name='order'),
    path("order_save/", views.order_save, name='order_save'),
]


