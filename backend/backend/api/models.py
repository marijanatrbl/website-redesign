# backend/backend/api/models.py
from django.db import models
from django.contrib import admin


class Apartment(models.Model):
    title = models.CharField(max_length=200)
    price = models.IntegerField()
    rooms = models.IntegerField()
    floor = models.IntegerField()
    floor_area = models.PositiveIntegerField(help_text="Square meters")
    tower = models.CharField(max_length=10)
    # floor_range = models.CharField(max_length=20)
    orientation = models.CharField(max_length=50)
    
    image = models.ImageField(upload_to="apartments/", blank=True, null=True)
    
    tower_choices = [
        # (baza, prikaz)
        ("I", "I"),
        ("II", "II"),
        ("III", "III"),
    ]
    tower = models.CharField(max_length=3, choices=tower_choices, default="I")

    floor_range_choices = [
        ("2-10", "2-10"),
        ("11-18", "11-18"),
        ("19-27", "19-27"),
        ("28-30", "28-30"),
    ]
    floor_range = models.CharField(max_length=10, choices=floor_range_choices, default="2-10")

    orientation_choices = [
        ("Schneeberg", "Schneeberg"),
        ("Inner Stadt", "Inner Stadt"),
        ("Sonnenaufgang", "Sonnenaufgang"),
        ("Prater", "Prater"),
    ]
    orientation = models.CharField(max_length=50, choices=orientation_choices, default="Schneeberg")

    def __str__(self):
        return self.title
    # __str__ - ime objekta kao tekst


class Inquiry(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    message = models.TextField()
    agree = models.BooleanField(default=False)

    # Email me about
    housing = models.BooleanField(default=False)
    office = models.BooleanField(default=False)
    commercial = models.BooleanField(default=False)

    # How did you find out
    online = models.BooleanField(default=False)
    press = models.BooleanField(default=False)
    recommendation = models.BooleanField(default=False)
    outdoor = models.BooleanField(default=False)
    print_ad = models.BooleanField(default=False)
    other = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# cd backend
# env\Scripts\activate
# cd backend
# python manage.py makemigrations
# python manage.py migrate

# python manage.py runserver