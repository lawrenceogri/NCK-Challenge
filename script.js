var cardNumber = document.getElementById('card-number');

cardNumber.onkeyup = function(){
    document.getElementById('display-card-number').innerHTML = cardNumber.value;
}

console.log("ha")