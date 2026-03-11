from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import InquirySerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt  # ne koristimo ga u ovom primeru, CSRF je omogućen
from django.views.decorators.http import require_POST

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Apartment
from .serializers import ApartmentSerializer, InquirySerializer


# Lista svih apartmana
class ApartmentsList(APIView):
    def get(self, request):
        apartments = Apartment.objects.all()
        serializer = ApartmentSerializer(apartments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



def my_page(request):
    return render(request, '/template.html')


@require_POST
def my_form_view(request):
    try:
        username = request.POST.get('username')
        if not username:
            return JsonResponse({"error": "Username je obavezno polje"}, status=400)

        # ovde možeš dalje da čuvaš u bazu, itd.
        print(f"Primljeno ime: {username}")  # ovo ide u terminal
        return JsonResponse({"success": f"Hello {username}"})
    except Exception as e:
        # Greške će se ispisati u terminalu
        import traceback
        traceback.print_exc()
        return JsonResponse({"error": str(e)}, status=500)

# Tvoj ContactView (za kontakt/inquiry)
class ContactView(APIView):
    def post(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("SERIALIZER ERRORS:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        
@api_view(['POST'])
def contact(request):
    print("Incoming data:", request.data)
    serializer = InquirySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    else:
        print("SERIALIZER ERRORS:", serializer.errors)
        return Response(serializer.errors, status=400)