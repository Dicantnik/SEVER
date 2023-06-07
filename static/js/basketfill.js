const num =  document.querySelector('.number');
const additem = document.querySelector('.offer-basket')

const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const number = document.querySelector('.number')
const price = parseInt(document.querySelector('.new-price').innerHTML)
const current_price = document.querySelector('.new-price')

// const volumedots = document.querySelectorAll('.value')
// volumedots.addEventListener('click', () =>{
//   volumedots.forEach(item => {
//     if (item.classList.contains('active-val')){
//       item.classList.remove('active-val')
//     } else{
//       item.classList.add('active-val')
//     }
//   })
// })

// Get all the elements that you want to interact with
const elements = document.querySelectorAll('.value');

// Add a click event listener to each element
elements.forEach(element => {
  element.addEventListener('click', () => {
    // Remove the class from all elements
    elements.forEach(el => {
      el.classList.remove('active-val');
    });

    // Add the class to the clicked element
    element.classList.add('active-val');
  });
});


const dots = document.querySelectorAll('.dots');

// Add a click event listener to each element
dots.forEach(element => {
  element.addEventListener('click', () => {
    // Remove the class from all elements
    dots.forEach(el => {
      el.classList.remove('active-dot');
    });

    // Add the class to the clicked element
    element.classList.add('active-dot');
  });
});


/*
forEach(element => {
  element.addEventListener('click', () => {
    if ( !element.classList.contains('.active-val')){
      element.classList.add('active-val')
    }
    
  }) 
})

*/
minus.addEventListener('click', () =>{
  if (parseInt(number.innerHTML) > 1){
    number.innerHTML = parseInt(number.innerHTML) - 1
    current_price.innerHTML = price * parseInt(number.innerHTML) 
  }
})

plus.addEventListener('click', () =>{
  number.innerHTML = parseInt(number.innerHTML) + 1
  current_price.innerHTML = price * parseInt(number.innerHTML)   
})


class Product {
  imageSrc;
  name;
  number;
  old_price;
  new_price;
  color;
  volume;
  constructor(imageSrc, name, old_price, new_price, color, volume, number) {
    this.imageSrc = imageSrc
    this.color = color
    this.old_price = old_price
    this.new_price = new_price
    this.volume = volume
    this.name = name
    this.number = number
  }
}


function search(product){
  try {
    let variabl = JSON.parse(localStorage.getItem("cart")).products
    return variabl.find( (item)=>{
    return item.name == product.name
  })
  } catch (error) {
    return false
  }
}



class Basket {
    constructor() {
      this.products = [];
    }
    get count() {
      return this.products.length;
    }
    addProduct(product) {
      if (search(product)){
        for(let i = 0; i < this.products.length; i++){
          if (this.products[i].name == product.name){
            this.products[i].number = product.number
            this.products[i].new_price = product.new_price
          }
        }
      }else{
        this.products.push(product);
      }
      
    }
    removeProduct(index) {
      this.products.splice(index, 1);
    }
    // get cost() {
    //   const prices = this.products.map((product) => {
    //     return toNum(product.price);
    //   });
    //   const sum = prices.reduce((acc, num) => {
    //     return acc + num;
    //   }, 0);
    //   return sum;
    // }
}

const basket = new Basket()

if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(basket));
}

const savedCart = JSON.parse(localStorage.getItem("cart"));
basket.products = savedCart.products;
const addedtobaasket = document.querySelector('.addedtobasket')
additem.addEventListener("click", (e) => {
      e.preventDefault();
      
      let old_price 
      try {
          old_price = document.querySelector(".old-price").innerHTML
      } catch (error) {
          old_price = '0'
      }
      const product = new Product(document.querySelector(".img").children[0].src, document.querySelector(".title").innerHTML, old_price, document.querySelector(".new-price").innerHTML, 'green', document.querySelector(".active-val").innerHTML, document.querySelector(".number").innerHTML);
      basket.addProduct(product);  
      localStorage.setItem("cart", JSON.stringify(basket));
      addedtobaasket.style.display = 'block';

});



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


const orderwindow = document.querySelector('.order-window')
const offernow = document.querySelector('.offer-now')
const submition = document.querySelector('.submition')
offernow.addEventListener("click", () => {
  orderwindow.style.display = 'flex';

})

const buyone = document.querySelector('.buyone')
submition.addEventListener('click', async () =>{
  let old_price 
      try {
          old_price = document.querySelector(".old-price").innerHTML
      } catch (error) {
          old_price = '0'
      }
  const product = new Product(document.querySelector(".img").children[0].src, document.querySelector(".title").innerHTML, old_price, document.querySelector(".new-price").innerHTML, 'green', document.querySelector(".active-val").innerHTML, document.querySelector(".number").innerHTML);
  const result = await respfunc({"args":{
    products: [product],
    phone: phone.value,
    post_office: post_office.value
  }})
  orderwindow.style.display = 'none';
  buyone.style.display = 'block'
})