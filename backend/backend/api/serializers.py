from rest_framework import serializers
from .models import Apartment, Inquiry

class ApartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apartment
        fields = [
            "id",
            "title",
            "price",
            "rooms",
            "floor",
            "floor_area",
            "tower",
            "floor_range",
            "orientation",
            "image",
        ]

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "message",
            "agree",
            "housing",
            "office",
            "commercial",
            "online",
            "press",
            "recommendation",
            "outdoor",
            "print_ad",
            "other",
            "created_at",
        ]
