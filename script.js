var cardNumber = document.getElementById('card-number');
var expiryInput = document.getElementById('expiry-input');

cardNumber.onkeyup = function(){
    document.getElementById('display-card-number').innerHTML = cardNumber.value;
}



expiryInput.onkeyup = function(){
    document.getElementById('expiry-display').innerHTML = expiryInput.value;
}


