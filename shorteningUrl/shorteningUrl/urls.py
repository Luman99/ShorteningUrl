from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from website.views import UrlViewSet

router = DefaultRouter()
router.register('Urls', UrlViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((router.urls, 'Urls'), namespace='Urls')),
]

for url in router.urls:
    print(url)