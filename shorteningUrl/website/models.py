from django.core.mail import send_mail
from django.db import models
from rest_framework import serializers


class Url(models.Model):

    text = models.CharField('text', max_length=50, default='x')
    short_version = models.CharField('short_version', max_length=50, default='x')


class UrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Url
        fields = '__all__'
