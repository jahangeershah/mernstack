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
let currOnePicker = document.getElementById('currency-one')
let currTwoPicker = document.getElementById('currency-two')
const amountOnePicker = document.getElementById('amount-one')
const amountTwoPicker = document.getElementById('amount-two')
const flipButton = document.getElementById('flip')
const rate = document.getElementById('rate')

// fetch exchange rate from 3rd api 
function calculate(){
    const currencyOneValue = currOnePicker.value;
    const currencyTwoValue = currTwoPicker.value;
    fetch(`https://v6.exchangerate-api.com/v6/e10338bf4392560e0d0a327a/latest/${currencyOneValue}`)
        .then(res => res.json()
        .then(data=> {
            const exchageRate = data.conversion_rates[currencyTwoValue];
            // console.log(exchageRate);
            // display the convertion rates
            rate.innerText = `1 ${currencyOneValue} = ${exchageRate} ${currencyTwoValue}`;
            amountTwoPicker.value = (amountOnePicker.value * exchageRate).toFixed(2) ;
        } ))

        
}


// flip function for flip button to change the dropDown 

function flip(){
    const temp  = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value =temp;
    calculate();

}


currOnePicker.addEventListener('change',calculate)
currTwoPicker.addEventListener('change',calculate)
amountOnePicker.addEventListener('input',calculate);
currTwoPicker.addEventListener('input',calculate);
flipButton.addEventListener('click',flip);


calculate();
