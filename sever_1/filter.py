from django.db.models import Q

def filter(products, params):
    params = dict(params)
    if params.get('search'):
        search = params.pop('search')[0].lower()
        search_filter = Q(name__icontains=search)
        products = products.filter(search_filter)
    if params.get('maker'):
        products = products.filter(maker__in=params.get('maker'))
    if params.get('surface'):
        products = products.filter(surface__in=params.get('surface'))
    if params.get('category'):
        products = products.filter(category__in=params.get('category'))
    return products