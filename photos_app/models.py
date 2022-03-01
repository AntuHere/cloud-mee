from django.db import models

class Photo(models.Model):
    img = models.FileField(upload_to='img')

