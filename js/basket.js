const cross = document.querySelector('.remove')
const elem = document.querySelector('.element')

cross.addEventListener('click', () =>{
    elem.style.display = "none";
})

const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const number = document.querySelector('.number')
const price = document.querySelector('.price-one')
const price_of_1 = 749
const price_for_all = document.querySelector('.price-all')

minus.addEventListener('click', () =>{
    if (parseInt(number.innerHTML) > 1){
        number.innerHTML = parseInt(number.innerHTML) - 1  
        price.innerHTML = price_of_1 * parseInt(number.innerHTML) 
        price_for_all.innerHTML = price.innerHTML 
    }
})

plus.addEventListener('click', () =>{
    number.innerHTML = parseInt(number.innerHTML) + 1
    price.innerHTML = price_of_1 * parseInt(number.innerHTML)
    price_for_all.innerHTML = price.innerHTML
})

