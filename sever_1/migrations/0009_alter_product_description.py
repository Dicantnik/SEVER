# Generated by Django 4.2 on 2023-06-03 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("sever_1", "0008_alter_product_old_price"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="description",
            field=models.TextField(default="fsoeuhfoszehfeoifzhes", max_length=2000),
        ),
    ]