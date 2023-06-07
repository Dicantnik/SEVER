from django.db import models
from django.conf import settings
# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=200)
    new_price = models.IntegerField(default=0)
    old_price = models.IntegerField(blank=True, null=True)
    image = models.ImageField(upload_to='image/img', default='')
    maker = models.CharField(max_length=50, default='Farbman')
    surface = models.CharField(max_length=50, default='Бетон')
    category = models.CharField(max_length=50, default='Фарба')
    description = models.TextField(max_length=2000, default='fsoeuhfoszehfeoifzhes')

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now=True)
    phone = models.CharField(max_length=20, default='0953128886')
    post_office = models.CharField(max_length=50, default='7 відділення')
    
    def __str__(self):
        return str(self.id)


class ProductInOrder(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    number = models.IntegerField(default=0)
    color = models.CharField(max_length=20, default='white')
    capacity = models.CharField(max_length=20)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)




