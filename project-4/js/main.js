// https://v6.exchangerate-api.com/v6/e10338bf4392560e0d0a327a/latest/USD
// getting data from local json file
// function calculate(){
//     fetch('./js/items.json')
//            .then(res => res.json()
//            .then(data=>console.log(data) ));
//    }
//    calculate();

// Errors and their types
// 200-> its is successful Response
// 300 -> user has been redirected
// 404 -> user code error
// 500 -> server side error
// getting element from DOM


const currOnePicker = document.getElementById('currency-one')
const currTwoPicker = document.getElementById('currency-two')
const amountOnePicker = document.getElementById('amount-one')
const amountTwoPicker = document.getElementById('amount-two')
const flipButton = document.getElementById('flip')
const rate = document.getElementById('rate')


currOnePicker.addEventListener('change',calculate)
currTwoPicker.addEventListener('change',calculate)
amountOnePicker.addEventListener('input',calculate);
currTwoPicker.addEventListener('input',calculate);

// fetch exchange rate from 3rd api 
function calculate(){
    alert('you have changed the currency')
}
calculate();

data.forEach