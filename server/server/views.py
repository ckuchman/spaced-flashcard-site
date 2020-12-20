from django.http import JsonResponse
from django.views.generic import TemplateView
from django.shortcuts import render
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent
# print(f"base_dir is {BASE_DIR}")


def index(request):
    return render(request, os.path.join(BASE_DIR, 'client', 'build', 'index.html'))


# catchall = TemplateView.as_view(template_name="index.html")
