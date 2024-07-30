

import numpy as np
import pandas as pd
from django.conf import settings
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import ClothingItem
from .serializers import ClothingItemSerializer
import os

class ClothingItemList(generics.ListAPIView):
    serializer_class = ClothingItemSerializer

    def get_queryset(self):
        queryset = ClothingItem.objects.all()
        category = self.request.query_params.get('category', None)
        clothing_type = self.request.query_params.get('clothing_type', None)

        if category:
            queryset = queryset.filter(category=category)
        if clothing_type:
            queryset = queryset.filter(clothing_type=clothing_type)

        return queryset

class ClothingItemDetail(generics.RetrieveAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer

class ClothingItemRecommendations(APIView):

    def get(self, request, *args, **kwargs):
        image_id = kwargs.get('id')
        if image_id is None:
            return Response({'error': 'Image ID not provided'}, status=400)

        item = get_object_or_404(ClothingItem, id=image_id)
        similarity_matrix_path = "../dataa/similarity_matrix.npy"
        clothing_features_csv_path = "../dataa/clothing_features_copy_ids.csv"

        if not os.path.exists(similarity_matrix_path):
            return Response({'error': 'Similarity matrix file not found'}, status=500)
        if not os.path.exists(clothing_features_csv_path):
            return Response({'error': 'Clothing features CSV file not found'}, status=500)
    
        

        similarity_matrix = np.load(similarity_matrix_path)
        df = pd.read_csv(clothing_features_csv_path)

        if item.id not in df['django_id'].values:
            return Response({'error': f'Image ID {item.id} not found in DataFrame'}, status=404)

        idx = df[df['django_id'] == item.id].index[0]
        sim_scores = list(enumerate(similarity_matrix[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[1:]  # Exclude the image itself

        input_category = df.loc[idx, 'category']
        input_clothing_type = df.loc[idx, 'clothing_type']

        complementary_types = {
            'tops': ['skirts', 'pants'],
            'skirts': ['tops'],
            'pants': ['tops']
        }

        if input_clothing_type not in complementary_types:
            return Response({'error': f'Clothing type {input_clothing_type} not supported for recommendations.'}, status=400)

        possible_recommendations = [
            (df.iloc[i]['django_id'], df.iloc[i]['category'], df.iloc[i]['clothing_type'], score)
            for i, score in sim_scores
            if df.iloc[i]['category'] == input_category and df.iloc[i]['clothing_type'] in complementary_types[input_clothing_type]
        ]

        # Debugging output
        print(f"Item ID: {item.id}, Category: {input_category}, Clothing Type: {input_clothing_type}")
        print("Possible Recommendations:")
        for rec in possible_recommendations:
            print(f"ID: {rec[0]}, Category: {rec[1]}, Clothing Type: {rec[2]}, Score: {rec[3]}")

        top_recommendations = possible_recommendations[:5]
        recommended_ids = [rec[0] for rec in top_recommendations]

        # Debugging: Mapping IDs to objects in the database
        recommended_objects = ClothingItem.objects.filter(id__in=recommended_ids)
        print("Mapped Recommended Objects:")
        for obj in recommended_objects:
            print(f"ID: {obj.id}, Category: {obj.category}, Clothing Type: {obj.clothing_type}")

        serializer = ClothingItemSerializer(recommended_objects, many=True)
        return Response(serializer.data)
