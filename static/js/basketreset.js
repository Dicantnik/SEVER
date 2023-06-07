
let items = JSON.parse(localStorage.getItem('cart')).products;
const field = document.querySelector('.elements')
const summary = document.querySelector('.price-all')


items.forEach((item) => {
    field.innerHTML += `
    <div class="element">
                        <div class="img">
                            <img src="${item.imageSrc}">
                        </div>
                        <div class="name">${item.name}</div>
                        <div class="calc">
                            <div class="minus">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.125V11.875C0 12.22 0.28 12.5 0.625 12.5H19.375C19.72 12.5 20 12.22 20 11.875V8.125C20 7.78 19.72 7.5 19.375 7.5H0.625C0.28 7.5 0 7.78 0 8.125Z" fill="black"/>
                                </svg>
                            </div>
                            <div class="number">${item.number}</div>
                            <div class="plus">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.375 7.5H12.5V0.625C12.5 0.28 12.22 0 11.875 0H8.125C7.78 0 7.5 0.28 7.5 0.625V7.5H0.625C0.28 7.5 0 7.78 0 8.125V11.875C0 12.22 0.28 12.5 0.625 12.5H7.5V19.375C7.5 19.72 7.78 20 8.125 20H11.875C12.22 20 12.5 19.72 12.5 19.375V12.5H19.375C19.72 12.5 20 12.22 20 11.875V8.125C20 7.78 19.72 7.5 19.375 7.5Z" fill="black"/>
                                </svg>    
                            </div>
                        </div>
                        <div class="price">
                            <span class="price-one">${item.new_price}</span><span> грн</span>
                        </div>
                        <div class="remove">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_228_4)">
                                <path d="M19.8172 16.0673L13.7499 10L19.8172 3.93267C19.8829 3.86705 19.9297 3.7908 19.9603 3.70955C20.0435 3.48706 19.996 3.22769 19.8172 3.04894L16.9511 0.182773C16.7723 0.00402806 16.5123 -0.0428456 16.2905 0.0396521C16.2092 0.0696513 16.133 0.11715 16.0673 0.182148L10 6.24948L3.93267 0.182148C3.86705 0.11715 3.7908 0.0696513 3.70955 0.0396521C3.48706 -0.0434706 3.22769 0.00402806 3.04894 0.182773L0.182773 3.04894C0.00402806 3.22769 -0.0428456 3.48768 0.0396521 3.70955C0.0702762 3.7908 0.11715 3.86705 0.182773 3.93267L6.2501 10L0.182773 16.0673C0.117775 16.133 0.0702762 16.2092 0.0396521 16.2905C-0.0434706 16.5123 0.00402806 16.7723 0.182773 16.9511L3.04894 19.8172C3.22769 19.996 3.48768 20.0428 3.70955 19.9603C3.7908 19.9297 3.86705 19.8829 3.93267 19.8172L10 13.7499L16.0673 19.8172C16.133 19.8829 16.2092 19.9297 16.2905 19.9603C16.5129 20.0435 16.7723 19.996 16.9511 19.8172L19.8172 16.9511C19.996 16.7723 20.0435 16.5123 19.9603 16.2905C19.9297 16.2092 19.8829 16.133 19.8172 16.0673Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_228_4">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
    `
 })


const prices = document.querySelectorAll('.price-one')

sum = 0

for (let i = 0; i < prices.length; i++) {
    sum += parseInt(prices[i].innerHTML)
}
summary.innerHTML = sum


let storage = JSON.parse(localStorage.getItem('cart'))

const elements = document.querySelectorAll('.element')

elements.forEach(item => {
    const deleteitem = item.querySelector('.remove')
    const plus = item.querySelector('.plus')
    const minus = item.querySelector('.minus')
    const number = item.querySelector('.number')
    const price = item.querySelector('.price-one')
    const price_one = parseInt(item.querySelector('.price-one').innerHTML) / parseInt(number.innerHTML)
    const name = item.querySelector('.name')
    plus.addEventListener('click', () =>{
        number.innerHTML = parseInt(number.innerHTML) + 1   
        price.innerHTML = price_one * parseInt(number.innerHTML)
        let suma = 0
        for (let i = 0; i < prices.length; i++) {
            suma += parseInt(prices[i].innerHTML)
        }
        summary.innerHTML = suma  
        for (let i = 0; i < storage.products.length; i++){
                if (storage.products[i].name == name.innerHTML){
                    storage.products[i].number = number.innerHTML
                    storage.products[i].new_price = price.innerHTML
                    localStorage.setItem("cart", JSON.stringify(storage));
                }
            }      
    })
    minus.addEventListener('click', () =>{
        if(parseInt(number.innerHTML) > 1){
            number.innerHTML = parseInt(number.innerHTML) - 1
            price.innerHTML = price_one * parseInt(number.innerHTML)
            let suma = 0
            for (let i = 0; i < prices.length; i++) {
                suma += parseInt(prices[i].innerHTML)
            }
            summary.innerHTML = suma
            for (let i = 0; i < storage.products.length; i++){
                if (storage.products[i].name == name.innerHTML){
                    storage.products[i].number = number.innerHTML
                    storage.products[i].new_price = price.innerHTML
                    localStorage.setItem("cart", JSON.stringify(storage));
                }
            }   
        }

    })
    deleteitem.addEventListener('click', () => {
        summary.innerHTML = parseInt(summary.innerHTML) - parseInt(price.innerHTML)
        for (let i = 0; i < storage.products.length; i++){
            if (storage.products[i].name == name.innerHTML){
               storage.products.splice(i, 1)
               localStorage.setItem("cart", JSON.stringify(storage));
               item.style.display = 'none'
            }
        }   
        
    })
})

const order = document.querySelector('.order')
const orderwindow = document.querySelector('.order-window')
const senddata = document.querySelector('.submition')
order.addEventListener('click', () => {
    if (orderwindow.style.display == 'flex'){
        orderwindow.style.display = 'none'
    }else{
        orderwindow.style.display = 'flex'
    }
    
})

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + '=') {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
        }
        }
    }
    return cookieValue;
};
var csrftoken = getCookie('csrftoken');






const phone = document.querySelector('.phone')
const post_office = document.querySelector('.post-office')


async function respfunc(data) {
    const result = await fetch('http://127.0.0.1:8000/order_save/', {method: 'POST',headers:{"Content-Type":"application/json", "X-CSRFToken":csrftoken}, body:JSON.stringify(data)}); 
    return result.json();
};

const textorder = document.querySelector('.confirm-order')

senddata.addEventListener('click', async () => {
    const result = await respfunc({"args":{
        products: storage.products,
        phone: phone.value,
        post_office: post_office.value
    }})
    orderwindow.style.display = 'none'
    textorder.style.display = 'block'
})



