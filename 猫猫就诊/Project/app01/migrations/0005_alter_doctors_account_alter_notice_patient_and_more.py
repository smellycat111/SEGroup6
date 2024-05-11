# Generated by Django 5.0.4 on 2024-05-11 03:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app01", "0004_alter_onduty_date_alter_patients_birthday_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="doctors",
            name="account",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                to="app01.users",
                verbose_name="医生账号",
            ),
        ),
        migrations.AlterField(
            model_name="notice",
            name="patient",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                to="app01.patients",
                verbose_name="患者编号",
            ),
        ),
        migrations.AlterField(
            model_name="onduty",
            name="doctor",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                primary_key=True,
                serialize=False,
                to="app01.doctors",
                verbose_name="医生编号",
            ),
        ),
        migrations.AlterField(
            model_name="patients",
            name="account",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                to="app01.users",
                verbose_name="患者账号",
            ),
        ),
        migrations.AlterField(
            model_name="register",
            name="doctor",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                to="app01.doctors",
                verbose_name="医生编号",
            ),
        ),
        migrations.AlterField(
            model_name="register",
            name="patient",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                to="app01.patients",
                verbose_name="患者编号",
            ),
        ),
        migrations.AlterField(
            model_name="treatment",
            name="doctor",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                to="app01.doctors",
                verbose_name="医生编号",
            ),
        ),
        migrations.AlterField(
            model_name="treatment",
            name="patient",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                to="app01.patients",
                verbose_name="患者编号",
            ),
        ),
    ]
