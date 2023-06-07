from django.shortcuts import render
from .models import Product, Order, ProductInOrder
from django.contrib.auth.decorators import login_required
from .filter import filter
import json
from django.http import JsonResponse

# Create your views here.

@login_required
def profile(request):
    orders = Order.objects.filter(user = request.user)
    ctx = {'orders': orders}
    return render(request, 'profile.html', ctx)

@login_required
def order(request, id):
    products = ProductInOrder.objects.filter(order = id)
    ctx = {'products': products}
    return render(request, 'order.html', ctx)

# def landing(request):
#     return render(request, 'landing.html')

# def basket(request):
#     return render(request, 'basket.html')

def product(request, id):
    product = Product.objects.get(id=id)
    ctx = {'product': product}
    return render(request, 'product.html', ctx)

def search_products(request):
     products = Product.objects.all()
     products = filter(products, request.GET)
     ctx = {
         "products": products,
     }
     return render(request, 'search.html', ctx)

def order_save(request):
    if request.user.is_authenticated:
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)    
        data = body_data.get('args')
        products = data['products']
        user = request.user
        phone = data['phone']
        post_office = data['post_office']
        order1 = Order(user=user, phone=phone, post_office=post_office)
        order1.save()
        for product in products:
            productmodel = Product.objects.get(name=product['name'])
            num = int(product['number'])
            col = product['color']
            capac = product['volume']
            temp = ProductInOrder(product=productmodel , number=num , color=col, capacity=capac, order=order1)
            temp.save()
    ctx = {
        'args': 'body'
    }
    return JsonResponse(ctx)
