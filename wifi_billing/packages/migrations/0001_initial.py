# Generated by Django 4.2.11 on 2025-04-23 06:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Package',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('speed', models.CharField(max_length=20)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('duration', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='UserPackage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateTimeField(auto_now_add=True)),
                ('expiry_date', models.DateTimeField()),
                ('data_limit', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('data_used', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('package', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='packages.package')),
            ],
        ),
    ]
