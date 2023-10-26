let counter = 0;

const max = 10;

const counterValue1 = document.getElementById('counter-value1');
const incrementBtn1 = document.getElementById('increment-btn1');
const decrementBtn1 = document.getElementById('decrement-btn1');

incrementBtn1.addEventListener('click', () => {
    if (counter < max) {
        counter++;
    }
    counterValue1.innerHTML = counter;
});

decrementBtn1.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    }
    counterValue1.innerHTML = counter;
});

const counterValue2 = document.getElementById('counter-value2');
const incrementBtn2 = document.getElementById('increment-btn2');
const decrementBtn2 = document.getElementById('decrement-btn2');

incrementBtn2.addEventListener('click', () => {
    if (counter < max) {
        counter++;
    }
    counterValue2.innerHTML = counter;
});

decrementBtn2.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    }
    counterValue2.innerHTML = counter;
});

var buy = document.getElementById("cart-buy");

buy.addEventListener('click', () => {
    window.alert("Thanks for purchasing the product!");


})