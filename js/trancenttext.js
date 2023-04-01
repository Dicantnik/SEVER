const text = document.querySelectorAll('.product-name')
text.forEach((item) => {
    if (window.screen.width <= 500 && item.innerHTML.length > 33){
        item.innerHTML = item.innerHTML.slice(0,33) + '...'

    }
})