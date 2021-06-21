from rest_framework import viewsets, status, mixins
from rest_framework.response import Response

from .models import Url, UrlSerializer


class UrlViewSet(viewsets.ModelViewSet, mixins.CreateModelMixin, mixins.RetrieveModelMixin):
    queryset = Url.objects.all()
    serializer_class = UrlSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        return serializer.save()
