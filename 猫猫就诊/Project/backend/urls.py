"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from app01 import views
from django.views.generic.base import TemplateView
from django.conf.urls.static import static

from backend import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", TemplateView.as_view(template_name="index.html")),
    path("api/login/", views.UserView.as_view()),
    path('api/patient/add/', views.PatientView.as_view()),
    path("api/registers/list/", views.RegisterView.as_view()),
    path("api/registers/cancel/", views.RegisterView.as_view()),
    path("api/appointment/add/", views.RegisterView.as_view()),
    path("api/register/lock/", views.RegisterView.as_view()),
    path("api/register/unlock/", views.RegisterView.as_view()),
    path("api/treatments/list/", views.TreatmentView.as_view()),
    path("api/prescriptionDetailsWriteBack/", views.TreatmentView.as_view()),
    path("api/duty/next_seven_days/", views.OnDutyView.as_view()),
    path("api/duty/all_next_seven_days/", views.OnDutyView.as_view()),
    path("api/duty/date_doctor_unoccupied/", views.OnDutyView.as_view()),
    path("api/doctors/list/", views.DoctorView.as_view()),
    path("api/doctors/setData/", views.DoctorView.as_view()),
    path("api/doctors/removeAvatar/", views.DoctorView.as_view()),
    path("api/doctors/delete/", views.DoctorView.as_view()),
    path("api/doctors/uploadAvatar/", views.UploadAvatarView.as_view()),
    path("api/medicine/list/", views.MedicineView.as_view()),
    path("api/medicine/delete/", views.MedicineView.as_view()),
    path("api/medicine/uploadPhoto/", views.UploadPhotoView.as_view()),
    path("api/medicine/removePhoto/", views.MedicineView.as_view()),
    path("api/medicine/setData/", views.MedicineView.as_view()),
    path("api/duty/doctor_status/", views.OnDutyView.as_view()),
    path("api/bills/list/", views.BillView.as_view()),
    path("api/notice/list/", views.NoticeView.as_view()),

    re_path(r'^api/medicine/photo/(?P<filename>[\w.-]+)$', views.UploadPhotoView.as_view()),
    re_path(r'^api/doctor/avatar/(?P<filename>[\w.-]+)$', views.UploadAvatarView.as_view()),
]