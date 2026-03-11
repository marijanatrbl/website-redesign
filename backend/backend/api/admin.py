from django.contrib import admin
from .models import Apartment
from .models import Inquiry

@admin.register(Apartment)
class ApartmentAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "rooms", "floor_area")

@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "phone",
        "housing",
        "office",
        "commercial",
        "online",
        "press",
        "recommendation",
        "outdoor",
        "print_ad",
        "other",
        "agree",
        "created_at",
    )

    # grupisana polja u formi
    fieldsets = (
        ("Contact Info", {"fields": ("name", "email", "phone", "message")}),
        ("Email me about", {"fields": ("housing", "office", "commercial")}),
        ("How did you find out", {"fields": ("online", "press", "recommendation", "outdoor", "print_ad", "other")}),
        ("Agreement", {"fields": ("agree",)}),
    )