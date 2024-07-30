from django.contrib import admin


from django.contrib import admin
from .models import ClothingItem

@admin.register(ClothingItem)
class ClothingItemAdmin(admin.ModelAdmin):
    list_display = ('category', 'image_path2','clothing_type','image','id')
  
