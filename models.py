
from django.db import models

class ClothingItem(models.Model):
    id = models.AutoField(primary_key=True) 
    category = models.CharField(max_length=50)
    clothing_type = models.CharField(max_length=50)
    image = models.ImageField(upload_to='clothing_images/',blank=True)
    image_path2 = models.CharField(max_length=255, blank=True, null=True)  # For storing the absolute path

    def save(self, *args, **kwargs):
        if self.image and not self.image_path2:
            self.image_path2 = self.image.url
        super().save(*args, **kwargs)

    def __str__(self):
        return self.category

