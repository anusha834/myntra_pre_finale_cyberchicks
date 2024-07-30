
from django.urls import path
from .views import ClothingItemList, ClothingItemDetail, ClothingItemRecommendations

urlpatterns = [
    path('items/', ClothingItemList.as_view(), name='clothing-item-list'),
    path('items/<int:id>/', ClothingItemDetail.as_view(), name='clothing-item-detail'),
    path('items/<int:id>/recommendations/', ClothingItemRecommendations.as_view(), name='clothing-item-recommendations'),

]


