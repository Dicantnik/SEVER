# Generated by Django 4.2 on 2023-06-07 08:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("sever_1", "0011_alter_productinorder_capacity"),
    ]

    operations = [
        migrations.RenameField(
            model_name="order",
            old_name="email",
            new_name="phone",
        ),
    ]
